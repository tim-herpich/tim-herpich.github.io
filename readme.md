# Personal Website

## 📝 Overview
This repository hosts a personal website powered by **Jekyll** and the **Minimal Mistakes theme**. The site showcases:

- Academic and professional **biography**
- **Curriculum Vitae**
- Academic and industrial **publications**
- Academic and industrial **talks**
- **Blog posts** on various topics

The website is designed for easy maintenance, publication tracking, and serves as a professional landing page.

---

## 🗂 Project Structure

| 📁 Folder | 📄 Description |
|-------|------------|
| `_posts/` | Blog posts and research articles |
| `_publications/` | Detailed publication metadata |
| `_talks/` | Conference and seminar talks |
| `_data/` | Site navigation and UI text data |
| `_includes/`, `_layouts/`, `_sass/` | Jekyll theme components |
| `assets/` | CSS, JavaScript, images, and PDFs |
| `_site/` | Generated static site (auto-generated) |
| `.github/workflows/` | GitHub Actions for deployment |
| `Gemfile`, `Gemfile.lock` | Ruby dependencies for Jekyll |
| `_config.yml` | Site-wide configuration file |

---

## ⚙️ Features

- ✅ Responsive academic website template
- ✅ Markdown-driven content
- ✅ Integrated publications, talks, and blog support
- ✅ Supports PDFs (papers, presentations)
- ✅ Automatic deployment with **GitHub Actions**
- ✅ Customizable theme and styles via `_sass/`

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
Website will be available at: `http://localhost:4000`

---

## 📖 Content Management

| 📄 Content | 📂 Directory |
|--------|-----------|
| **Blog Post** | `_posts/YYYY-MM-DD-title.markdown` |
| **Publication** | `_publications/` |
| **Talk** | `_talks/` |
| **Images / PDFs** | `assets/images/`, `assets/publications/`, `assets/presentations/` |
| **Navigation/Labels** | `_data/navigation.yml`, `_data/ui-text.yml` |

---

## 🌐 Deployment
The website deploys automatically via **GitHub Pages** using:
```
.github/workflows/pages.yml
```
Pushing to the `main` branch triggers the deployment.

---

## 📂 Example Asset Usage
- 📄 **Presentation PDF**: `assets/presentations/19Boston.pdf`
- 📄 **Publication PDF**: `assets/publications/20FactorInvesting.pdf`
- 🖼 **Images**: `assets/images/mba_defense.jpg`

---

## ✅ License
The content of this website (articles, blog posts, publications) is licensed under the 
[Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/). 

You are free to share and adapt the material for non-commercial purposes with proper attribution.
© Tim Herpich


## 🙌 Credits
Powered by:

- [Jekyll](https://jekyllrb.com/)
- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)

---

