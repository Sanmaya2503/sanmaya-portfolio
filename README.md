# Sanmaya Pandua — Portfolio

> Data Scientist · ML Engineer ·Data Analytics Professional  
> Live at: `https://sanmaya2503.github.io/sanmaya-portfolio`

---

## 📁 Project Structure

```
sanmaya-portfolio/
├── index.html          ← Main page (all content lives here)
├── css/
│   ├── reset.css       ← Browser reset
│   ├── tokens.css      ← 🎨 Design tokens (colors, fonts) — edit to retheme
│   ├── layout.css      ← Grid, sections, nav, responsive
│   ├── components.css  ← All UI components
│   └── animations.css  ← Keyframes & scroll animations
├── js/
│   ├── cursor.js       ← Custom cursor
│   ├── canvas.js       ← Hero neural-net background
│   ├── typewriter.js   ← Typing effect
│   ├── animations.js   ← Scroll-driven animations
│   └── nav.js          ← Navbar scroll + mobile drawer
├── assets/
│   └── Sanmaya_Resume.pdf   ← ⬅ Drop your resume PDF here
└── README.md
```

---

## 🚀 Deploy to GitHub Pages (step by step)

### Step 1 — Create the repo

1. Go to [github.com/new](https://github.com/new)
2. Name it exactly: `sanmaya-portfolio`
3. Set to **Public**
4. Click **Create repository** (don't initialise with README)

### Step 2 — Push the code

Open terminal in the `sanmaya-portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Sanmaya2503/sanmaya-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, choose **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save**

Your site will be live at:  
**`https://sanmaya2503.github.io/sanmaya-portfolio`**  
(takes ~1–2 minutes to go live)

---

## ✏️ How to update content

| What to change | Where |
|---|---|
| Name, bio, links | `index.html` — easy to find by section comments |
| Add a new project | Copy a `.project-card` block in `index.html` |
| Change skill percentages | `index.html` — `data-width="XX"` on `.skill-fill` |
| Change cycling roles | `js/typewriter.js` — edit the `roles` array |
| Colors / theme | `css/tokens.css` — change hex values at top |
| Radar chart values | `js/animations.js` — `const data = [...]` |
| Resume PDF | Replace `assets/Sanmaya_Resume.pdf` |
| Add a certification | Copy a `.cert-card` block in `index.html` |

---

## 🔄 After every update

```bash
git add .
git commit -m "Update: <what you changed>"
git push
```

GitHub Pages auto-deploys within ~30 seconds.

---

## 🎨 Quick retheme

Open `css/tokens.css` and change the hex values:

```css
--cyan:   #00D4FF;   /* primary accent    */
--violet: #7C3AED;   /* secondary accent  */
--green:  #00FF88;   /* highlight/success */
--bg:     #0A0F1E;   /* page background   */
```

---

## 📦 No build step needed

This is plain HTML/CSS/JS — no Node.js, no npm, no bundler.  
Open `index.html` directly in a browser to preview locally.
