---
title: Reviews
description: Ask colleagues and outside reviewers to review diagrams, captures, release notes, Docflows suggestions and API scans, with comments, @mentions, verdicts and AI helpers.
---

# Reviews

Five tools share the same review experience, so what you learn once works everywhere:

| Item | Where you comment |
|---|---|
| **Mermaid diagram** | On a part of the drawing. |
| **Capture** | On a step or a place on it (Interactive), a place or box (Screenshot), a time (Video and Audio). |
| **Release notes draft** | On the words you select in the rendered draft. |
| **Docflows suggestion** | On a changed line, a whole file, or the whole suggestion. |
| **API Readiness scan** | On a finding, a line of the spec, a file, or the whole scan. |

Pages in [Author mode](author-mode.md) are reviewed on their pull request, with the same comment threads, @mentions and invitations.

## Ask for a review

Open the item and choose **Review** (diagrams show a **Review** section; captures, release notes, Docflows and API scans have a **Review** button with a drawer). Choose the colleagues to ask, or **Invite** someone outside SudoDocs by email. Each request starts a new **round**; the status shows **In review**, **Approved** or **Changes requested**, and an **(changed)** note appears when the item changed after an approval.

You see everything on the item's page and in **Reviews** on the left menu, which lists what people asked you to look at, across tools.

## Comment

Pick a place (the tool says how), write your comment and post. Numbered pins mark the places; click a pin or a comment to jump to the other. Comments are **threads**: reply, then **Resolve** or reopen. A comment whose place no longer exists (a deleted step, rewritten words, a fixed finding) is marked **outdated** and is kept.

### @mentions

Type **@** in a comment to tag a colleague. People you can tag are the members of your organization who can open the item, and outside reviewers invited to it. Each tagged person gets one email linking to the comment. Typing a full email address offers an invitation instead.

## Verdicts

A reviewer can **Approve** or **Request changes**. A verdict belongs to the version the reviewer saw; when the item changes, the status shows the verdict is for an earlier version. **A verdict is an opinion: it never blocks, publishes or changes anything.**

## Outside reviewers

Writers can invite people outside SudoDocs to review a single item. They get an emailed link (valid for 14 days) that opens a read-only page with the item and the comments. They get no account and no seat; a Reviewer allowance in your plan counts them. An administrator decides which email domains can be invited (**Admin Dashboard > Organization > Publishing policy**): by default only your members' company domains, plus single addresses the administrator adds. Invitations can be withdrawn. The same invitation works with Google sign-in for the invited address.

## The AI helpers: @Editor, @Writer, @IA

Writers and administrators can call the three [Doc Team Roles](../admin/doc-team-roles.md) inside a comment by typing **@Editor**, **@Writer** or **@IA** (the Information Architect, offered on Docflows). The answer is posted as a reply in the same thread, labelled **SudoDocs Editor (AI)** and so on.

- Credits are shown **before you post**: "@Writer will answer in this thread and use 2 AI credits when you post". The cost is 2 credits per started 5,000 characters of the text the role reads plus your comment.
- The Writer may propose replacement text, shown as copyable text; **nothing is ever applied for you**, and a role never approves, resolves or changes anything.
- A role's reply never calls another role.
- Reviewers and outside invitees cannot call roles; their @Editor is plain text. If your organization is out of credits, the comment is still posted.
- An administrator can switch the helpers off for the organization.

## Notices in Slack and Jira

Administrators can send review events to a Slack channel or as a comment on the Jira issue a Docflow came from. See [Publishing policy](../admin/publish-admin.md#review-notices-in-slack-and-jira).

## From the command line

`sudodocs review ...` does all of the above for any item: see [Review commands](../../cli-guide/user/reviews.md).
