---
title: Site health
description: Check any public docs site for how well it works for people and for AI agents, see two scores and what to fix, and monitor your own sites on a schedule.
---

# Site health

A health check reads a public docs site the way a reader and an AI agent would, and tells you what to fix. It works for any docs site, not only ones published with SudoDocs. When the docs source of a site is connected to SudoDocs, it can also [fix what it finds](site-health-healing.md) in a pull request.

## Run a check

Open the public [**Docs health check**](https://app.sudodocs.com/health) page, enter the address of the docs site and press **Check**. Up to about 40 pages are read, starting from the home page, its links and the sitemap. While it runs you see eight steps, and for each one what is checked for people and what is checked for AI agents. When it is done, the report stays available at its own unlisted link for 30 days, and you can download it as a CSV file.

SudoDocs only reads public pages, follows the site's `robots.txt` (a site that tells us not to scan it is not scanned), and never reads private network addresses.

## Two scores

The report gives two scores from 0 to 100, one for each kind of reader, because the same problem matters differently to each.

- **Human readers**: links, titles and headings, readability, accessibility, mobile, speed and delivery, and freshness.
- **AI agents**: AI files and access (`llms.txt`, Markdown copies), content an agent can read, retrieval, page structure, links, delivery and freshness.

A score is 100 minus what the findings cost. A serious finding costs a large share of its area, a minor one a small share, and an area can never cost more than its own weight. The report shows each area with what it lost, so every point can be explained. A score of 90 or more is excellent, 75 or more good, 60 or more fair, and below that needs work. Use the switch at the top of the report to read the findings and the advice for one audience at a time: the same finding has its own explanation and fix for each.

A site that could not be read has no score.

## What it checks

| Category | Examples |
|---|---|
| **Links** | Broken internal and external links, checked twice before they are reported. Links to sites that block automated checks are skipped. |
| **AI readiness** | `llms.txt` and `llms-full.txt` (very large files are measured, not reported as missing), Markdown copies, pages that are empty until JavaScript runs. |
| **Page structure** | Titles, descriptions, headings, one `h1` per page, images without alternative text. |
| **Readability** | Very long sentences, walls of text, long stretches without a heading, links that say "click here", code blocks without a language, no search. The report also shows the **reading level** of your text (English only). |
| **Retrieval** | Sections that are too large or empty to be found on their own, headings without an anchor, generic headings such as "Overview", phrases that only work in context such as "see above", dead links inside `llms.txt`. |
| **Freshness** | Pages that have not changed in a long time, sitemap dates. |
| **Mobile** | The viewport tag and layout. |
| **Speed and delivery** | Response time, compression, caching, render-blocking scripts, images without sizes, old image formats and large images, uncached files and, from a real browser, loading time, layout shift, page weight and request count. |

A few pages are also opened in a real browser, so pages that only appear with JavaScript are reported honestly: what a crawler sees without JavaScript and what a reader sees with it. Every finding is checked again before it is reported, says how serious it is, explains why it matters and shows how to fix it with up to five examples. Speed numbers are labelled as measured from our server.

A site that asks readers for a password or a sign-in cannot be read by a public check, and the report says that instead of an error.

## What SudoDocs can do about it

Each finding is marked with how it gets fixed: in a **pull request**, as a **suggestion** you apply yourself, by the **hosting** (for sites published with SudoDocs), or by a **person**. A line above the findings says how many SudoDocs can prepare fixes for. See [Fix what Site health finds](site-health-healing.md).

## Show your score

When both scores are 80 or more, the report offers the [docs health badge](health-badge.md) for your own site.

## Monitor your sites

Pro and Enterprise organizations can check their sites on a schedule: **Site health** in the left menu.

- **Add** a site (a duplicate site address is refused), and **Check now** whenever you like.
- Pro monitors up to **3** sites **weekly**; Enterprise up to **25** sites **daily**.
- Your own published sites are monitored by themselves once they are live, as long as your plan has room. If you remove one of these monitors, it is not started again, unless you turn **Watch this site by itself** back on in the site's healing settings.
- The page shows the average of both scores, how many sites need attention, and a chart of both scores over time for the selected site. Each site shows its two scores and whether they went up or down since the check before.
- **History** keeps every run (ten per page) with its scores and counts; open any run to see its report, or download the history as a CSV file.
- **Pause** and **Resume** a monitor, turn **Alerts** on or off, or **Remove** it (this deletes its history).
- An email goes to the monitor's owner (or, if there is none, to the organization's administrators) only when there is a **new** serious problem, or when a site that was fine can no longer be reached.

Publish's **Start here** list and the Admin **Overview** both have a step for checking your site's health.

## Via the CLI

```
sudodocs health add https://docs.example.com --daily
sudodocs health list
sudodocs health show ID
sudodocs health run ID
```

See [Site health commands](../../cli-guide/user/health.md).
