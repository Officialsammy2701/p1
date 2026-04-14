// ============================================================
// src/lib/github.ts
// Fetches public repos from GitHub and maps them to the
// same shape the archive page already expects.
// ============================================================

export interface ArchiveProject {
  id: string
  title: string
  description: string
  year: number
  tags: string[]
  github: string
  live?: string
}
 
// ── config ───────────────────────────────────────────────────
const GITHUB_USERNAME = 'officialsammy2701'
 
/**
 * Only repos that carry this topic will appear in the archive.
 * On GitHub: repo → Settings (gear) → Topics → add "portfolio"
 */
const FILTER_TOPIC = 'portfolio'
 
/**
 * Topics you don't want shown as tags (the filter topic itself,
 * plus any internal labels you use for organisation).
 */
const HIDDEN_TOPICS = new Set([FILTER_TOPIC])
// ─────────────────────────────────────────────────────────────
 
interface GitHubRepo {
  id: number
  name: string
  description: string | null
  topics: string[]
  homepage: string | null
  html_url: string
  created_at: string
  fork: boolean
  archived: boolean
}
 
export async function getArchiveProjects(): Promise<ArchiveProject[]> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
 
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }
 
  let page = 1
  const allRepos: GitHubRepo[] = []
 
  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=created`,
      {
        headers,
        // Next.js: revalidate the archive every 6 hours
        next: { revalidate: 21600 },
      }
    )
 
    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`)
      return []
    }
 
    const data: GitHubRepo[] = await res.json()
    allRepos.push(...data)
    if (data.length < 100) break
    page++
  }
 
  return allRepos
    .filter(
      (r) =>
        !r.fork &&
        !r.archived &&
        r.topics.includes(FILTER_TOPIC)
    )
    .map((r) => ({
      id: String(r.id),
      title: r.name.replace(/-/g, ' '),
      description: r.description ?? '',
      year: new Date(r.created_at).getFullYear(),
      tags: r.topics.filter((t) => !HIDDEN_TOPICS.has(t)),
      github: r.html_url,
      live: r.homepage || undefined,
    }))
    .sort((a, b) => b.year - a.year)
}