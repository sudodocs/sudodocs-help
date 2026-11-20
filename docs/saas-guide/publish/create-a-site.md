---
title: Create a site
description: Connect a repository, create a docs site, publish it, preview pull requests, and go back to an earlier build.
---

# Create a site

Creating a site is an administrator task. Open **Publish** in the left menu: it shows your sites as cards (with status, pages and warnings), your plan, and **Create a site**.

## Before you start

- Connect the GitHub repository that holds your docs under **Admin > Repositories** (see [Connect repositories](../admin/connect-repos.md)). If none is connected, the form tells you to connect one first.
- Know where the docs live. SudoDocs finds the folder from your docs tool's settings (Docusaurus, MkDocs, Sphinx, Mintlify, GitBook, mdBook, Antora) or a `docs` folder. You can set it by hand with **Content folder** (under **More options**).

## Create it

**Create a site** is three numbered steps on one page:

1. **Choose the repository.** Pick the **Repository**, then use **Check the repository** to see what will be published before you create anything: every page, and the parts SudoDocs cannot show.
2. **Choose a skin.** Pick one of the seven skins from the thumbnails. A skin is the look of the site, and the choice only sets the skin and colours: you can change both later in the [Studio](studio.md). **Preview skin** shows it on a sample site.
3. **Name and address.** Enter a **Name**; the **Address** follows it (lower-case letters, numbers and hyphens) and becomes `<address>.sudodocs.app`.

**More options** holds the **Branch** (any branch works, not only `main`: teams that keep a branch per release publish from it), the **Content folder**, the **Site title** and the crawler choices for AI tools.

Click **Create site**, then **Publish**.

## Builds

Every publish is a **build**. The site's **Overview** and the **History** drawer (**Builds**) list them with their result, the pages found and any warnings. A build that finds a problem that blocks publishing is held: you see why, and you can publish anyway when you decide it is fine.

**Auto-publish** (a site setting under **Settings**) publishes when the branch changes. Without it, a Writer presses **Publish**.

New settings that change what is built (the repository, branch, folders, the API reference) apply at the next publish. The site page says so with **Settings changed since the last publish** and a **Publish now** button. Studio drafts go live when you publish them, and the Readers settings change the live site when you press **Apply**.

### Go back

**History > Builds** lists your last builds. **Restore** makes an earlier build live again at once.

## Previews of pull requests

With previews on (Pro and Enterprise), every pull request gets a preview site at its own address, marked as not for search engines, and the pull request gets a status and a comment with the link. Pull requests from forks need an approval first (**Approve** in **History > Previews**). Closing the pull request removes the preview.

## Your own build

On Enterprise you can publish your docs tool's own build output as it is (**Build mode: your own build**), for sites that depend on custom plugins. Most sites should keep **SudoDocs renders it**, which gives you every feature on these pages. If your own build fails, SudoDocs publishes its own rendering of the site instead, so the site still goes live; open the latest build in **History** to see which one you got. Pages written as React code are covered in [Supported docs tools](supported-tools.md#pages-built-by-your-own-react-code).

## Things that are not published

Files named in `.sudoignore` (or `.mintignore`, or `exclude` in `sudodocs.json`), and pages marked as drafts, stay out of the site, the search, the sitemap and the AI files. See [Navigation and hidden files](navigation.md#keep-files-out-of-the-site).
