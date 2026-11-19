---
title: Design your site in the Studio
description: Work on the look, home page, navigation, header and footer of a site in one screen, with a live preview, undo, drafts and one publish. Includes the home page designer.
---

# Design your site in the Studio

The **Studio** is where you shape how a site looks. It has four modes in one screen, so you do not move between pages to change a skin, a home page, the navigation and the header and footer:

| Mode | What you do there |
|---|---|
| **Skin** | Pick one of the seven skins, set the colours, fonts and logo. See [Design](design.md). |
| **Home** | Design the home page from blocks. See [below](#the-home-page-designer). |
| **Navigation** | Reorder, rename, hide and add pages in the sidebar, with a preview that opens on the page you select. See [Navigation](navigation.md). |
| **Header & footer** | Edit the announcement bar, the header links and button, and the footer. |

Open it from the site's **Studio** tab (**Overview | Studio | Sources | Readers | Settings**). Admins can use it; Writers can too when the organization lets Writers manage site settings.

## How the Studio works

- **Drafts save themselves.** Everything you change is a draft that saves a moment later. Nothing reaches the live site until you publish.
- **Live preview.** The preview shows your own pages in the site's skin. Switch between **Desktop** and **Phone**, or open it in its own tab.
- **Undo and redo.** Use the buttons or **Ctrl/Cmd+Z**.
- **Publish.** Each mode has a **Publish** button. Its dialog lists the other modes that also have a draft waiting, so you can publish them together in one build.
- **Waiting to publish.** The site's **Overview** lists every draft that is waiting. **Publish all** publishes them in one build.
- **Discard.** Throws a draft away. The live site stays as it is.

The site must have been published once, because the Studio works from your live pages.

## The home page designer

A site's home page is the first thing a reader sees. In **Home** mode you build it from blocks and see the result in your skin as you go. The page you publish replaces the page at the home address, whatever your docs tool or format is (Markdown, MDX, reStructuredText, AsciiDoc, or a home page written as React code). **Your repository is not changed.** If you turn the designed page off, the repository's own home page shows again.

If your home page is React code that SudoDocs cannot run, the site's Overview shows a notice and offers **Open designer**.

### Sections, columns and blocks

A page is a list of **sections**. A section has one to four **columns** that share the width, and each column holds **blocks**.

- Select a section or block in the **Page** list on the left, or click it in the preview. Its settings appear on the right.
- **Move** things by dragging a row in the list, or a block in the preview. Drop it before or after another block, into an empty column, or near the top or bottom edge of a section to make a new section. Without a mouse, use **Alt+Up/Down** on a row, or the arrow buttons.
- **Column layouts** are chosen in a section's settings (one column, two equal, one third and two thirds, three, four). **Column widths** moves each divider one step at a time. You can also drag the divider in the preview.
- **Duplicate** and **Delete** are in the settings of the selection.

| Block | Use it for |
|---|---|
| **Hero** | The main title, a short text, up to three buttons and an optional search box. |
| **Announcement** | A one-line notice. It can follow the newest entry of your Changelog page, so there is nothing to update by hand. |
| **Cards** | Pages or topics as cards with an icon, title and short text. |
| **Link tiles** | Quick links, such as popular tasks. |
| **Steps** | A numbered way to get started. |
| **Command** | A snippet to copy, with a caption. |
| **Text** | A heading and a paragraph. |
| **Image** | A picture, uploaded or taken from your [Capture](../user/capture.md) library, with optional text beside it. |
| **Call to action** | A closing prompt with one button. |
| **Latest updates** | The newest Changelog entries, or the most recently changed pages. |
| **Space** | Room between sections. |

Links can be chosen from your site's pages, and a card or tile can take its title and description from the page it links to, so they stay right when the page changes. Pictures need alt text before you can publish. Crop a picture to a 16:9, 4:3, 3:2 or square shape in its settings.

### Start from a layout, or draft with AI

**Choose layout** offers four starting points built from your own pages: **Docs hub**, **Product docs**, **API first** and **Handbook**. Choosing one replaces what is on the page, and you can undo it.

**Draft with AI** writes the headings and intro text for a layout from your pages. It uses AI credits, and the dialog shows the cost before you start. It writes words only: links, pages and pictures stay as they are, and every text is checked before it is shown. Nothing is charged when nothing passes the checks.

### Languages

If the site has more than one language, a **Language** menu appears above the page. The structure, links and pictures are shared by every language. For each language you write the words of each block, and the default language's text shows as a hint in every empty box. A box left empty uses the default text. Cards and tiles that take their title from a linked page follow that page's title in each language. The preview shows the words of the language you picked.

### Checks, drafts, history and publishing

- **Checks** (under the preview) list what would be wrong on the live page, such as a link to a page that does not exist or a picture without alt text. Problems that would break the page stop the publish.
- **History** keeps every version you published. **Restore as draft** brings an older version back into the designer; publish it again to make it live.
- **Use repository page** turns the designed page off.

## From the command line

```bash
sudodocs publish home acme-docs                  # what the site uses
sudodocs publish home acme-docs --export home.json
sudodocs publish home acme-docs --file home.json  # publish a changed page
sudodocs publish home acme-docs --off
```

See [Publish commands](../../cli-guide/user/publish.md).
