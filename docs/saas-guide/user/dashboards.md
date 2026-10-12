# Dashboards

Dashboards show all of your team's documentation work in one place: what's done, what's in progress, who's working on what, and what needs attention. They read from every tool - Author a Feature, Release Composer, Docflows, Capture, Diagram Generator, API Readiness and the Universal Converter. DocOps Assistant chats aren't included.

There are two kinds:

* **Overall dashboard**: everything, across all releases. Open it with **Release Dashboard** at the top of the Workspace.
* **Release dashboard**: one release. Open it from the list on the left of any dashboard; **All releases** at its top takes you back. Hover over a release in that list to edit or delete it.

## Your Work or Everyone's

The **Mine | Everyone** switch at the start of **Filter the work below** chooses whose work the dashboard shows:

* **Mine**: only items where you're the writer, including Docflows suggestions assigned to you. Writers and Walkthrough Auditors start here.
* **Everyone**: the whole team's work. System Administrators start here.

SudoDocs remembers your choice, on every dashboard and release, until you switch again. A release's timeline and progress, and the Overall dashboard's list of releases, always count the whole release, whichever you pick.

If nothing is assigned to you, the dashboard says so and offers **See everyone's work**, and **Claim unassigned work** when there's work without a writer.

## Filter What You See

Use **Filter the work below** to narrow the summary, charts, lists and board at once:

* **Release** (Overall dashboard only): one release, or **Not tagged to a release**.
* **Writer**: one person (**All writers** is the same as **Everyone**). To find work nobody has taken yet, look at **Needs attention** (or the **No writer** count).
* **Tool**: one tool.

Each filter you set shows as a chip under the row. Click the chip's **×** to remove that filter, or **Clear all** to see everyone's work with no filters.

## What's on a Dashboard

* **Summary**: four tiles - **Open** (to do, in progress, in review or blocked), **In review**, **Blocked** and **Done**. Click a tile to highlight those items on the board; click it again to clear. Rejected items aren't counted here or in Work by tool and Work by writer.
* **Status** (Overall dashboard only): how the work splits across To do, In progress, In review, Blocked, Done and Rejected. On a release dashboard, the Release timeline's progress bar shows this instead.
* **Work by tool**: how many items each tool has.
* **Work by writer**: each writer's items by status, with their total. Items without a writer are grouped under **No writer**. When you filter to one writer, this chart is hidden and **Status** shows that writer's work instead.
* **Release timeline** (release dashboard only, at the top - it always covers the whole release, whatever the filters): its target date and the date it was first planned for; a timeline marking when it was created, every earlier target date, today, the target and the release date; a progress bar split by status, with the count for each; and every date change with who made it and why. A release without a target date shows only its progress and a **Set a target date** link.
* **Needs attention**, grouped with a count for each: pull requests with changes requested (with a link to the pull request), Docflows suggestions SudoDocs' Editor flagged, suggestions your docs already have (dismiss them as done), suggestions whose engineering pull request was closed without merging, blocked items and their reasons, releases due within 7 days that still have unfinished work, and items without a writer.
* **Recent activity**: status changes, retagging, pull request reviews and release date moves, newest first. The five latest show; click **Show more** for the rest.
* **Board**: see [Use the Board](#use-the-board).

If nothing matches yet, the dashboard shows what to do next instead of empty charts - for example, links to Author a Feature, Release Composer and Docflows.

Hover over a chart to see exact numbers. Every chart also has **Show as table** for the same numbers as a table.

The Overall dashboard also lists every release with its progress, target date (and the date it moved from, if it moved), days left or the date it was released, and how many items are open or blocked.

## Use the Board

The board has a column for each status; empty columns show **Drop here**. Click **Group by writer** to give each writer their own row, or **All work** to go back. On a narrow screen, scroll the board sideways. Each card shows the tool, the title (click it to open the item in its tool), the writer, the release and, if a pull request is open, its review status.

To change an item's status, drag its card to another column, or pick a status in the card's list.

* You can move items you're the writer of. System Administrators can move any item.
* To work on someone else's item, or one with no writer, click **Claim (make me the writer)** on the card, then move it.
* Moving a card to **Blocked** asks what's blocking it.

Status changes made on the board are the same as changing the status in the tool itself - see [Track work and pull requests](releases.md#track-work-and-pull-requests). Pull requests still move their items automatically when they're merged or closed.

## The Release Dashboard Also Has

* A header with the release's status (on track, due soon with work still open, overdue, or released) and **Edit release** and **Mark as released** (or **Reopen**) - see [Manage Releases](releases.md#edit-a-release-move-its-date-or-mark-it-released).
* A **Release notes** card: how many items are queued for the release notes and where from, the latest draft (and how many items arrived since), its pull request once pushed, when SudoDocs drafts automatically, and **Automatic drafting settings** - see [Compose Release Notes](release-composer.md#automatic-drafting). Its button opens Release Composer for the release.
* Shortcuts under the header: **Compose release notes** and **Author a feature** for the release, and the release's Docflows - the button shows how many are assigned to you (for example **Docflows: 2 for you**). See [Review and Push Docflows](assign-pr.md).

To get the same numbers from a terminal, see [CLI Tasks → Dashboard](../../cli-guide/user/items.md#dashboard). Your own summary is also at the top of the Workspace - see [Your Work](index.md#your-work).
