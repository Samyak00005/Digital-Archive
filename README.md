# The Digital Archive

A collection of websites, digital products, experiments & ideas.

## Stack

- React
- Vite
- Tailwind CSS v4
- React Router
- HugeIcons

## Routes

- `/` — The Digital Archive homepage
- `/projects` — All Projects
- `/project/:slug` — Individual project detail

## Data

All projects are stored in:

`src/data/projects.js`

Featured projects use `featured: true`. Smaller collection work uses
`collection: true`.

## Project Structure

```text
src/
├── components/
│   ├── home/
│   │   ├── featured/
│   │   │   └── FeaturedProjects.jsx  # Three alternating featured projects
│   │   ├── Collections.jsx
│   │   ├── Hero.jsx
│   │   └── Intro.jsx
│   └── layout/
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       ├── ScrollToHash.jsx
│       └── SiteLayout.jsx
├── hooks/
│   └── useRevealOnView.js   # Shared viewport reveal observer
├── data/
│   └── projects.js         # Single project data source
├── pages/
│   ├── AllProjectsPage.jsx
│   ├── HomePage.jsx
│   └── ProjectDetailPage.jsx
├── styles/
│   ├── components/         # Section/page-specific styles
│   │   ├── all-projects.css
│   │   ├── featured.css
│   │   ├── collections.css
│   │   ├── footer.css
│   │   ├── hero.css
│   │   ├── intro.css
│   │   ├── navbar.css
│   │   └── project-detail.css
│   ├── global.css          # Tailwind import, tokens, reset, shared utilities
│   └── motion.css          # Shared v1.13 motion system
├── AppRoutes.jsx
└── main.jsx
```

## Styling Rule

`global.css` is reserved for global concerns only: design tokens, reset/base
styles, typography primitives, layout utilities, themes, shared helpers, and
global accessibility/responsive rules. Section-specific styles belong in
`src/styles/components`.

## Naming

- **The Digital Archive** is the website/product name.
- **All Projects** is the `/projects` page and should be used for that
  destination throughout the UI.
- The `archive-*` CSS namespace remains the design-system namespace for The
  Digital Archive.

## Current Phase

v1.13 — Motion — **Implemented / QA**

The approved v1.12 desktop layout remains frozen. v1.13 adds a shared, restrained
motion language without changing section geometry or content hierarchy.

## v1.13 Motion

**v1.13.1 polish:** The global footer now uses a subtle translucent backdrop blur while keeping its typography and layout sharp.

**v1.13.2 polish:** Project Detail’s “View project” CTA is constrained to the right metadata column on desktop/tablet instead of spanning the full overview width.

**v1.13.3 polish:** Project Detail overview and “View project” typography are reduced for better hierarchy, and the redundant footer top metadata row is removed.

- Shared reveal system built with React, IntersectionObserver, and CSS motion tokens
- Soft route entrance between Home, All Projects, and Project Detail routes
- Fixed navbar initial entrance and existing active-state transitions preserved
- Hero composition unchanged; only existing elements receive staggered entrance timing
- Intro, Featured Projects, Collections, All Projects, Project Details, galleries, and footer reveal on entry
- Featured project reveal direction follows the existing alternating left/right composition
- Existing hover interactions preserved and complemented by subtle image scale reveals
- `prefers-reduced-motion` users receive an immediate, non-animated presentation
- No scroll-jacking, parallax, or layout-shifting animation


## v1.12 Layout Refinement

- Global fixed header shared across every route, with active page/section highlighting
- Global footer shared across every route
- Content-driven section heights; no global aspect-ratio rule for page sections
- Project Details rebuilt around the approved light intro / dark overview composition
- Aspect ratios are reserved for media frames where they improve composition
- Collections redesigned as a compact editorial list with smaller previews
- Desktop section spacing tightened across Intro, Featured Projects, Collections, All Projects, and Project Details; Hero remains unchanged

## v1.11 / v1.12 Closing QA

- All Projects visual system preserved; placeholder rows remain intentionally non-interactive
- Previous/next project navigation removed from Project Details; external View Project CTA now lives inside the dark overview section
- Remaining aspect-ratio-derived section heights removed; media ratios remain intentional
- Footer compacted without changing its information architecture
- Naming, routes, imports, data references, and component stylesheet boundaries audited
## Roadmap Status

- **v1.10 — Collections:** Complete
- **v1.11 — All Projects:** Complete
- **v1.12 — Clean Baseline + Layout Refinement:** Complete
- **v1.13 — Motion:** Implemented / QA
- **v1.14 — Mobile / Responsive:** Next

