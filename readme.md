# Personal Website

This repository hosts my personal website, built with **Jekyll** and the **Minimal Mistakes** theme and deployed automatically via **GitHub Pages**.

The site serves as a professional and academic landing page, combining biographical information with publications, talks, and blog-style content.

---

## 📝 Overview
This repository hosts a personal website powered by **Jekyll** and the **Minimal Mistakes theme**. The site showcases:

- Academic and professional **biography**
- **Curriculum Vitae**
- Academic and industrial **publications**
- Academic and industrial **talks**
- **Blog posts** on various topics

Content is Markdown-driven and structured to be easy to maintain and extend over time.

---

## 🗂 Project Structure

```text

├── _pages/                # Static pages
├── _posts/                # Blog posts
├── _publications/         # Publication collection items
├── _talks/                # Talks collection items
├── _data/                 # Navigation, UI text, and site data
├── _includes/             # Theme includes
├── _layouts/              # Layout templates
├── _sass/                 # Theme and custom styles
├── assets/                # CSS, JS, images, PDFs
├── .github/workflows/     # CI / deployment workflows
├── index.md               # Homepage (served at /)
├── _config.yml            # Site-wide configuration
├── Gemfile                # Ruby dependencies
├── Gemfile.lock           # Locked dependency versions
└── README.md              # Repository documentation
```

---

## ⚙️ Features

- ✅ Responsive academic website template (Minimal Mistakes)
- ✅ Markdown-driven content
- ✅ Collections for **publications** and **talks**
- ✅ PDF support for papers and presentations
- ✅ Author profile sidebar and wide layouts
- ✅ Automatic deployment with **GitHub Actions**
- ✅ Customizable styles via `_sass/`

---

## 🚀 Installation & Usage

### 💻 Install Jekyll & Bundler
```bash
gem install bundler jekyll
```

### 📦 Install Dependencies
```bash
bundle install
```

### 🔧 Serve the Website Locally
```bash
bundle exec jekyll serve
```
Website will be available at: 
```
http://localhost:4000
```

> Changes to `_config.yml` require restarting the server.

---

## 📖 Content Management

| 📄 Content | 📂 Directory |
|--------------|----------|
| Blog Post | `_posts/YYYY-MM-DD-title.markdown` |
| Static Page | `_pages/*.md` |
| Publication | `_publications/` |
| Talk | `_talks/` |
| Images | `assets/images/` |
| PDFs | `assets/publications/`, `assets/presentations/` |
| Navigation / UI Text | `_data/navigation.yml`, `_data/ui-text.yml` |

---

## 🌐 Deployment
The website deploys automatically via **GitHub Pages** using:
```
.github/workflows/pages.yml
```
Pull requests into the `main` branch trigger the deployment.

---

## 🌐 Continuous Integration & Deployment

### CI Pipeline (GitHub Actions)

CI workflow: `.github/workflows/ci.yml`

Runs on:
- `push` to `main`
- `pull_request` targeting `main`
- manual trigger (`workflow_dispatch`)

What it does:
- Checks out the repo
- Sets up Ruby **3.1.7** + Bundler **2.6.9** (with bundler cache)
- Builds the site: `bundle exec jekyll build --trace --strict_front_matter`
- Runs HTML checks (html-proofer) on `_site` (images/scripts/links; external links disabled)
- Audits Ruby gems using `bundler-audit`

### 🌐 Deployment
The website deploys automatically via **GitHub Pages** using:
```
.github/workflows/pages.yml
```
Pushing to the `main` branch triggers the deployment.

---

## ✅ License

© Tim Herpich. All rights reserved.

The content of this website — including but not limited to text, articles, blog posts, publications, figures, and presentations — is **not licensed for reuse**.

If you are interested in reusing any part of the content, please contact me directly to request permission.

**Unauthorized use of this material is prohibited**.

---
