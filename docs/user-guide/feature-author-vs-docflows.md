# Author a Feature vs. Docflows

SudoDocs has two ways to generate documentation with the same underlying AI review pipeline. This page explains what each one is, where they genuinely differ, and which one to reach for.

## What They Are

**[Author a Feature](feature-author.md)** is something you start yourself - from a Jira ticket, a linked Pull Request, or both - when you want to write (or have SudoDocs draft) a specific piece of documentation and stay closely involved while it comes together.

**[Docflows](doc-drift.md)** runs on its own. Once a repository or Jira instance is connected with a webhook (see the [admin guide](../admin-guide/doc-drift.md)), every merged Pull Request and every Jira ticket moved to Done triggers a suggestion automatically, with no one having to remember to start it.

## What's the Same

Both surfaces share the same core: an Information Architect decides what needs to change (and grounds that decision against your real, synced documentation - never a guess about whether a file already exists), a Technical Writer drafts it, and an Editor reviews it with fresh eyes before a human sees it. Both:

* Follow the same [Doc Team Roles](../admin-guide/doc-team-roles.md) instructions - customize a role once, and both surfaces use it.
* Support the same output formats: Markdown, reStructuredText, AsciiDoc, HTML, MDX, and DITA XML.
* Generate or update a Mermaid architecture diagram automatically when the Information Architect judges the change significant enough.
* Use AI credits for generation.

## Where They Differ

| | Author a Feature | Docflows |
|---|---|---|
| **Starts** | You, manually - a Jira ticket, a linked PR, or both | Automatically - a GitHub PR event or a Jira ticket reaching Done/Resolved/Closed |
| **Scope per run** | One document at a time (plus its placement proposal, audit notes, and diagram as supporting sections) | Can propose changes to several files at once in a single suggestion (e.g. a new page *and* the navigation file that links to it), shown as one **📦 BATCH UPDATE** card |
| **Review history** | Every round is kept - the Information Architect's outline, every Writer draft, every Editor comment with its severity, all visible on the [Pipeline Review](feature-author.md#how-your-draft-gets-reviewed) page | Not kept round-by-round - only the final outcome, shown as a **✓ Reviewed** / **⚠ Flagged** badge with a one-line summary on hover |
| **If the Editor can't get it right automatically** | Escalates to **Needs Human**: send it back to the Writer with your own feedback, approve anyway, or reject | No escalation - Docflows always finishes automatically and hands you whatever it has, flagged if it's not fully resolved. Triage and push it with your own judgment |
| **Diagram control** | The Information Architect decides on its own, or you can force one with the **Generate Architecture Diagram** checkbox | The Information Architect's decision only - no manual override, since there's no creation step to check a box on |
| **Moving it to a different release** | **Reassign** - move a draft to a different Release Dashboard, or create a new one, at any point | Assigned to a release at triage time (**Target Release**, **Assignee**, **Product Tag**) - this already happens once, before it's a good fit to change |
| **Visual context** | Attach a reference image yourself (e.g. an existing diagram) when creating the draft | Can capture live preview-environment screenshots automatically, if [configured](../admin-guide/doc-drift.md#configure-screenshot-settings-for-docflows), so the Writer can reference what the feature actually looks like |
| **Where it publishes** | **Open Pull Request** from the Pipeline Review page, after your **Approve** | **Push PR** from the Review & Push modal, after triage |

In both cases, the real technical review happens on the Pull Request itself, on GitHub - not inside SudoDocs.

## When to Use Which

**Reach for Author a Feature** when you want to write toward a specific piece of documentation deliberately - starting from a ticket before the code even exists, iterating closely with the pipeline, and having a full audit trail and a human-escalation path if the AI can't resolve something on its own. It's the right tool when the documentation itself is the task.

**Let Docflows do its job** as the safety net that catches everything else - every PR that ships, every ticket that closes - so documentation impact is never missed just because no one thought to start a draft. Its lighter review (a badge, not a full history) and batch-file handling match its purpose: high volume, low friction, automated end to end.

Most teams end up using both together: Docflows running continuously in the background against every connected repository and Jira project, and Author a Feature reserved for the documentation a writer wants to shape directly - a major feature launch, a new concept that needs careful placement, or anything worth the closer review loop.
