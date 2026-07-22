# Diparno Chatterjee — Portfolio

Cyberpunk developer portfolio built with Next.js 15 (App Router), React 19, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — root layout, page, global styles
- `components/sidebar` — fixed left navigation + mobile nav
- `components/hero` — hero heading, typing code block, developer visual
- `components/skills` — infinite skills marquee
- `components/about` — about card
- `components/youtube` — video library carousel
- `components/terminal` — terminal-style contact/build panel
- `components/footer` — footer with links, services, contact, socials
- `lib/data.ts` — nav items, skills, video content

## Performance notes

The App Router already gives per-route code splitting and automatic `<Link>`
prefetching for free, and `Sidebar` / `MobileNav` / `Footer` live in
`app/layout.tsx` so they persist across navigations instead of remounting.
On top of that:

- `next.config.ts` sets `experimental.optimizePackageImports` for
  `lucide-react` and `react-icons` so every route only ships the specific
  icons it imports instead of the whole icon package.
- `components/sidebar/NavLink.tsx` is a shared, `memo()`-wrapped nav item
  used by both `Sidebar` and `MobileNav`, so a route change only re-renders
  the one item whose active state actually flips.
- `components/project/ProjectCard.tsx` is wrapped in `memo()` since it's
  rendered in a list on both the Home and Project pages.
- `components/skills/SkillsSlider.tsx` had its icon lookup map and doubled
  marquee array hoisted to module scope (they were being reallocated on
  every render) and is memoized; the marquee itself is a pure CSS
  `transform` keyframe animation, so it never touches React state.
- The hero/terminal typing effects (`TypingCode`, `Terminal`, `Hero`) keep
  their local `setInterval`/`setTimeout` state fully contained to
  themselves, so they never trigger re-renders outside their own subtree.

No visual output changed — this is purely re-render/bundle-size cleanup.

## Notes on the hero image

The original reference screenshot's hero portrait is an AI-generated image of an unidentified person. Rather than sourcing or fabricating a photo of a specific real individual, this build uses an abstract SVG/CSS "developer silhouette" with the same circular blue/red glow-ring treatment, layout proportions, and sizing as the reference. Swap in your own photo by replacing the contents of `components/hero/DeveloperVisual.tsx` with an `<Image />` of your choice — the surrounding glow rings and layout will still line up.

## Responsive breakpoints covered

320 / 360 / 390 / 480 / 640 / 768 / 1024 / 1280 / 1366 / 1440 / 1600 / 1920px, using Tailwind's `sm/md/lg/xl/2xl` scale plus fluid units. The sidebar collapses into a top mobile nav below `lg` (1024px).
