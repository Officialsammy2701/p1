"use client";

// ============================================================
// src/components/ui/SocialSidebar.tsx
// Fixed left + right sidebars — social icons left, email right.
// Stays visible no matter where you scroll on the page.
// Inspired by brittanychiang.com
// ============================================================

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";
import { personal, socials } from "@/data/portfolio";

const socialIcons = [
  { key: "github", icon: FiGithub, label: "GitHub" },
  { key: "linkedin", icon: FiLinkedin, label: "LinkedIn" },
  { key: "twitter", icon: FiTwitter, label: "Twitter/X" },
  { key: "instagram", icon: FiInstagram, label: "Instagram" },
  { key: "codepen", icon: FaCodepen, label: "CodePen" },
] as const;

export default function SocialSidebar() {
  return (
    <>
      {/* ── Left sidebar — social icons ── */}
      <div
        className="
        fixed bottom-0 left-14 z-40
        hidden lg:flex flex-col items-center gap-5
        after:content-[''] after:block after:w-px after:h-24 after:bg-text-muted/40
      "
      >
        {socialIcons.map(({ key, icon: Icon, label }) => {
          const social = socials[key as keyof typeof socials];
          if (!social?.url) return null;

          const isActive = social.active !== false;
          return (
            <div key={key} className="relative group">
              {isActive ? (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex text-text-muted hover:text-accent-cyan transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ) : (
                <span
                  aria-label={label}
                  title={label}
                  className="inline-flex text-text-muted/30 cursor-not-allowed transition-colors duration-200"
                >
                  <Icon size={20} />
                </span>
              )}

              {!isActive && (
                <span
                  className="
                    absolute -top-9 left-1/2 -translate-x-1/2
                    whitespace-nowrap rounded
                    px-2 py-1 text-xs font-mono
                    bg-bg-secondary text-text-primary
                    border border-border-subtle
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  "
                >
                  Coming soon
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="
          fixed bottom-0 right-14 z-40
          hidden lg:flex flex-col items-center gap-5
          after:content-[''] after:block after:w-px after:h-24 after:bg-text-muted/40
        "
      >
        <a
          href={`mailto:${personal.email}`}
          className="
            font-mono text-xs text-text-muted tracking-widest
            hover:text-accent-cyan hover:-translate-y-1
            transition-all duration-200
            [writing-mode:vertical-rl]
          "
        >
          {personal.email}
        </a>
      </div>
    </>
  );
}