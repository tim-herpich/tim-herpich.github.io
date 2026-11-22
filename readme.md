# Personal Website

This repository hosts my personal website, built with **Hugo** and the **Blowfish** theme.

The site serves as a professional and academic landing page, combining biographical information with publications, talks, and blog-style content.

## Overview

The site showcases:

- Academic and professional biography
- Curriculum Vitae
- Independent quantitative software and applications
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
├── themes/blowfish/       # Vendored Blowfish theme
├── .github/workflows/     # CI workflows
└── readme.md              # Repository documentation
```

## Local Setup

Install Hugo Extended, then start the local server:

```bash
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
| Software projects | `content/software/_index.md` |
| Images | `static/assets/images/` |
| Publication PDFs | `static/assets/publications/` |
| Presentation PDFs | `static/assets/presentations/` |

Existing content links use `/assets/...`; Hugo serves those files from `static/assets/...`.

### Adding software

Append an entry to the `software` list in `content/software/_index.md`. Each entry uses
`id` (a unique URL fragment), `title`, `subtitle`, `summary`, `description`,
`technologies`, and `domains`. Optional fields are `category`, `status`, `version`, `release_date`
(`YYYY-MM-DD`), `license`, `application` (live URL), `source` (verified public URL),
and `post` (Hugo content path, resolved with `RelRef`). The application link appears
in an invitation immediately after the summary; optional `application_invitation`
provides the text following the link. For a private repository,
omit `source` and add an `access` map with `description`, `contact` (for example
`/#contact`), and `label` to render the source-access invitation and contact button.
An optional `preview` map
accepts `src`, descriptive `alt`, `width`, and `height` for a real application image.
An optional `logo` map accepts the same fields for a compact mark next to the title.
Keep supplied brand assets in `static/assets/images/`. Blog listing images use
`featureimage`, with optional descriptive `featureimagealt` text.
Omitted fields do not render. The list template and `software-item.html` partial
reuse the existing collection styles, with additions in `assets/css/software.css`.

Verify functionality and licensing before publishing an entry. Software is presented
as independently developed, with all rights reserved. Asset Alchemy's entry and article
invite readers to contact Tim Herpich for access to its private source repository.
Any commercial use of the application and any use of its source code require his
prior written permission, including after repository access has been granted.
Repository access alone does not grant a license. Keep each project's repository license
consistent with its website notice; this website does not update external repositories.
Blog posts added under `content/posts/` appear automatically in the archive, search,
feeds, taxonomy pages, and sitemap, using the existing dated permalink convention.

## Continuous Integration

CI workflow: `.github/workflows/ci.yml`

Runs on:

- `push` to `main`
- `pull_request` targeting `main`
- manual trigger (`workflow_dispatch`)

What it does:

- Checks out the repository
- Installs Hugo Extended
- Builds the site with `hugo --gc --minify`

## License

© Tim Herpich. All rights reserved.

The content of this website, including but not limited to text, articles, blog posts, publications, figures, and presentations, is not licensed for reuse.

If you are interested in reusing any part of the content, please contact me directly to request permission.

Unauthorized use of this material is prohibited.
