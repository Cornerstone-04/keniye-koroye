# Frontend Foundation

This project uses the Next.js App Router. Keep `app/` focused on routing,
metadata, and page composition, while reusable UI stays in `components/` and
shared content/configuration stays in `lib/`.

## Navigation

Route navigation should open at the top of the next page. The root layout mounts
`RouteScrollReset`, which performs an immediate scroll reset on pathname changes.
Avoid global smooth scrolling for route transitions.

## Formatting

Use Bun and Prettier for formatting:

```bash
bun run format
bun run format:check
```

The Prettier config lives in `prettier.config.mjs` and uses the Tailwind CSS
plugin with `app/globals.css` as the Tailwind v4 stylesheet.

## Design Tokens

The site's editorial tokens are the source of truth:

- `ink`
- `paper`
- `cream`
- `accent`
- `muted`
- `rule`

shadcn tokens are mapped onto those values in `app/globals.css`. Preserve the
site meaning of `muted` as muted text, because existing pages use `text-muted`
extensively.

## Component Architecture

Prefer focused page sections over monolithic route files. Extract shared pieces
only when they have real shared ownership across pages or remove meaningful
duplication. Keep page-specific content close to the page unless multiple pages
consume it.

## shadcn/ui

Use shadcn primitives for new common UI controls when they fit the design, but
style them through local shared components in `components/ui/`. The generated
components should inherit Keniye's square, editorial visual language rather than
introducing rounded SaaS defaults.
