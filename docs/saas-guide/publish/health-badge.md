---
title: Docs health badge
description: Show the SudoDocs docs health badge on your site when both health scores are 80 or more. It is checked live, so it always matches the latest check.
---

# Docs health badge

A site that scores **80 or more on both** [Site health](site-health.md) scores can show the SudoDocs docs health badge. The badge shows the two scores, **Human** and **AI**, and links to a page that says whose badge it is and when it was checked.

## Earn it

1. Check your docs site at [**Docs health check**](https://app.sudodocs.com/health).
2. If both the **Human readers** and the **AI agents** score are 80 or more, the report has a **Show your score** card.
3. Copy the HTML, the Markdown or the image address from the card. Choose the size (normal or compact) and whether your page background is light or dark first, and the snippets change with your choice.

If a score is below 80, the card says how many points are missing and which findings cost the most. If SudoDocs can read your docs source, [**Fix these now**](site-health-healing.md) prepares many of the fixes for you.

The badge is free for everyone.

## It stays honest

The badge is not a fixed picture. It is drawn each time from the latest finished check of your address, so:

- It needs **both scores at 80 or more** in a check from the **last 30 days**. Sites you monitor in Site health are checked again by themselves, weekly or daily depending on your plan. For any other site, check again from the badge page.
- If a later check scores under 80, or the site can no longer be read (it is down, or it asks our checker not to scan it), the badge turns into a grey **not verified** badge.
- The badge names your address, and the page it links to shows both scores and the date of the check, so anyone can see what it is based on.

The badge sets no cookies and tracks nobody who sees it.

## Prove you own your address

Anyone can show a badge for any address, and it always names the address it belongs to. To show that **you** control an address, and to limit where the full badge is drawn, verify ownership. Open the **Ownership** card under **Show your score** (on the report or in **Site health**), choose **Verify ownership**, and add one of these to your site:

- a meta tag `<meta name="sudodocs-health-verification" content="YOUR-CODE">` in the head of your home page, or
- a text file at `/.well-known/sudodocs-health-verification.txt` that contains your code.

Press **Verify**. A site you publish with SudoDocs is verified without either step. The badge page then shows **Owner verified**. Only one organization can own an address, and the proof is checked again after 180 days.

Once verified, turn on **Show it only on my pages** to give any other site that shows your badge the grey **not verified** one. Add partner sites under **Also allowed on**. A badge requested without any referring page is always shown, because many browsers send none. This only changes where the badge is drawn: the page it links to always shows your real scores.

## Sites published with SudoDocs

A site published with SudoDocs shows its own badge in the footer by itself while it has earned it. Turn it off with **Show the docs health badge in the footer** in the site's **Readers** settings, or with `sudodocs publish set SITE --no-health-badge`. When the badge is earned or lost, the site is updated without a new build.

## Use it on any page

HTML:

```html
<a href="https://app.sudodocs.com/health/badge/docs.example.com"><img src="https://app.sudodocs.com/badge/docs.example.com.svg" alt="SudoDocs docs health" height="32"></a>
```

Markdown:

```markdown
[![SudoDocs docs health](https://app.sudodocs.com/badge/docs.example.com.svg)](https://app.sudodocs.com/health/badge/docs.example.com)
```

Replace `docs.example.com` with your own address. Add `?size=sm` for the compact badge and `?theme=dark` for dark pages (`?size=sm&theme=dark` for both).
