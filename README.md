# Portfolio

A minimal, static portfolio site for PM / consulting roles. Plain HTML/CSS/JS —
no build step, no dependencies. Open the folder in VS Code, edit, and push to GitHub.

## Structure

```
portfolio/
├── index.html        Home — intro + links to the three sections
├── consulting.html   Consulting case studies (CON-01, CON-02, CON-03)
├── consulting/        Full click-through detail page per consulting case
│   ├── con-01.html
│   ├── con-02.html
│   └── con-03.html
├── technical.html    Data science / analytics projects (TEC-01, TEC-02, TEC-03)
├── psych.html         Behavioral psych studies (PSY-01, PSY-02)
├── contact.html       Photo, name, phone, email
├── css/style.css     All styling — colors/fonts are variables at the top
├── js/main.js        Populates the scrolling tool ticker (edit the TOOLS array)
├── assets/           Put your photo here (e.g. assets/photo.jpg)
└── README.md
```

Each case card on `consulting.html` is a clickable link through to its own
detail page in `consulting/` (a fuller write-up with a stat strip, situation/
approach/findings/recommendation, and role). The same pattern will be used for
`technical/` and `psych/` once those sections are filled in.

## What to fill in

Every placeholder is wrapped in `[brackets]`. Search the project for `[` to find
everything that still needs your real content. Each project section also has a
sentence at the bottom of the card:

> Attach your deck / notebook / write-up and I'll fold in the real details.

That's a note for us — when you're ready, paste or upload the source material for
a given project/study in chat and Claude will write the real copy into that card.

**Suggested order to fill things in:**
1. Name, title, and one-line positioning statement (`index.html`, and swap
   `[Your name]` sitewide)
2. Contact info + photo (`contact.html`, `assets/photo.jpg`)
3. One project per section to start (`consulting.html`, `technical.html`, `psych.html`)

## The tool ticker

The scrolling bar at the bottom of every page is generated from one list, in
`js/main.js`:

```js
const TOOLS = ["Stata", "R", "SPSS", "Python", "SQL", "Excel", ...];
```

Edit that array and it updates on every page — no need to touch the HTML.

## Adding your photo

1. Save your photo into `assets/` (e.g. `assets/photo.jpg`)
2. In `contact.html`, find the `.contact-photo` div and replace the placeholder
   text with:
   ```html
   <img src="assets/photo.jpg" alt="[Your name]">
   ```

## Running it locally

No build tools needed — just open `index.html` in a browser. For live-reload
while editing, you can use the VS Code "Live Server" extension, or run:

```bash
python3 -m http.server 8000
```
and visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `git init`, `git add .`,
   `git commit -m "Initial portfolio"`, then push to a new repo on GitHub).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`
   within a few minutes.

## Design notes

- Type: Fraunces (headlines) + Inter (body) + IBM Plex Mono (labels/data/ticker)
- Color and spacing are all CSS variables at the top of `css/style.css` — safe
  to retheme without touching layout code
- The `CON-01` / `TEC-01` / `PSY-01` style codes are case-file numbering, meant
  to read like consulting engagement codes
