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
│   └── global.css          # Tailwind import, tokens, reset, shared utilities
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

v1.12 — Clean Baseline + Layout Refinement — **Complete**

The v1.12 desktop baseline is now closed after structural cleanup, CSS
decomposition, navigation/footer refinement, project-detail refinement,
Collections refinement, All Projects QA, and the final consistency audit.
The next roadmap phase is v1.13 — Motion.


## v1.12 Layout Refinement

- Global fixed header shared across every route
- Global footer shared across every route
- Content-driven section heights; no global aspect-ratio rule for page sections
- Project Details rebuilt around the approved light intro / dark overview composition
- Aspect ratios are reserved for media frames where they improve composition
- Collections redesigned as a compact editorial list with smaller previews

## v1.11 / v1.12 Closing QA

- All Projects visual system preserved; placeholder rows remain intentionally non-interactive
- Project-detail navigation now moves only between published projects
- Remaining aspect-ratio-derived section heights removed; media ratios remain intentional
- Footer compacted without changing its information architecture
- Naming, routes, imports, data references, and component stylesheet boundaries audited
## Roadmap Status

- **v1.10 — Collections:** Complete
- **v1.11 — All Projects:** Complete
- **v1.12 — Clean Baseline + Layout Refinement:** Complete
- **v1.13 — Motion:** Next

