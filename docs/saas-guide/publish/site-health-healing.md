---
title: Fix what Site health finds
description: Let SudoDocs prepare fixes for the problems a health check finds in your docs source, as one pull request you review. It never merges for you.
---

# Fix what Site health finds

A health check tells you what is wrong. When SudoDocs can read the docs source of the site, it can also prepare the fixes in a **pull request**. You review the changes and merge them yourself: SudoDocs never merges anything.

## What it can fix

| Kind of fix | What changes | AI |
|---|---|---|
| **Titles, headings and descriptions** | A missing title is added to the page. A second first-level heading becomes second level, and a heading that skips a level is moved up to the next one. A missing description is written. | Only for descriptions |
| **Links** | A link that says "here" or "read more" gets the title of the page it points to. A broken link with one clear match is pointed at that page. | No |
| **Code blocks and images** | A code block without a language gets one when it is clearly JSON, shell, Python, JavaScript, SQL, YAML, XML or HTML. An image without alternative text gets a short description. | Only for alt text |

Fixes that need no AI are free. AI fixes cost **1 credit each**, only for the ones that are kept, and each site can use **25 AI fixes a month**. A description or alt text is written only from the words already on the page: if the text does not say what an image shows, SudoDocs leaves the image alone and charges nothing. A fix that adds a name or a number that is not on the page is dropped.

Some findings are not fixed automatically: long sentences, walls of text, and anything that needs a decision. They stay in the report as suggestions.

## Fix these now

Open the report of a site you can fix and press **Fix these now**. The button appears when you are signed in, the address of the report belongs to one of your Publish sites (or to a site you linked, see below), and the report has something SudoDocs can fix.

SudoDocs reads the source files of the site, prepares the fixes that need no AI and takes you to **Validate**, in the site's **Fixes** view. There you see every change as a diff, choose what to send, add the AI fixes if you want them (the credits are shown before you confirm), and open **one** pull request. The button can be used a few times an hour.

## Fix on a schedule

For sites that are monitored, SudoDocs can prepare the fixes after every scheduled check. Open **Site health**, select the site, and use its **Healing** card:

- **Fix after each check** turns it on or off. It is on by default for monitored sites.
- **Include AI fixes** is off by default. When it is on, AI fixes use credits and the monthly limit, and if your credits run out, the free fixes still go ahead.
- **Kinds of fixes** chooses between titles, headings and descriptions, links, and code blocks and images.
- **Watch this site by itself** starts monitoring the site once it is live.
- **Files per pull request** limits how much one pull request changes.

Each time, SudoDocs opens **one** pull request. While it is still open, later fixes are **added to it** instead of opening another one. A file that someone edited in the pull request is never touched, and a note says which files were left alone. After you merge or close it, the next check can open a new one. The person who set up the monitor, or the administrators, get an email when a pull request is opened.

Administrators decide whether people can change these settings; for everyone else the card is read-only. See [Plans and limits](../admin/plans.md) for what your plan includes.

**Healing history** on the same page lists every run: its status, the pull request and whether it was merged, how many files and fixes it had, and the two scores at the check that caused it and at the next check after it.

## A site hosted somewhere else

Fixing works for a site that is not published with SudoDocs too, as long as its docs live in a repository you connected. In **Site health**, select the monitor of that address and use **Link repository**: choose the repository, the branch and the folder with the docs. Nothing is published, and the link does not count as a site. **Unlink repository** removes it. Everything else works as described above.

## Via the CLI

```
sudodocs publish healing SITE
sudodocs publish healing SITE --no-auto
sudodocs publish healing SITE --ai --kinds structure,links
```

See [Site health commands](../../cli-guide/user/health.md#healing).
