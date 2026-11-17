---
title: Supported docs tools
description: Which documentation tools and file formats Publish can build, and what to know about each.
---

# Supported docs tools

Publish builds the repository you have. These are the tools and formats it reads. "Supported" means it is built and tested with real documentation repositories or realistic fixtures.

| Docs tool or format | Found by | Navigation comes from | Notes |
|---|---|---|---|
| Docusaurus (Markdown, MDX) | `docusaurus.config.js/ts` | `sidebars` files, folders, `_category_.json` | Versioned docs work. Pages written as React code (such as `src/pages/index.js`) and custom React components need an isolated build step or your own build: see [Pages built by your own React code](#pages-built-by-your-own-react-code). |
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

## Pages built by your own React code

A Docusaurus site's home page is usually `src/pages/index.js`: a React program, not a document. If your published site shows a box that says **This page is built by your site's own React code**, SudoDocs did not run that file. The page keeps its address, title and place in search, and the box stands where the content would be. Nothing else on the site is affected.

**What is shown, and when**

| What you have | What readers see |
|---|---|
| Markdown and MDX pages (`.md`, `.mdx`), including those in `src/pages` | The full page, always. |
| A custom React component inside an MDX page | The component, if SudoDocs can run your site's code in its isolated build step. If it cannot, a short note in the component's place and the rest of the page as written. |
| A page written as React (`.js`, `.jsx`, `.tsx` in `src/pages`) | The page, if the isolated build step runs. If it does not, the "built by your site's own React code" box. |
| Build mode **Use my docs tool's own build** (Enterprise) | The site exactly as Docusaurus builds it, home page included. If that build fails, SudoDocs publishes its own rendering instead, so the React pages show the box again. |

**What to do**

Choose the one that fits:

1. **Write the page in Markdown.** Replace `src/pages/index.js` with `src/pages/index.mdx` (or `index.md`). SudoDocs always renders it in full, and Docusaurus accepts it too. Do not keep both files: two files for the same address conflict in Docusaurus. For a product-style home page, use `layout: landing` and a `hero:` block in the front matter (see [Landing page](design.md#announcement-bar-navbar-button-footer-landing-page)).
2. **Choose a replacement home page in SudoDocs.** When the build finds a React home page, the Publish page says so. Click **Choose a home page**, or open **Content > Navigation > Home page**. SudoDocs suggests a home page made from your own site: its name, buttons to your first pages, and links to your main pages with each page's own description. Pick a design (**Hero with links** or **Hero with sections**) and change any text or address. The preview beside the form shows your site's pages with your changes, in your skin, before anything is saved. Click **Save and build** when it looks right. The replacement is kept in SudoDocs and your repository is not changed. If your site has other languages, **Other languages** lets you set a title, short text and button names for each; its links go to that language's own pages, named by their own titles, and pages that are not translated are left out. Versions have no home page of their own, because the home page is one page for the whole site. It is a simple page, not a copy of your React page. If your repository later gets a home page SudoDocs can show, that page is used and the replacement is left unused. **Turn off** brings back the note. From the command line, see [`publish home`](../../cli-guide/user/publish.md#replace-a-react-home-page).
3. **Use your own build** (Enterprise). Open **Content > Source**, choose **Use my docs tool's own build** under **How the site is built**, click **Save source**, then **Publish again**. Then open the latest build in **Activity**. It says either "Built by your docs tool's own build and published as it is" or "Your docs tool's own build didn't work, so SudoDocs rendered the site instead". In the second case the boxes are still there, and the build log below it shows why.
4. **Leave it.** The documentation pages publish as normal; only that page shows the box.

**How to see which pages are affected.** Open **Validate**. Each React page is listed as information, with a note such as "The page src/pages/index.js is a React page".

## Diagrams in your pages

Mermaid works in every format: a `mermaid` code fence in Markdown, MDX and MyST; `.. mermaid::` in reStructuredText; and `[source,mermaid]` with a `----` block in AsciiDoc. SudoDocs draws them on the published site. If you also build with your own tool, that tool needs its Mermaid plugin.

## Navigation files

Once a site's navigation is kept in `sudodocs.json`, SudoDocs publishes from it and ignores the docs tool's own navigation. See [Navigation](navigation.md). Until you adopt it, the tool's own file (for example `sidebars.js` or `mkdocs.yml`) decides.
