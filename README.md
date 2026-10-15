# Danel Schwartz - Cybersecurity & SecOps Portfolio (`danelschwartz.github.io`)

Production-ready, dependency-free static portfolio website for **Danel Schwartz** (SecOps Specialist & Information Security Analyst). Designed for free hosting on **GitHub Pages** (`https://danelschwartz.github.io/`) with zero-configuration portability to **Vercel**.

---

## Project Structure

```text
danelschwartz.github.io/
├── index.html                           # Primary semantic HTML5 portfolio page
├── styles.css                           # Responsive dark-theme stylesheet with reduced-motion support
├── script.js                            # Vanilla JS for project filtering, mobile menu & clipboard copy
├── 404.html                             # Custom HTTP 404 fallback page for GitHub Pages & Vercel
├── robots.txt                           # Search crawler directives
├── sitemap.xml                          # XML sitemap for search engine indexing
├── README.md                            # Deployment, customization & Vercel migration guide
└── assets/
    ├── favicon.svg                      # Custom DS Shield SVG favicon
    └── Danel_Schwartz_CV_2026.docx      # Downloadable ATS-optimized resume
```

---

## Deployment to GitHub Pages (Step-by-Step)

1. **Create the Repository on GitHub:**
   - Log in to `https://github.com/DanelSchwartz`.
   - Click **New repository**.
   - Set **Repository name** to `danelschwartz.github.io` (exact match required for user pages).
   - Set visibility to **Public** and click **Create repository**.

2. **Upload or Push the Project Files:**
   - **Option A (Web Upload):** Click **uploading an existing file** on the repository setup screen, drag and drop all files and the `assets/` folder from this directory, and click **Commit changes**.
   - **Option B (Git CLI):**
     ```bash
     git init
     git add .
     git commit -m "Initial commit: SecOps & InfoSec portfolio"
     git branch -M main
     git remote add origin https://github.com/DanelSchwartz/danelschwartz.github.io.git
     git push -u origin main
     ```

3. **Configure GitHub Pages:**
   - Go to **Settings -> Pages** inside your `danelschwartz.github.io` repository.
   - Under **Build and deployment -> Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
   - Wait 1-2 minutes and visit `https://danelschwartz.github.io/`.

---

## Future Migration to Vercel

Because this project uses pure static HTML5, CSS3, and Vanilla JS without GitHub-specific build plugins:
1. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New... -> Project** and import `DanelSchwartz/danelschwartz.github.io`.
3. Leave **Framework Preset** as **Other** and **Output Directory** as default (`.`).
4. Click **Deploy**.
5. If migrating to a custom domain later, add the domain in **Vercel -> Settings -> Domains** and update the `<link rel="canonical">` and `sitemap.xml` URLs to match your custom domain.
