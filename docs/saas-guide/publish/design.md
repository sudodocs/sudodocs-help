---
title: Design
description: Pick a skin and colours, start from a template, set the announcement bar, navbar button and footer, and control sharing images and the edit link.
---

# Design

**Admin Dashboard > Publish > Design** controls how the site looks and what readers can do on it. Beside the controls there is a live preview of a sample site or, once the site is published, of your own pages with the choices you have not saved yet.

## Skins

A skin is the layout and typography of the whole site. Pro and Enterprise can use all seven; Basic uses **Manual**.

| Skin | Feel |
|---|---|
| **Manual** | The all-round default: sidebar, tabs, search, light footer. |
| **Docs** | Clean three-column docs with a pinned site and version block and a slim top bar. |
| **Midnight** | A dark, floating-header look with a card sidebar, for platforms and APIs. |
| **Editorial** | A centred masthead and a single reading column in a serif face, for handbooks and long guides. |
| **Terminal** | Monospace and dark, like a command-line tool. |
| **Console** | Compact and dense, for internal runbooks and admin guides. |
| **Field Guide** | Warm paper tones, for knowledge bases and tutorials. |

Every skin works in light and dark mode (the reader's device decides). Docs, Midnight and Editorial also have print styles, support right-to-left languages, and bring their own fonts, so nothing is loaded from other servers.

## Colours, fonts and corners

Pick an **accent colour** and one for dark mode. On Pro and Enterprise you can also set the **corner radius** and name your own **body** and **heading fonts**. Fonts you name yourself must be installed on the reader's device (a system font); SudoDocs sites load no fonts from other servers.

## Start from a template

A **template** is a ready-made starting look: a skin and its colours. Choose one when you create the site (**Start from**), or at the top of **Design > Look**: click a card and the skin and colours fill in below, the preview updates, and nothing is saved until you press **Save settings**.

| Template | Skin | For |
|---|---|---|
| Developer docs | Docs | SDKs, guides and API references |
| API product | Midnight | An API or platform with a technical audience |
| Handbook | Editorial | Handbooks, policies, long guides |
| Product manual | Manual | The all-round default |
| Command-line tool | Terminal | A tool used in a terminal |
| Internal console | Console | Admin panels and runbooks |
| Field guide | Field Guide | Knowledge bases, tutorials, how-to collections |

On Basic only **Product manual** is available; the others are marked **Pro**.

### Add the template's starter content

After you choose a template on an existing, published site, **Also open a pull request with its starter content** adds, to your repository:

- an **announcement bar** that links to your first page,
- a **Get started** button in the navbar,
- a **footer** with links to your first pages,
- and, if the site has no home page, a **landing page** with a hero.

Only what your repository does not have yet is added; nothing you already wrote is replaced, and every link points at a page of your own site. Review and edit the wording before you merge: it is a starting point. Nothing changes on the site until the pull request is merged and published. (A landing page is not made for reStructuredText or AsciiDoc repositories.)

## Announcement bar, navbar button, footer, landing page

These live in your repository, in `sudodocs.json`, or are read from your docs tool's own settings (Mintlify, Docusaurus). A short example:

```json
{
  "announcement": { "text": "Version 2 is out.", "href": "/changelog/", "label": "See what's new" },
  "navbar": { "cta": { "label": "Get an API key", "href": "https://example.com/signup" } },
  "footer": { "text": "© Example", "columns": [{ "title": "Product", "links": [{ "label": "Pricing", "href": "https://example.com/pricing" }] }] }
}
```

A page becomes a landing page with `layout: landing` and a `hero:` block in its front matter (title, subtitle, buttons, optional image).

## Page feedback

**Show "Was this page helpful?" on every page** adds a short form hosted by SudoDocs. Answers appear under **Activity > Feedback**. Add a **feedback email** to add an "Email us" link. Your site itself stores nothing.

## Sharing images, structured data and the edit link

- **Sharing image.** Every page gets a picture for when it is shared in chat or on social media: the page title on your site's colours. Turn it off under **Sharing and editing links**, or choose one page's own picture with `image: https://...` in its front matter. See [Search and sharing](seo.md).
- **Edit in SudoDocs.** Next to **Edit this page**, readers who belong to your organization get **Edit in SudoDocs**, which opens the page in [Author mode](../user/author-mode.md). Everyone else is told to use **Edit this page**. Turn it off in the same section.

## The "Published with SudoDocs" badge

Hide it on Pro and Enterprise with **Hide "Published with SudoDocs" in the footer**.

## Your own visitor analytics

Pro and Enterprise sites can also load Plausible or Google Analytics 4. See [Analytics](analytics.md#your-own-analytics-tool).
