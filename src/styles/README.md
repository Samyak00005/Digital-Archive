# The Digital Archive — CSS Split

This split is based directly on the supplied `Pasted code(4).css`.
No styling rules were intentionally rewritten; the existing rules were separated by React/page section.

## Files

- `global.css` — fonts, Tailwind import, tokens, reset/base, typography, layout, colors, generic links/images, selection, reduced-motion base, and imports for section styles.
- `navbar.css` — Navbar/navigation styles.
- `hero.css` — Homepage Hero styles and Hero responsive styles.
- `intro.css` — Homepage Intro / Manifesto styles.
- `featured.css` — Featured Project system, including RetroToonz / Heywalls / LocalSewa shared styles and responsive rules.
- `footer.css` — Site Footer styles and mobile footer rules.
- `project-archive.css` — `/projects` All Projects page styles.

## React mapping

Import only `global.css` from the application entry point, as before. It imports the section styles.

If you later prefer component-local imports, the section files can instead be imported by:
- `Navbar.jsx` → `navbar.css`
- `Hero.jsx` → `hero.css`
- `Intro.jsx` → `intro.css`
- `FeaturedProject.jsx` → `featured.css`
- `Footer.jsx` → `footer.css`
- `ProjectArchive.jsx` → `project-archive.css`

Project Detail CSS was not invented here because it was not present in the supplied stylesheet.
