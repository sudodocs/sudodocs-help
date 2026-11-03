---
title: Site health
description: Check any public docs site for broken links, AI readiness, structure, freshness, mobile and speed, and monitor your own sites on a schedule.
---

# Site health

A health check reads a public docs site the way a reader and a search engine would, and tells you what to fix. It works for any docs site, not only ones published with SudoDocs.

## Run a check

Open the public [**Docs health check**](https://app.sudodocs.com/health) page, enter the address of the docs site and press **Check**. A page of up to about 40 pages is read, starting from the home page, its links and the sitemap. When it is done you get a report that stays available at its own unlisted link for 30 days.

SudoDocs only reads public pages, follows the site's `robots.txt` (a site that tells us not to scan it is not scanned), and never reads private network addresses.

## What it checks

| Category | Examples |
|---|---|
| **Links** | Broken internal and external links, checked twice before they are reported. Links to sites that block automated checks are skipped. |
| **AI readiness** | `llms.txt`, Markdown copies, pages that are empty until JavaScript runs. |
| **Page structure** | Titles, descriptions, headings, one `h1` per page. |
| **Freshness** | Pages that have not changed in a long time, sitemap dates. |
| **Mobile** | The viewport tag and layout. |
| **Speed and delivery** | Response time, compression, caching, render-blocking scripts, images without sizes, old image formats and large images, uncached files and, from a real browser, loading time, layout shift, page weight and request count. |

A few pages are also opened in a real browser, so pages that only appear with JavaScript are reported honestly: what a crawler sees without JavaScript and what a reader sees with it. Every finding is checked again before it is reported, says how serious it is, explains why it matters and shows how to fix it with up to five examples. There is no overall score that shames a team: only what to fix. Speed numbers are labelled as measured from our server.

A site that asks readers for a password or a sign-in cannot be read by a public check, and the report says that instead of an error.

## Monitor your sites

Pro and Enterprise organizations can check their sites on a schedule: **Tools > Site health**.

- **Add** a site (a duplicate site address is refused), and **Check now** whenever you like.
- Pro monitors up to **3** sites **weekly**; Enterprise up to **25** sites **daily**.
- Each run is kept in a history (ten per page) with its counts; open any run to see its report.
- **Pause** and **Resume** a monitor, turn **Alerts** on or off, or **Remove** it (this deletes its history).
- An email goes to the monitor's owner (or, if there is none, to the organization's administrators) only when there is a **new** serious problem, or when a site that was fine can no longer be reached.

## Via the CLI

```
sudodocs health add https://docs.example.com --daily
sudodocs health list
sudodocs health show ID
sudodocs health run ID
```

See [Site health commands](../../cli-guide/user/health.md).
