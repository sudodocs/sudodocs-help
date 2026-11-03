---
title: Navigation and hidden files
description: Edit the site's navigation with a preview, let sudodocs.json take over from your docs tool, and keep files out of the site.
---

# Navigation and hidden files

## Edit the navigation

**Admin Dashboard > Publish > Navigation** shows the site's sidebar next to a live preview. Drag a page or a section (use the grip at the left), or use the buttons to move it, rename it or take it out of the navigation. Pages you leave out are still published and reachable by link; the editor lists them so you can bring them back.

Saving opens a **pull request** that writes the navigation to `sudodocs.json` in your repository. Nothing changes on the site until you merge it and publish. The preview shows the published state until then.

## Who decides the order

Until you adopt it, your docs tool's own file decides the published order: `sidebars` for Docusaurus, `mkdocs.yml`, `docs.json` or `mint.json`, `SUMMARY.md`, `nav.adoc`, or the toctrees of a Sphinx project.

**Adopt navigation** (on the Navigation tab) writes the current navigation into `sudodocs.json` once, through the usual pull request. From then on SudoDocs publishes from `sudodocs.json` and ignores the tool's own navigation. **Read it again from the tool's file** brings the tool's current navigation back into the editor for you to review.

While `sudodocs.json` decides, the tool's navigation files show a lock in [Author mode](../user/author-mode.md) and cannot be edited there. SudoDocs's own page-order moves can still write to them when you choose **Reorder and also update the tool's file**, for teams that keep building with their own tool as well.

If `sudodocs.json` is not valid JSON, the whole file is ignored by a build (its navigation, hidden files and settings). **Validate** treats that as a problem that blocks publishing, and Author mode shows the error with its line.

## Keep files out of the site

Some files should never be published: drafts, internal notes, generated files. List them in:

- `.sudoignore` (gitignore syntax) in the site folder, the content folder or the repository root; or `.mintignore` if there is no `.sudoignore`;
- `exclude` in `sudodocs.json`.

A line that starts with `!` brings a file back, even inside an excluded folder. Excluded files are not built, served, searchable, listed in the sitemap or included in `llms.txt`, the Markdown copies or the MCP server. Links to them are reported by Validate. Pages marked as drafts in their front matter are left out as well. `.gitignore` is not read.

You can also choose pages to hide from the Navigation tab: **Keep out of the site** opens a pull request that adds them to `exclude`, and **Publish again** brings one back.
