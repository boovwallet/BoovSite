# animated-circular-progress-bar — integrator merge notes

Vendored to `components/ui/animated-circular-progress-bar.tsx`. Do NOT run the shadcn CLI for this.

## npm dependencies

**None.** The registry item declares no `dependencies` / `registryDependencies`
(and no `cssVars` / `css` / `tailwind` keys either — everything lived in the TSX).
It only needs `cn` from `@/lib/utils`, already present. No framer-motion: the whole
thing is CSS transitions on SVG strokes.

## app/globals.css additions

**None required.** The one keyframe goes into `tailwind.config.ts` (below) so the
`animate-acpb-fade-in` utility class in the component keeps working unchanged.

## tailwind.config.ts — merge into `theme.extend`

```ts
      keyframes: {
        "acpb-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "acpb-fade-in":
          "acpb-fade-in var(--transition-length, 1s) linear var(--delay, 0s) both",
      },
```

Insert alongside the existing `colors` / `fontFamily` / `boxShadow` entries in
`theme.extend`. **`shimmer-button` already contributes `keyframes` and `animation`
keys** — merge these entries into those objects rather than replacing them.

Why this exists: upstream used `animate-in fade-in` from the `tailwindcss-animate`
plugin (not installed; `plugins: []`) plus the Tailwind **v4-only** CSS-variable
shorthands `delay-(--delay)` and `duration-(--transition-length)`. On 3.4.19 the
`(--var)` syntax does not parse at all, and `animate-in` does not exist. Folding the
duration and delay into the `animation` shorthand above reproduces the original
behavior with one class and keeps both values driven by the same custom properties
the component already sets, so overriding `--transition-length` still works.

## Other v4 -> v3 conversions already applied inside the component

- `size-40` / `size-full` / `size-fit` left as-is — 3.4 ships `size-*`.
- No `@theme` block, no `oklch()`, no arbitrary-property (`filter-[...]`) syntax
  in this component, so nothing else needed rewriting.
