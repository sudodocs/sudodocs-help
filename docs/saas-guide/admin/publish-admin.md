---
title: Publishing policy
description: Who may change site settings, which repositories Writers may edit, who can be invited to review, which embeds are allowed, and where review notices go.
---

# Publishing policy

Administrators decide what Writers may do with sites and pages. These controls are in **Admin Dashboard > Organization > Publishing policy**, and in **Admin Dashboard > Publish** for a single site.

## Who can change site settings

By default only administrators change a site's navigation, design, versions, source, domains, address, protection and crawler settings (**Admin Dashboard > Publish**). Writers check and publish sites, see Analytics, Validate and Activity, and write pages.

Turn on **Writers may manage site settings** to give Writers the same controls. Creating a site, restoring an old build as live and deleting a site are always administrator-only.

## What Writers may edit

- **Per repository.** In **Admin Dashboard > Repositories**, **Writers may edit this repository** is on by default. Turn it off for any repository (including code repositories) to block writes and starting changes there; reading, building and publishing still work.
- **CSS, scripts and configuration.** Writers edit pages, images, snippets and the files that give the docs their structure. **Writers may edit site CSS/JS and docs-tool config** (off by default) lets them edit stylesheets, scripts and build settings too. Package and CI files stay locked either way.
- A Writer who hits a lock can **Request access**: every administrator gets an email (at most once an hour per item).

## Embeds: allowed hosts

Writers can embed videos, designs and live code from allowed hosts: YouTube, Vimeo, Loom, Figma, CodePen and Replit by default. Edit the list under **Embeds: allowed hosts** (one host per line, subdomains included), or add hosts for one site under its **Settings**. An embed from another host is refused in the editor and flagged by **Check this page**; pages are not changed.

## Reviewer invitations

Writers can invite people outside SudoDocs to review a change or an item by email. **Only invite reviewers from approved email domains** is **on by default**: the approved domains start as your members' company domains (public mail providers are never added automatically), and you edit them and add single addresses as exceptions. A Writer who tries another address is offered **Ask an admin**, which emails the administrators.

Invited reviewers are not seats: they count against your plan's reviewer allowance, can only see what they are invited to, and can sign in again through their emailed link for 14 days (or with Google for the same address). If your organization signs in with single sign-on or requires two-factor authentication, the same rules apply at the link. An invitation can be withdrawn at any time.

## AI roles in reviews

**AI roles in reviews** lets Writers call @Editor, @Writer and @IA inside review comments. Each call uses credits (shown before posting). Turn it off to stop all of them.

## Review notices in Slack and Jira

Email is the default notice. You can also send review events to **Slack** and **Jira**. Both are **off by default**, per organization, per tool and per event.

- **Events:** a review is asked for, a new comment, an @mention, a verdict. A comment that tags people is sent once, as a mention. New-comment messages are limited to one per review every ten minutes.
- **What a message says:** who did what, the kind of item, its **title** and a link. It never carries comment text. Anyone in the Slack channel, or watching the Jira issue, sees the title.
- **Slack:** one message to the channel you choose; you can choose a different channel for individual tools. The SudoDocs Slack app must be in the channel and have the **chat:write** permission (you may need to re-authorize the app once and save the new token under Integrations). The card shows the exact fix when Slack refuses. **Send a test message** tries every channel.
- **Jira:** one comment on the issue a Docflow was created from. Only Docflows that started from a Jira issue have one; other items send nothing to Jira. The Jira account needs permission to comment.
- Each channel shows the result of its **last attempt**.

Connect Slack and Jira first under [Integrations](integrations.md).

## Change log

**Change log** lists who changed these settings and when, without the wording of any comments.

## From the command line

```
sudodocs admin site-policy ...
sudodocs admin repos editing ID on|off
sudodocs admin embeds show|add|remove|reset
sudodocs admin reviewers ...
sudodocs admin review-ai on|off
sudodocs admin review-notices show|set
```

See [Publishing policy commands](../../cli-guide/admin/publish-admin.md).
