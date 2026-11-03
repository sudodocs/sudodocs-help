---
title: Search and sharing
description: What SudoDocs adds to every page so search engines and social networks present your docs well.
---

# Search and sharing

Publish adds what search engines and social networks look for, using only what is true about the page.

## On every page

- A **title** and **description** (from the page's front matter, or its opening text).
- A **canonical address**, and **language alternates** when you have translations.
- **Open Graph and Twitter tags**, including a **sharing image**: the page title on your site's colours (1200 by 630 pixels). Titles in Latin, Greek, Cyrillic and Vietnamese are drawn; text in scripts that need special rendering gets a plain link preview without an image. To use your own picture for a page, add `image: https://...` to its front matter. Turn sharing images off under **Design > Sharing and editing links**.
- **Structured data**: a breadcrumb trail and a *TechArticle* description with the page's last-modified day when your repository's history or front matter knows it.

## The sitemap

`/sitemap.xml` lists the pages you want found: every listed page and API reference page, with each page's **last-modified day** when it is known (a date is left out rather than guessed) and its language alternates. Excluded pages, pages marked `unlisted` and pages marked `noindex` are not in it. Older versions are not listed; they point their canonical address at the latest page.

## Keep one page out of search

In the page's front matter: `noindex: true` (or `robots: noindex`) adds a `noindex` tag and removes the page from the sitemap; `sitemap: false` only removes it from the sitemap.

## robots.txt

Choose who may crawl in **Settings**: search engines only, everyone including AI crawlers, or nobody. Protected sites tell crawlers to stay away.

## Redirects

Moved pages can redirect with `redirects` in `sudodocs.json`; Docusaurus client redirects, Mintlify redirects, MkDocs, GitBook and Antora page aliases are read as well. Redirects are served as permanent (301) redirects.

## A helpful 404 page

A page that does not exist shows a page-not-found message with the search box, so a reader can find what they were after.
