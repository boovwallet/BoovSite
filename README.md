# Hadi Abdul Research Portfolio

Single-page Next.js 14 research portfolio for the NCSSM Comprehensive Research Portfolio final draft.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Swap Assets

Replace files in `/public/assets/` with the same names:

- `reflection.mp4` for the video reflection
- `resume.pdf` for the resume
- `vitalwave-presentation.pdf` for the final oral presentation deck
- `popular-article.pdf` for the popular research article source PDF
- `portrait.jpg` for the portrait image
- `vitalwave-lederer.jpg` for the Duke BIG IDEAs Lab / VitalWave feature image

The site references these paths directly, so keeping the filenames stable avoids component edits.

## Edit Prose

Reflection, abstract, and popular article text live in `/content/`:

- `/content/reflection.md`
- `/content/abstract.md`
- `/content/popular-article.md`

The page reads these files with `lib/content.ts` at build time.

## Build

```bash
npm run build
```

## Deploy To Vercel

Push the repository to GitHub, import it in Vercel, and keep the defaults:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `.next`

No environment variables are required.
