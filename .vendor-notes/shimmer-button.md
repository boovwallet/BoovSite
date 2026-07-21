# shimmer-button — integrator merge notes

Vendored to `components/ui/shimmer-button.tsx`. Do NOT run the shadcn CLI for this.

## npm dependencies

**None.** The registry item declares no `dependencies` / `registryDependencies`.
It only needs `cn` from `@/lib/utils` (already present, clsx-only — no conflicting
classes are merged here, so the missing tailwind-merge is a non-issue).

## app/globals.css additions

**None required.** All keyframes go into `tailwind.config.ts` (below) so the
`animate-shimmer-slide` / `animate-spin-around` utility classes in the component
keep working unchanged.

## tailwind.config.ts — merge into `theme.extend`

The upstream registry ships these as a Tailwind v4 `@theme` block
(`cssVars.theme` + `css["@keyframes ..."]`). On 3.4.19 they become:

```ts
      keyframes: {
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0deg)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
      },
      animation: {
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
```

Insert alongside the existing `colors` / `fontFamily` / `boxShadow` entries in
`theme.extend`. If another vendored component already added `keyframes` or
`animation` keys, merge the entries in rather than replacing the object.

Notes:
- `--speed` is set inline by the component from the `shimmerDuration` prop, so the
  animation shorthand intentionally references an undefined-at-config-time var.
- `100cqw` is a container-query unit. It resolves against the
  `[container-type:size]` wrapper inside the component — no `@tailwindcss/container-queries`
  plugin is needed because the units are used via arbitrary values, not `@container` variants.
