---
title: Supported docs tools
description: Which documentation tools and file formats Publish can build, and what to know about each.
---

# Supported docs tools

Publish builds the repository you have. These are the tools and formats it reads. "Supported" means it is built and tested with real documentation repositories or realistic fixtures.

| Docs tool or format | Found by | Navigation comes from | Notes |
|---|---|---|---|
| Docusaurus (Markdown, MDX) | `docusaurus.config.js/ts` | `sidebars` files, folders, `_category_.json` | Versioned docs work. Custom React components render in a sandbox, or use your own build. |
| Mintlify (MDX) | `docs.json` or `mint.json` | tabs, groups, products, dropdowns, anchors, versions, languages | Versions are navigation only (same addresses). The banner, navbar button, footer and logos are read. |
| MkDocs (Material) | `mkdocs.yml` | `nav` | Versions made with `mike` cannot be imported; list your tags or branches in `sudodocs.json`. |
| mdBook | `book.toml` and `SUMMARY.md` | `SUMMARY.md` | |
| GitBook (legacy files) | `.gitbook.yaml` | `SUMMARY.md` | |
| Sphinx, reStructuredText | `conf.py` | toctrees | Directives that need your project's code (autodoc) need your own build. Common extensions such as `extlinks`, `intersphinx` and glossaries are handled. |
| Sphinx, MyST Markdown | `conf.py` and `.md` | `{toctree}` blocks | Admonitions, tabs, grids, cards and dropdowns work. Unknown directives show their content in a "couldn't show" box. |
| AsciiDoc in Antora | `antora.yml` and `modules/` | `nav.adoc` | Attributes in includes and links apply. Settings from the Antora playbook are not in the repository: set them under `attributes` in `sudodocs.json`. Includes from web addresses are not fetched. |
| AsciiDoc, plain files | `.adoc` files | folders or `sudodocs.json` | |
| Markdown in plain folders | none | folders, `_category_.json`, `sudodocs.json` | |
| A repository with only a README | `README.md` or `README.adoc` | a single page | A warning says so. |

Other tools (Hugo, Jekyll, VitePress, Nextra, Starlight and others) are not named integrations. Plain Markdown folders still publish; theme-specific shortcodes show as "couldn't show".

## What works everywhere

Search (per version and language), versions and translations, custom domains, pull request previews, page feedback, breadcrumbs, "last updated", landing pages with a hero, an announcement bar, a navbar button, a footer, icons, Mermaid diagrams, math, `llms.txt`, Markdown copies of every page and an MCP server.

## Diagrams in your pages

Mermaid works in every format: a `mermaid` code fence in Markdown, MDX and MyST; `.. mermaid::` in reStructuredText; and `[source,mermaid]` with a `----` block in AsciiDoc. SudoDocs draws them on the published site. If you also build with your own tool, that tool needs its Mermaid plugin.

## Navigation files

Once a site's navigation is kept in `sudodocs.json`, SudoDocs publishes from it and ignores the docs tool's own navigation. See [Navigation](navigation.md). Until you adopt it, the tool's own file (for example `sidebars.js` or `mkdocs.yml`) decides.
