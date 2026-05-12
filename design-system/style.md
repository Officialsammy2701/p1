---
name: Ismail Studio Design System
description: Official brand identity guide for Ismail Studio. Use when applying design standards, brand colors, typography, logo usage, spacing, or visual formatting to any artifact.
license: Complete terms in LICENSE.txt
---
 
# Ismail Studio Design System
 
Official brand identity resources and design standards for Ismail Studio.
 
**Keywords**: branding, corporate identity, visual identity, design system, brand colors, typography, logo usage, spacing scale, animation, dark mode, theme switching
 
---

## Brand Guidelines

## Color Palette
 
Ismail Studio's color system is built around a dark-first approach with automatic light mode support. All colors are defined in HSL for flexibility and have been updated with **Burnt Sienna as the primary accent color**.
 
### Primary Backgrounds
 
- **Midnight** (`#0D1117` / HSL 216°, 28%, 7%) — `--color-bg-primary` — Primary background for dark surfaces
- **Deep Slate** (`#1C2128` / HSL 216°, 13%, 15%) — `--color-bg-secondary` — Secondary background for layering and depth
### Primary Text
 
- **Silver Mist** (`#E6EDF3` / HSL 208°, 42%, 93%) — `--color-text-primary` — Primary text color for high contrast
- **Stone** (`#B6BAC3` / HSL 210°, 8%, 71%) — `--color-text-secondary` — Secondary text for reduced emphasis
- **Iron** (`#8B949E` / HSL 212°, 12%, 61%) — `--color-text-muted` — Tertiary text for disabled, helper, or muted content
### Borders & UI Elements
 
- **Steel Blue** (`#30363D` / HSL 212°, 12%, 21%) — `--color-border` — Subtle borders and dividers
### Accent Colors
 
- **Burnt Sienna** (`#E07A3F` / HSL 18°, 70%, 57%) — `--color-accent` — Primary accent for CTAs, highlights, and brand emphasis
- **Burnt Sienna Dark** (`#D4652A` / HSL 19°, 76%, 45%) — `--color-accent-dark` — Darker variant for hover states and depth
### Light Mode Overrides
 
In light mode (toggled via `.light` class on `<html>`), colors invert automatically:
- Backgrounds: Inverted to white and very light gray
- Text: Inverted to dark grays and black
- Borders: Lightened for visibility on white backgrounds
- Accent: Darkened to `#C2611F` for proper contrast
---
 
## Typography
 
Font stack prioritizes **Geist** (display and body), **Syne** (condensed headlines), and **Space Mono** (monospace code).
 
### Typefaces
 
- **Display/Body Font**: `Geist` (fallback: system sans-serif) — Used for headings, body text, and UI labels
- **Condensed Font**: `Syne` (fallback: system sans-serif) — Used for compact headers and section titles
- **Monospace Font**: `Space Mono` (fallback: monospace) — Used for code, technical labels, and reference text
### Type Scale
 
#### Heading Levels
 
- **H1** — Geist, Weight 800 — Fluid size clamp(2.5rem → 4rem) — Hero titles and page headings
- **H2** — Geist, Weight 700 — Fluid size clamp(2rem → 3.5rem) — Major section headings
- **H3** — Geist, Weight 700 — Fluid size clamp(1.5rem → 2.5rem) — Subsection headings
- **H4** — Syne, Weight 500, Uppercase — 1.5rem — tracking-normal — Component titles
- **H5** — Syne, Weight 500, Uppercase — 1.25rem — tracking-wide — Callouts and labels
#### Special Styles
 
- **Numbered Title** — Syne, Weight 500 — tracking-1 (4.75px) — Section headers with numbered prefix (e.g., "01 Colors")
- **Mono Label** — Space Mono, Weight 400 — 0.875rem — Reference labels and code tags
- **Body Text** — Geist, Weight 400 — 0.9375rem — Line height 1.6 — Standard paragraph text
#### Legacy Scale (for backward compatibility)
 
- **fs-900** — Geist, Uppercase — Fluid clamp(5rem + 8vw, 9.375rem) — Legacy hero scale
- **fs-800** — Geist — 3.5rem — Legacy large heading scale
### Letter Spacing (Tracking)
 
- **tracking-tight** — 0.05em — Reduced spacing for compact layouts
- **tracking-normal** — 0.1em — Default spacing for most text
- **tracking-wide** — 0.15em — Expanded spacing for emphasis and elegance
- **tracking-1** — 4.75px — Extra-wide spacing for section headers
- **tracking-2** — 2.7px — Tight spacing for labels
- **tracking-3** — 2.35px — Minimal spacing for density
---
 
## Logo & Brand Mark
 
Four primary logo variations, each available in **dark surfaces** (white/light paths) and **light surfaces** (dark/black paths) versions.
 
### Logo Variations
 
1. **Master Mark** — Primary icon · Use standalone at any size · Best for favicons, app icons, embossing
2. **Simplified Mark** — Reduced-detail icon · Optimized for small sizes (sub-32px usage)
3. **Wordmark** — Logotype only · Use when icon not needed · Headers, footers, email signatures
4. **Full Lockup** — Icon + wordmark · Primary brand expression · Presentations, proposals, hero areas
5. **Accent Variant** — Burnt Sienna special edition · Reserved for favicon, premium embossing, featured callouts
### Usage Rules
 
#### Dark Surfaces
Use **light-path** files (e.g., `logo_master.svg`) — white fills render with high contrast on dark backgrounds
 
#### Light Surfaces
Use **black_variation** files (e.g., `logo_master_black_variation.svg`) — dark fills render with high contrast on light backgrounds
 
#### Minimum Sizes
- Master Mark: 24px minimum
- Simplified Mark: 16px minimum
- Below these sizes: use text-only wordmark
#### Clear Space
Maintain clear space equal to the logo height on all sides. For a 100px logo, maintain 100px breathing room on each edge.
 
#### Burnt Sienna Accent
Special use only. Reserved for favicon (32px), premium embossing on branded materials, and featured callouts. Do not use as primary logo.
 
#### No Modifications
Do not rotate, recolor, stretch, add effects, or place on busy backgrounds without a backing shape.
 
#### Theme Switching
In web contexts, toggle between variants using the `.light` class on `<html>` — exactly as the ThemeToggle component does.
 
---
 
## Spacing Scale
 
Consistent spacing system for margins, padding, and gaps.
 
- **xs** — 0.5rem — Tight spacing for adjacent elements
- **sm** — 1rem — Small margins and padding
- **md** — 1.5rem — Standard spacing (most common)
- **lg** — 2rem — Large sections and containers
- **xl** — 3rem — Major section separation
- **2xl** — 4rem — Page-level spacing and layout breaks
---
 
## Animation & Motion
 
Smooth, purposeful animations with staggered reveals and micro-interactions.
 
### Easing & Duration
 
- **ease-smooth** — `cubic-bezier(0.22, 1, 0.36, 1)` — Bouncy, organic feel
- **duration-fast** — 200ms — Quick interactions (hover, toggle)
- **duration-normal** — 300ms — Standard transitions
- **duration-slow** — 600ms — Emphasis and staggered reveals
### Animation Patterns
 
- **fade-in** — Opacity transitions for content reveal
- **slide-up** — Y-axis movement for entrance effects
- **float** — Subtle continuous vertical motion for depth
- **blink** — Pulse effect for attention or loading states
#### Best Practices
 
- Use `animation-delay` for staggered reveals on page load
- Trigger animations on scroll for performance
- Apply hover states with `duration-normal` (300ms)
- Reserve `ease-smooth` for emphasis; use linear for technical transitions
---
 
## Interactive Elements
 
### Theme Toggle
 
The design system supports automatic dark/light mode switching:
 
- Toggle class `.light` on `<html>` element
- All color variables update automatically via CSS custom properties
- No JavaScript required for theme persistence (handled by `index.js`)
- Respects system preference (`prefers-color-scheme`) as fallback
### Mobile Navigation
 
Responsive menu toggle with:
- Data attribute `data-visible` for state management
- ARIA labels for accessibility (`aria-expanded`)
- Smooth transitions matching animation scale
---
 
## Shadows & Effects
 
- **shadow-glow** — `0 0 20px rgba(224, 122, 63, 0.3)` — Burnt Sienna accent glow for emphasis and depth
## Brand Applications
 
### When to Use This Style Guide
 
✓ Web design & components  
✓ Presentations & decks  
✓ Visual documentation  
✓ Email templates  
✓ Social media graphics  
✓ Marketing materials  
✓ Internal communications  
 
### Design Philosophy
 
- **Minimal & Modern** — Clean typography and generous whitespace
- **High Contrast** — Optimized for accessibility and readability
- **Dark-First Approach** — Modern aesthetic with automatic light mode support
- **Refined Accent** — Burnt Sienna brings warmth and energy without overwhelming
- **Flexible Scale** — Fluid typography adapts to screen sizes
- **Purposeful Motion** — Animations enhance, not distract
---
 
## Technical Details
 
### CSS Custom Properties
 
All colors, fonts, and spacing are defined as CSS variables for consistency and easy theming:
 
```css
/* Colors */
--color-bg-primary
--color-bg-secondary
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
--color-accent
--color-accent-dark
 
/* Typography */
--font-display
--font-body
--font-mono
--font-sans-cond
 
/* Spacing */
--space-xs, --space-sm, --space-md, --space-lg, --space-xl, --space-2xl
 
/* Animation */
--ease-smooth
--duration-fast, --duration-normal, --duration-slow
```
 
### Light Mode Implementation
 
Toggle light mode by adding `.light` class to `<html>`:
 
```javascript
document.documentElement.classList.toggle('light', true);
```
 
All CSS variables automatically update; no additional changes needed.
 
### Font Requirements
 
- Geist font installed in environment for optimal rendering
- Syne font for condensed headlines
- Space Mono for code and technical labels
- System fallbacks ensure readability if fonts unavailable
---
 
## Version History
 
- **v2.0** — Current — Burnt Sienna accent, corrected light/dark descriptions, clear-space guidelines, Accent variant, 6-item usage grid
- **v1.0** — Initial design system with Midnight/Deep Slate palette
