---
title: Analytics
description: See who reads your docs, what they search for and which pages fail them, without cookies, with AI agents and bots counted separately.
---

# Analytics

**Workspace > Publish > Analytics** shows how your site is used. SudoDocs counts every request at the edge of the network, so pages that were served from a cache are counted too. **No cookies are set, no IP addresses are stored, and readers are not tracked across visits.**

Analytics is part of every plan with a different history: Basic 7 days, Pro 90 days, Enterprise 395 days (and a CSV download).

## What you see

- **Readers** (people), **AI agents** (Claude, ChatGPT, Perplexity, Cursor and similar), **bots** (crawlers and scripts), and the share of readers who found a page **helpful**.
- A **daily chart** and the **most read pages**.
- **AI and bot traffic**, by name, so you can see which AI tools read your docs, and how.
- **Searches**, including the searches that found nothing: the questions your docs do not answer.
- **Not-found addresses**: pages readers asked for that do not exist.
- **Referrers** and **countries**.
- **Ask AI**: the questions asked, and the ones your docs could not answer. See [Ask AI](ask-ai.md).

Choose **All versions** or one version, and **All languages** or one language, to narrow every count except searches and feedback (which are site-wide, and the tab says so).

## How traffic is labelled

Requests are sorted by what they say about themselves and how they behave:

- **AI agent**: a known AI tool.
- **Bot**: a known crawler. A request that claims to be a browser but sends none of the signals a browser sends is counted as a bot and labelled **Unverified (no browser signals)**. One that comes from a hosting provider's network is labelled **Hosting-provider network**.
- **Reader**: everything else.

These are honest estimates, not certainties. A reader on a VPN or a company network can be labelled as a hosting network, and a bot that copies every browser header looks like a reader. Search reporting starts after the site is published again.

## Your own analytics tool

Pro and Enterprise sites can also load **Plausible** or **Google Analytics 4** on every page: **Admin Dashboard > Publish > Design > Your own visitor analytics**. Plausible sets no cookies (you can use your own server). Google Analytics sets cookies, so saving it asks you to confirm that you will ask readers for consent where the law requires it. The tool loads on sites that SudoDocs renders. If you already use one in your Mintlify settings, it is picked up when you move; a setting saved on the site wins.

## Via the CLI

```
sudodocs publish stats SITE --days 30
sudodocs publish stats SITE --csv > stats.csv
```
