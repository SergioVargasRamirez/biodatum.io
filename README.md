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

The site is served from the custom domain `biodatum.io` (see `public/CNAME`), so no base path is needed. To deploy under `https://<user>.github.io/<repo>/` instead, build with `BASE_PATH=/<repo>/`.

## License

The source code is released under the [MIT License](LICENSE). The website text, branding and name "Biodatum.io" are © Biodatum.io, all rights reserved, and are not covered by that license.
