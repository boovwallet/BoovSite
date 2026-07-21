# rainbow-button — integrator merge notes

Component: `components/ui/rainbow-button.tsx` (hand-vendored, Tailwind 3.4.19 compatible).

**Both additions below are REQUIRED.** Without the `tailwind.config.ts` entry there is no
`animate-rainbow` utility and no `rainbow` keyframes (upstream registers these in a v4 `@theme`
block, which does not exist on v3). Without the `globals.css` custom properties every gradient
stop resolves to nothing and the button renders as a transparent/black pill.

npm dependencies to install: **none.**

---

## 1. `tailwind.config.ts` — merge into `theme.extend`

```ts
      keyframes: {
        rainbow: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "200%" },
        },
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
```

Resulting utility is `animate-rainbow`, matching the class names used in the component, so no
component edits are needed. `--speed` defaults to `2s` and can be overridden per instance via
inline style.

## 2. `app/globals.css` — add to the existing `:root` block

```css
  /* MagicUI rainbow-button gradient stops */
  --color-1: oklch(66.2% 0.225 25.9);
  --color-2: oklch(60.4% 0.26 302);
  --color-3: oklch(69.6% 0.165 251);
  --color-4: oklch(80.2% 0.134 225);
  --color-5: oklch(90.7% 0.231 133);
```

Nothing needs to be added to `html.dark` — the upstream registry ships identical light and dark
values for `--color-1..5`.

### Optional: legacy-safe / brand-tuned alternatives

`oklch()` needs Chrome 111+ / Safari 15.4+ / Firefox 113+. If you need older-browser coverage,
these are the pre-oklch MagicUI values and are a visually near-identical drop-in replacement:

```css
  --color-1: hsl(0 100% 63%);
  --color-2: hsl(270 100% 63%);
  --color-3: hsl(210 100% 63%);
  --color-4: hsl(195 100% 63%);
  --color-5: hsl(90 100% 63%);
```

To pull the sweep toward the Boov palette instead of a full-spectrum rainbow, swap stops 2–4 for
`var(--boov-purple)`, `var(--boov-lavender)`, `var(--boov-light-lavender)` and keep 1 and 5 as
accents. Values are read at paint time through `var()`, so no component change is required.

## 3. Nothing else

Do **not** run the shadcn CLI for this item — the upstream registry item is a v4 payload and would
rewrite `app/globals.css` / `app/layout.tsx`.
