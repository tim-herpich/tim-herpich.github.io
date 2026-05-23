# Personal Website

This repository hosts my personal website, built with **Hugo** and the **Blowfish** theme.

The site serves as a professional and academic landing page, combining biographical information with publications, talks, and blog-style content.

## Overview

The site showcases:

- Academic and professional biography
- Curriculum Vitae
- Academic and industrial publications
- Academic and industrial talks
- Blog posts on finance, technology, and science

Content is Markdown-driven and structured to be easy to maintain and extend over time.

## Project Structure

```text
├── config/_default/       # Hugo and Blowfish configuration
├── content/               # Markdown content
│   ├── posts/             # Blog posts
│   ├── publications/      # Publication items and list page
│   ├── talks/             # Talk items and list page
│   ├── cv/                # CV page
│   └── about/             # About page
├── layouts/               # Custom Hugo templates for publications and talks
├── static/assets/         # Images, PDFs, icons, and legacy static assets
├── themes/blowfish/       # Blowfish theme submodule
├── .github/workflows/     # CI workflows
└── readme.md              # Repository documentation
```

## Local Setup

Install Hugo Extended, then fetch the theme submodule:

```bash
git submodule update --init --recursive
hugo server
```

The local site will be available at:

```text
http://localhost:1313
```

To build the production site:

```bash
hugo --gc --minify
```

## Content Management

| Content | Directory |
| --- | --- |
| Home page | `content/_index.md` |
| Blog posts | `content/posts/` |
| CV page | `content/cv/_index.md` |
| About page | `content/about/_index.md` |
| Publications | `content/publications/` |
| Talks | `content/talks/` |
| Images | `static/assets/images/` |
| Publication PDFs | `static/assets/publications/` |
| Presentation PDFs | `static/assets/presentations/` |

Existing content links use `/assets/...`; Hugo serves those files from `static/assets/...`.

## Continuous Integration

CI workflow: `.github/workflows/ci.yml`

Runs on:

- `push` to `main`
- `pull_request` targeting `main`
- manual trigger (`workflow_dispatch`)

What it does:

- Checks out the repository with submodules
- Installs Hugo Extended
- Builds the site with `hugo --gc --minify`

## License

© Tim Herpich. All rights reserved.

The content of this website, including but not limited to text, articles, blog posts, publications, figures, and presentations, is not licensed for reuse.

If you are interested in reusing any part of the content, please contact me directly to request permission.

Unauthorized use of this material is prohibited.
