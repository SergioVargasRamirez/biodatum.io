# biodatum.io

Landing page for Biodatum.io consulting services. React + Vite + Tailwind, deployed to GitHub Pages.

## Development

```
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # output in dist/
```

## Editing content

All copy, rates and the booking URL live in `src/content.js`. Legal pages are in `src/components/Legal.jsx` (the privacy policy is a draft and needs legal review).

## Deployment

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`. In the repository settings, set Pages → Source to "GitHub Actions".

Without a custom domain the site lives at `https://<user>.github.io/<repo>/`, so build with `BASE_PATH=/<repo>/`. With a custom domain (add `public/CNAME` containing the domain), no base path is needed.
