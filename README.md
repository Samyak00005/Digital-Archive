# The Digital Archive

A collection of websites, digital products, experiments & ideas.

## Stack

- React
- Vite
- Tailwind CSS v4
- React Router
- HugeIcons
- Framer Motion

## Routes

- `/` — The Digital Archive homepage
- `/projects` — All Projects archive
- `/project/:slug` — Individual project detail

## Data

All projects are stored in:

`src/data/projects.js`

Featured projects use `featured: true`. Smaller collection work uses
`collection: true`.

## Project Structure

- `src/components/hero` — Homepage hero
- `src/components/common` — Shared homepage sections
- `src/components/projects` — Featured projects and project details
- `src/components/collections` — Collections section
- `src/components/archive` — All Projects archive
- `src/data` — Project data
- `src/styles/global.css` — Global design tokens, base styles, and legacy shared layout styles

## Current Phase

v1.12 — Project Details / clean baseline

The existing visual direction is intentionally preserved. No broad visual-ratio
audit is included in this phase.
