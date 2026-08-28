# shuxincao.github.io

Personal academic website. Plain HTML/CSS/JS — no build step, no dependencies.

```
index.html              all content lives here
css/style.css           all styling (palette variables at the top)
js/main.js              gallery + lightbox + nav highlight + dark mode
assets/img/profile.jpg  portrait
assets/img/pubs/        paper thumbnails (16:10)
assets/img/photography/ your photos
assets/files/           CV pdf
```

## Preview locally

```bash
cd ~/Webpage && python3 -m http.server 8000
# → http://localhost:8000
```

## Things to fill in (search `TODO` in index.html)

1. **Profile links** — Google Scholar + GitHub URLs in the sidebar and in §04.
2. **News dates** — the entries are year-only; add months, newest first.
3. **Paper links** — the `Paper / arXiv / Code / Project` buttons currently point at `#`.
4. **Paper thumbnails** — drop 16:10 images (or GIFs) at
   `assets/img/pubs/{spectral,keygen,vista,cdm,maskedface,mobileda,cnc}.jpg`.
   Missing ones fall back to a neat venue label, so nothing breaks.
5. **Author lists** — VISTA's full author list was truncated in the CV (`…`); check it.
6. **Hobby blurbs** — the three cards at the bottom of §06.

## Adding photos

Drop files into `assets/img/photography/`, then list them at the top of `js/main.js`:

```js
const PHOTOS = [
  { file: "seoul-dusk.jpg", caption: "Seoul, 2024" },
  { file: "atlanta-01.jpg", caption: "Atlanta" },
];
```

They lay out in a masonry column grid and open in a keyboard-navigable lightbox
(← → to move, Esc to close). Resize to ~2000px on the long edge before committing —
GitHub Pages serves them uncompressed.

## Deploy to GitHub Pages

```bash
cd ~/Webpage
git init && git add -A && git commit -m "first version"
gh repo create shuxincao.github.io --public --source=. --push
```

Then: repo → Settings → Pages → Source `main` / root. Live at
`https://shuxincao.github.io` in a minute or two.

## Design notes

- Palette is sampled from the portrait — warm paper, ink, dusk amber (`--accent`).
  Change the six variables at the top of `style.css` to reskin the whole site.
- Hovering the portrait draws a keypoint graph over it — a small nod to KeyGen.
- Dark mode follows the OS by default, and remembers a manual override.
