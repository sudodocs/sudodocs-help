# Dashboards

Dashboards show all of your team's documentation work in one place: what's done, what's in progress, who's working on what, and what needs attention. They read from every tool - Author a Feature, Release Composer, Docflows, Capture, Diagram Generator, API Readiness and the Universal Converter. DocOps Assistant chats aren't included.

There are two kinds:

* **Overall dashboard**: everything, across all releases. Open it with **Dashboard** at the top of the Workspace.
* **Release dashboard**: one release. Open it from **Releases** on the Workspace, or from the list on the left of any dashboard.

## Filter What You See

Use the row above the dashboard to narrow everything on the page at once:

* **Release** (Overall dashboard only): one release, or **Not tagged to a release**.
* **Writer**: one person, or **No writer**.
* **Tool**: one tool.

Click **Clear filters** to see everything again.

## What's on a Dashboard

* **Summary**: how many items there are, how many are done, in review and blocked, how many pull requests have changes requested, and how many open items have no writer. Rejected items aren't counted.
* **Status**: how the work splits across To do, In progress, In review, Blocked, Done and Rejected.
* **Work by tool**: how many items each tool has.
* **Work by writer**: each writer's items by status, with their total. Items without a writer are grouped under **No writer**.
* **Burn-up** (release dashboard only): total work tagged to the release and work done, day by day. Vertical lines mark the target date and any earlier target dates, so you can see when the date moved.
* **Needs attention**: pull requests with changes requested (with a link to the pull request), blocked items and their reasons, items without a writer, and releases due within 7 days that still have unfinished work.
* **Recent activity**: status changes, retagging, pull request reviews and release date moves, newest first.
* **Board**: see [Use the Board](#use-the-board).

Hover over a chart to see exact numbers. Every chart also has **Show as table** for the same numbers as a table.

The Overall dashboard also lists every release with its progress, target date (and the date it moved from, if it moved), days left or the date it was released, and how many items are open or blocked.

## Use the Board

The board has a column for each status. Each card shows the tool, the title (click it to open the item in its tool), the writer, the release and, if a pull request is open, its review status.

To change an item's status, drag its card to another column, or pick a status in the card's list.

* You can move items you're the writer of. System Administrators can move any item.
* To work on someone else's item, or one with no writer, click **Claim (make me the writer)** on the card, then move it.
* Moving a card to **Blocked** asks what's blocking it.

Status changes made on the board are the same as changing the status in the tool itself - see [Track work and pull requests](releases.md#track-work-and-pull-requests). Pull requests still move their items automatically when they're merged or closed.

## The Release Dashboard Also Has

* The release's target date, build and release date, with **Edit release** and **Mark as released** - see [Manage Releases](releases.md#edit-a-release-move-its-date-or-mark-it-released).
* Shortcuts to Release Composer and Author a Feature for the release, and the release's [Assigned Docflows](assign-pr.md).
* **Release history**: every date move with its reason, renames, and when it was released.

To get the same numbers from a terminal, see [CLI Tasks → Dashboard](../../cli-guide/user/items.md#dashboard).
