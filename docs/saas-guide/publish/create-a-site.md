---
title: Create a site
description: Connect a repository, create a docs site, publish it, preview pull requests, and go back to an earlier build.
---

# Create a site

Creating a site is an administrator task: **Admin Dashboard > Publish > + New site**.

## Before you start

- Connect the GitHub repository that holds your docs under **Admin Dashboard > Repositories** (see [Connect repositories](../admin/connect-repos.md)).
- Know where the docs live. SudoDocs finds the folder from your docs tool's settings (Docusaurus, MkDocs, Sphinx, Mintlify, GitBook, mdBook, Antora) or a `docs` folder. You can set it by hand with **Content folder**, and **Site folder** for a monorepo where the docs tool's settings are in a subfolder.

## Create it

1. Choose **+ New site**.
2. Enter a **Name** and an **Address**. The address becomes `<address>.sudodocs.app`. Use lower-case letters, numbers and hyphens.
3. Choose the **Repository** and, if you like, the **Branch**. Any branch works, not only `main`: teams that keep a branch per release publish from it.
4. Optional: **Start from** a [starter template](design.md#start-from-a-template). It only picks the skin and colours; you can change both later.
5. Use **Check the repository first** to see what will be published before you create anything: every page, and the parts SudoDocs cannot show.
6. Create the site, then press **Publish**.

## Builds

Every publish is a **build**. The **Overview** tab and **Activity > Builds** list them with their result, the pages found and any warnings. A build that finds a problem that blocks publishing is held: you see why, and you can publish anyway when you decide it is fine.

**Auto-publish** (a site setting) publishes when the branch changes. Without it, a Writer presses **Publish**.

New settings that change what is built (the repository, branch, folders, the API reference) apply at the next publish. The Publish page says so under **Settings changed since the last publish**. Look and feedback settings change the live site as soon as you save.

### Go back

**Activity > Builds** lists your last builds. **Restore** makes an earlier build live again at once.

## Previews of pull requests

With previews on (Pro and Enterprise), every pull request gets a preview site at its own address, marked as not for search engines, and the pull request gets a status and a comment with the link. Pull requests from forks need an approval first (**Approve** in **Activity > Previews**). Closing the pull request removes the preview.

## Your own build

On Enterprise you can publish your docs tool's own build output as it is (**Build mode: your own build**), for sites that depend on custom plugins. Most sites should keep **SudoDocs renders it**, which gives you every feature on these pages.

## Things that are not published

Files named in `.sudoignore` (or `.mintignore`, or `exclude` in `sudodocs.json`), and pages marked as drafts, stay out of the site, the search, the sitemap and the AI files. See [Navigation and hidden files](navigation.md#keep-files-out-of-the-site).
