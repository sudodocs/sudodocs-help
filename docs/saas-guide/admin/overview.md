# Admin Overview

The **Overview** tab is the first thing you see in the Admin Dashboard. It shows how much of SudoDocs your organization has set up, what to do next, and how much of your plan you're using.

## Setup Progress

The ring shows the share of setup steps that are done. Steps your plan doesn't include aren't counted. **Next step** names the most useful thing to set up next - the Essentials come first - with a button that opens the right tab.

## Setup Steps

Steps are grouped in three cards. Each shows whether it's done, with a button to set it up (or **Edit** once it's done).

| Group | Steps |
|---|---|
| **Essentials** | Connect your docs repository, connect a code repository, choose a style guide, invite your team. |
| **Recommended** | Your own AI provider and embeddings provider (Enterprise), Jira or Slack, API specs, screenshots for Docflows, an API key for the CLI (Enterprise). |
| **Security** | Two-factor for every admin who signs in with a password, two-factor for everyone, single sign-on (Enterprise). |

Some steps are marked:

* **Built-in**: SudoDocs already works without this - for example, it uses its own AI until you connect a provider. These count as done.
* A lock: your plan doesn't include it. Click **See plans** to compare plans.

## Usage and Repositories

* **Team seats**: members against your plan's seats, and how many are free.
* **AI credits**: credits used this period and when they reset. With your own AI key on Enterprise, credits are unlimited.
* **Repositories**: whether SudoDocs can still reach each connected repository. A repository with an invalid, expired or revoked token, or limited access, is listed with the reason. Repositories that need a sync (behind GitHub, or never synced) are listed too. Click **Manage repositories** to fix it - see [Keep in Sync](connect-repos.md#keep-in-sync).

To get the same overview from a terminal, see [CLI Admin Tasks → Admin Status](../../cli-guide/admin/index.md#admin-status).
