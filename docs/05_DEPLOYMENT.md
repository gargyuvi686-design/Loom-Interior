# Deployment

1. `npm run build` creates the `dist/` folder.
2. Upload `dist/` to any static host:
   - Netlify: drag and drop `dist/` or connect the GitHub repo (build command `npm run build`, publish directory `dist`).
   - Vercel: import the repo, framework preset Vite.
   - GitHub Pages: set `base: '/repo-name/'` in vite.config.js and publish `dist/`.
3. HTTPS is provided by these hosts, so the camera feature works.

## Git
```bash
git init
git add .
git commit -m "Loom Interiors front end"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Future back end (not included)
Express endpoint `POST /api/consultations` -> MongoDB/MySQL -> e-mail/WhatsApp notification. Replace the `console.log` in `ConsultForm.jsx` with a `fetch` call.
