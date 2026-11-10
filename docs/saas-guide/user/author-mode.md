---
title: Author mode
description: Write and edit your documentation pages in SudoDocs, with a live preview, AI tools, checks and review, on a work branch of your repository.
---

# Author mode

**Author** (left menu) is where you write and edit the pages of your docs. Everything you do happens on a **work branch** of your repository: every save is a commit, review happens on a pull request, and publishing merges it. Your published site does not change until then.

You need the **Writer** or **System Administrator** role. [Reviewers](reviews.md) see the changes they are asked to review, read-only.

## Start writing

Open **Author**. The start page lists:

- **Open changes to continue**, and your earlier changes (a discarded change can be removed from your list).
- **Where you can write**: your Publish sites and documentation repositories, one row for each repository. Choose **Start writing**.

A **change** is one work branch with any number of files. Most writing starts on a Publish site; you can also write in a documentation repository that has no site yet, or in a folder you saved as a source.

> Only documentation is editable by Writers: pages, images, snippets and the files that give the docs their structure (such as `sudodocs.json`, `docs.json`, `mkdocs.yml`). Scripts, stylesheets and build settings show a lock and are read-only unless an administrator allows them. See [Publishing policy](../admin/publish-admin.md).

## The editor

- **File list** with folders, lock icons, a dot on changed files and arrow-key navigation. Drag a file onto a folder to move it; links and navigation are updated.
- **Tabs** for several files. Each keeps its unsaved text. **Save all** commits everything at once.
- **Source** and **Visual** modes for Markdown and MDX (Source for reStructuredText and AsciiDoc), and a **live preview** in your site's own skin. The preview follows your unsaved text, including your navigation and variables.
- **Full screen**, resizable panes, and a bottom panel for **Problems** and **Tools**.
- **Command palette** (Cmd or Ctrl + Shift + P), **Go to file** (Cmd or Ctrl + P), **Search in files** (Cmd or Ctrl + Shift + F), and a **Keyboard shortcuts** list.

### Who else is here

Avatars show who is in the change. The first person to edit a file holds it, and others see a notice and a read-only copy until it is saved or released. **Take over** is possible and logged; nothing is lost, because **Save** still merges.

### Right-click on a file

Open, Cut, Copy, Paste, Copy relative path, Rename (also to change a page's format), Delete, and on a folder New page, New folder and Upload pages. A page's format must be one your docs tool reads; the menu shows why a format is disabled. Deleting a page that others link to asks first and removes its navigation entries.

### Page order

**Files | Page order** switches the left list to the site's navigation as it is in this change. Drag a page or section before, after or into another, or use the arrows. The move is written to `sudodocs.json`, which SudoDocs publishes from. The first move asks you to confirm that the site's navigation will change and to check it in **Site settings > Navigation** after merging. If your docs tool keeps its own navigation file, you can also update it in the same commit. See [Navigation](../publish/navigation.md).

## Insert

The **Insert** menu (and typing `/` at the start of a line) adds blocks in your docs tool's own syntax: callouts, tabs, steps, cards, columns, expandable sections, tables, code with titles and highlighted lines, math, diagrams, includes, images, link cards, links to the API reference and more. What the menu offers is what the site shows.

- **Page settings** edits front matter (title, description, sidebar label and the rest) as a form.
- **Links** and **Images** have pickers: pages, headings and images of the site, and **Upload new**. You can also paste or drop an image into the text.
- **Embeds** insert videos, designs and live code from allowed hosts (YouTube, Vimeo, Loom, Figma, CodePen and Replit by default); an administrator edits the list per organization and per site.
- **API endpoints table** builds a table from an OpenAPI spec and keeps it in step.

### Variables and snippets

**Variables** are values used on many pages (a product name, a version). Change one and every page updates. **Snippets** are reusable pieces that pages include, in your docs tool's own way; the manager shows where each is used and can rename, move or delete one safely.

### Templates for new pages

**New page** starts from a template: How-to, Tutorial, Concept, Reference, Troubleshooting, Release note or FAQ, in the format of your docs tool and in several languages. Your organization can add its own: **Insert > Save this page as a template**. Pages made from a template are checked for the sections the template had.

### Pages that are not Markdown

reStructuredText and AsciiDoc get page settings (their header fields and attributes) and structure checks. **OpenAPI files** can be edited too: the preview is your API reference drawn from the text, with problems listed by line and a **Describe the API** form.

## Checks

**Check this page** runs free checks: broken links and headings, missing titles, skipped heading levels, embeds from hosts that are not allowed, include loops and, for template pages, missing sections. **Problems** lists them. **Self review** (below) is the optional AI pass.

## History and restore

**History** lists the versions of a page (from your repository) with who changed it, labelled when the change came through SudoDocs. Open any version and **Restore** it as a new commit. **Revert** puts a page back as it was when the change started. Deleted pages are restorable.

## Tools

The **Tools** tab lists what applies to the file you have open. Anything that costs credits shows the cost first, and nothing is applied until you choose **Apply**.

| Tool | What it does |
|---|---|
| **AI assist** | Rewrites a selection or the page (2 credits per 5,000 characters) and shows before and after. |
| **Mermaid diagram** | Creates or picks a [diagram](diagram-gen.md) from your library and inserts it. |
| **Doc Assistant** | Chat about your code and docs, in the context of the open page. |
| **Converter** | Converts pasted text into the page's format. |
| **Draft from a ticket or pull request** | Fetches a Jira ticket or a GitHub pull request and drafts the changes it needs into the affected files; you pick the files. It shows any existing Docflow for the same ticket and lets you edit it here. |
| **From other tools** | Brings in a Changelog draft, or a Capture as an embed. |

## Review before you ask

**Self review** is an AI pass over the pages of your change, free to start and priced before it runs, with lenses such as style, grammar, structure and consistency. Its comments appear in the review panel labelled **SudoDocs Editor (AI)**; the AI never approves anything.

When you are ready, **Request review** (or **Open pull request**) saves everything, opens the pull request and asks the people you choose. See [Reviews](reviews.md). Reviewers can be people outside SudoDocs: invite them by email from the same dialog, within your organization's approved domains.

If another change touches a file you are editing, you see a notice. An administrator can turn editing off for a repository at any time; the editor becomes read-only with a banner.

## From the command line

Everything above is available as `sudodocs edit` commands: see [Author mode commands](../../cli-guide/user/edit.md).
