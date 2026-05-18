# EchoMedia.ai Website

Dark neon React/Tailwind landing page for EchoMedia.ai with custom SVG artwork:

- EchoMedia.ai logo
- Neon infinity hero artwork
- Vanessa business attire founder portrait artwork
- Three-division business ecosystem
- Roadmap and contact sections

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy options

This is a static Vite site. Use these settings on most hosts:

- Build command: `npm run build`
- Publish/output directory: `dist`
- Install command: `npm install`
- Node version: 20 LTS or newer

### Netlify

Create a new site from the repo and use the settings above. `public/_redirects` is included so direct visits to deep links still serve `index.html`.

### Vercel

Import the repo as a Vite project. Vercel should detect the framework automatically; confirm the output directory is `dist`.

### GitHub Pages

Build locally with `npm run build`, then publish the `dist` directory with your preferred Pages workflow. Keep `vite.config.js` `base` set to `/` for a custom domain such as `echomedia.ai`. If deploying under a repo path, set `base` to `/<repo-name>/`.

## Preflight checklist

- Replace placeholder social URLs in `src/App.jsx` if the accounts differ.
- Confirm `hello@echomedia.ai` is the correct contact email.
- Add a custom social preview image if you want richer link previews than the logo.
- Point DNS for `echomedia.ai` at the selected hosting provider.
