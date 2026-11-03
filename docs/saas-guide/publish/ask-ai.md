---
title: Ask AI
description: Let readers ask questions in your docs and get answers from your own pages, with links to the pages the answer came from.
---

# Ask AI

**Ask AI** adds an **Ask AI** button next to Search on your site. A reader types a question and gets a short answer written **only from your pages**, with links to the pages it used. If the pages do not contain the answer, the reader is told so and shown search results instead: it never guesses.

Ask AI is available on Pro and Enterprise and is **off by default** for each site.

## Turn it on

**Admin Dashboard > Publish > Design > Ask AI on the site**.

| Setting | What it does |
|---|---|
| **Let readers ask questions in the docs** | Turns the button on. The site is updated as soon as you save. |
| **Answers per month** | A cap for this site (default 300). When it is reached readers see search results instead. |
| **Instructions** | Enterprise only: tone and topics ("answer briefly; point to the pricing page for pricing"). They sit under SudoDocs's own rules and cannot relax them. |

## Credits

Each **answered** question uses **1 AI credit** from your organization. A question the docs cannot answer is free. If your organization is out of credits, or a cap is reached, readers get search results and no error. Administrators get an email when the site reaches 80% and 100% of its monthly cap. An Enterprise organization using its own AI provider is not charged credits.

## What readers see

- The answer appears word by word.
- Sources are links to your pages, chosen by SudoDocs from the pages it read, never typed by the AI.
- The box says answers can be wrong.

## How it finds the answer

SudoDocs searches your published pages by words and by meaning, reads the best few, and writes the answer from them only. The text of a reader's question is kept for your Analytics only when it does not look personal (no email address, long number or link), and is deleted with the rest of your analytics history.

## Protected sites

On a protected site, Ask AI works for signed-in readers and answers only from the pages they may read. Readers who are not signed in cannot ask. See [Protected docs](protected-docs.md#ask-ai-on-protected-sites).

## Via the CLI

```
sudodocs publish set SITE --ask-ai --ask-ai-cap 500
sudodocs publish set SITE --no-ask-ai
```
