---
title: Mermaid diagrams
description: Create, edit and keep Mermaid diagrams in a library, draw them with a visual builder or from a description, and insert them into your pages.
---

# Mermaid diagrams

**Tools > Mermaid diagrams** is a library of the diagrams your team uses in its docs. A diagram is Mermaid text: it lives in your pages and draws on your published site. The library keeps each diagram's versions, lets you edit it visually, and lets you insert it into any page from [Author mode](author-mode.md).

## The library

Diagrams are shown as cards with a picture, in three columns, twelve to a page. Filter by **type**, **release**, **needs attention** (diagrams that do not draw) and search by title. Hover a card for **Copy link**, **Rename**, **Tag** and **Delete**. Tag a diagram with a release and a writer like other work: see [Manage releases](releases.md#tag-work-with-a-release-and-a-writer).

A deleted diagram stays in **Deleted** for 7 days and can be restored. Older diagrams from the previous Diagram Generator are in the library with their pictures.

## Types

Flowchart, sequence, state, class, entity-relationship, Gantt, mind map, timeline, pie chart, user journey and Git graph.

## Create a diagram

Choose **New diagram**, then either:

- **Describe it** in words, optionally with a reference image, and press **Generate**. The AI writes the Mermaid text, checks that it draws with the same Mermaid your site uses, and repairs it when it does not. Your **Neural Style Overrides** (company terms) apply.
- **Write the text** yourself.

Pick one of the types or **Auto**. Generating uses AI credits at the usual rate.

## The editor

Code on one side, a live drawing on the other. Autosave keeps your work and warns you if someone else saved a newer version. Every save is a **version**; open the list and **Restore** an older one (your current text stays as a version). **Undo** and **Redo** are available, and you can download **SVG** or the `.mmd` text. The **AI assistant** changes a diagram from a sentence ("add a retry step") and shows the result before you keep it.

### The visual builder

Flowcharts, sequence, state, class and entity-relationship diagrams can also be edited with **Code | Visual | Split**: a tool rail, clicking steps and links on the drawing, a properties panel and an outline you can use with the keyboard. Gantt charts, mind maps, pie charts, timelines and user journeys have forms. The Mermaid text stays the only source of truth: lines the builder does not understand are kept exactly as you wrote them, every change must still draw or it is refused with the reason, and a diagram the builder cannot model opens in code with a plain message. Git graphs are code only.

## Use a diagram in a page

In Author mode, open **Tools > Mermaid diagram** (or **Insert > Diagrams**), **Choose** one from the library and **Insert**. The page gets the Mermaid text plus a comment that remembers which library diagram it came from. When you change the diagram later, **Insert > Diagrams** offers **Update** on the pages that use it. You can also create a diagram in the pop-up and save it to the library in one step.

Diagrams that live only in a page are listed under **Insert > Diagrams** too: rename, tag, preview, copy, download or remove them.

## Reviews

A diagram can be [reviewed](reviews.md) like any item: pick a part of the drawing, comment, @mention, approve.

## From the command line

`sudodocs diagram ...`: see [Capture and diagram commands](../../cli-guide/user/capture-diagrams.md).
