---
title: Changelog
description: Product updates to SudoDocs, newest first.
---

# Changelog

Product updates to SudoDocs, newest first.

## October 2026

### Releases and your work

- **Releases on the Release Dashboard.** Each release has its own dashboard: a timeline with its target date and every date change, progress by status, a board to move work along, and **Mark as released**. Open it with **Release Dashboard** at the top of the Workspace, which is now where your releases live. See [Dashboards](saas-guide/user/dashboards.md).
- **Tag work with a release and a writer.** Feature drafts, release notes, captures, diagrams, API scans, conversions and Docflows suggestions can each be tagged, so a release shows everything going into it. See [Tag Work with a Release and a Writer](saas-guide/user/releases.md#tag-work-with-a-release-and-a-writer).
- **Status that follows your pull requests.** Work moves through To do, In progress, In review and Done; when SudoDocs opens a pull request in your docs, the item follows it until it's merged. See [Track Work and Pull Requests](saas-guide/user/releases.md#track-work-and-pull-requests).
- **Your work first.** Writers see their own work by default - switch between **Mine** and **Everyone** - and the Workspace sums up what's assigned to you under **Your work**. See [Your Work or Everyone's](saas-guide/user/dashboards.md#your-work-or-everyones).

### Release notes

- **A release notes queue for every release.** Everything going into a release's notes collects in one place - from Docflows, Slack, Jira, CSV files or added by hand - grouped under **New Features**, **Enhancements**, **Bug Fixes** and **Known Issues**, with where each item came from. See [The Release Notes Queue](saas-guide/user/release-composer.md#the-release-notes-queue).
- **Drafted for you.** Draft the notes from the queue in one click, then add newly queued items to that draft without losing your edits. If no one has drafted them, SudoDocs does it automatically in the days before the release. See [Automatic Drafting](saas-guide/user/release-composer.md#automatic-drafting).
- **Push to your docs.** **Push to docs** opens a pull request that puts the notes where your docs repository keeps release notes - a new file in its release-notes folder, or this release's section at the top of your changelog file. See [Push to Your Docs](saas-guide/user/release-composer.md#push-to-your-docs).

### Docflows

- **Review changes like a pull request.** See each file's changes side by side or in one column, edit in place, and tick files as reviewed before you push. See [Review & Push Workflow](saas-guide/user/assign-pr.md#review--push-workflow).
- **Release notes at approval.** When you approve a suggestion, choose **Include** or **Not needed** for the release notes, with its section and product category - SudoDocs suggests the answer. You can also create a release right there with **+ New release...**. See [Triage Suggestions](saas-guide/user/doc-drift.md#triage-suggestions).
- **Is it still needed?** Check suggestions against your docs as they are today: SudoDocs tells you which your docs already have - even when they say it in other words - updates the rest to fit docs that changed since, and shows whether the engineering pull request was merged or closed. **Dismiss as done** clears the finished ones and keeps their release notes. See [Is a Suggestion Still Needed?](saas-guide/user/doc-drift.md#is-a-suggestion-still-needed)
- **Request changes.** Tell SudoDocs what to change on a suggestion; it revises and reviews it again, and **Review history** shows every round. See [Request Changes](saas-guide/user/doc-drift.md#request-changes).
- **Your edits stay yours.** New commits on a pull request no longer redraft its suggestion; you'll see **New commits since this draft** and can sync when you're ready.

### Doc Team Roles everywhere

- **Every tool follows your role instructions.** Release notes, **Sync Latest Code** and revisions you ask for on a docs pull request now follow your Technical Writer instructions and pass SudoDocs' Editor review, like Author a Feature and Docflows already did. Anything the Editor can't sign off on is flagged, not hidden. See [Where the Roles Apply](saas-guide/admin/doc-team-roles.md#where-the-roles-apply).

### Screenshots in Docflows

- **No route maps needed.** SudoDocs reads the pull request and picks the pages worth a screenshot; tick more or add any page. See [Screenshots in a Suggestion](saas-guide/user/doc-drift.md#screenshots-in-a-suggestion).
- **Your screenshot style.** Set window size, theme, annotation colour and more under **Screenshot Style** in the Knowledge Base, or let Auto-Learn pick it up from your existing screenshots. See [Screenshot Style](saas-guide/admin/kb-config.md#screenshot-style).
- **Personal data kept out.** Emails, names, keys and other personal details are replaced with demo values before each shot, and checked again afterwards. See [How SudoDocs Takes Screenshots](saas-guide/admin/doc-drift.md#how-sudodocs-takes-screenshots).
- **Before and after, annotated.** Compare a new screenshot with the one in your docs, and box, number, cover or crop it before you push. When your UI changes, screenshots are re-taken the same way. See [When Your UI Changes](saas-guide/admin/doc-drift.md#when-your-ui-changes).
- **Apps with two-factor sign-in.** The screenshot account can now sign in to apps that ask for an authenticator code. See [Sign in to an App That Uses Two-Factor](saas-guide/admin/doc-drift.md#sign-in-to-an-app-that-uses-two-factor).

### Capture and API Readiness

- **Zoom on clicks.** Interactive walkthroughs zoom in on what's being clicked - most helpful on phones - and viewers can switch back to the whole screen. See [Zoom on Clicks](saas-guide/user/capture.md#zoom-on-clicks).
- **Writers can edit captures.** Captions, hotspots, redaction, voiceover and video export are open to writers, not just administrators.
- **Open an API scan's pull request where it belongs.** Send the corrected spec back to the spec's own repository, to a docs repository, or both. See [Push to Production](saas-guide/user/api-readiness.md#push-to-production).

### For administrators

- **Admin Overview.** A new **Overview** tab shows your setup progress, what's left to configure, and usage at a glance. See [Admin Overview](saas-guide/admin/overview.md).
- **Add-ons.** Pro and Enterprise organizations can add seats and AI credit packs. See [Add-ons](saas-guide/admin/plans.md#add-ons); prices are on [sudodocs.com/#pricing](https://sudodocs.com/#pricing).

### CLI

- **sudodocs-cli 1.2.0** adds commands for releases (`sudodocs releases`), tagged work (`sudodocs items`, including approving Docflows suggestions), the dashboard (`sudodocs dashboard --mine`, `sudodocs mywork`), release notes (`sudodocs release-notes queue`, `draft`, `push`), API scan pull requests (`sudodocs api-scan open-pr`) and capture zoom (`sudodocs capture zoom`). Upgrade with `pip install --upgrade sudodocs-cli`. See [Getting Started](cli-guide/getting-started.md).

### Improvements

- SudoDocs works better on phones and tablets: menus, tables, dialogs and side panels fit the screen.
- Keyboard users see a clear focus outline; clicking with a mouse no longer leaves one behind.
- Release notes drafts from Release Composer now save reliably.
- Docflows changes use the full width of the card, and new files show in a single column.

### Sign in your way

- **Email and password sign-in.** Sign in with a SudoDocs password, Google, or your company's SSO. A password and Google sign-in lead to the same account, so you can use either. See [Sign In and Create an Account](saas-guide/user/sign-in.md).
- **Two-factor authentication.** Add an authenticator app under **Profile & security**. Administrators who sign in with a password are asked to set it up. See [Profile & Security](saas-guide/user/profile-security.md).
- **Sign-in policy for your organization.** Administrators can choose which sign-in methods members may use and require two-factor for everyone. See [Set the Sign-In Policy](saas-guide/admin/users.md#set-the-sign-in-policy).
- **Manage members' sign-in.** From the **Users** tab, send a password reset, reset two-factor, sign someone out everywhere, or disable an account.

### Easier to find your way around

- **New profile menu.** Click your initials in the top-right corner for **Profile & security**, **Admin Dashboard**, and **Sign out**.
- **The Admin Dashboard's Account tab is now Organization**, so it's clear it holds your organization's subscription and API keys, not your personal settings.

### Repositories and API specs

- **Connect with GitHub.** Add repositories in one click with the SudoDocs GitHub App, or paste a fine-grained, classic, or GitHub CLI token. SudoDocs checks each token and shows its status. See [Ingest Repositories](saas-guide/admin/connect-repos.md).
- **API Specs tab.** Administrators set where your OpenAPI spec lives and which style rules check it in one place. See [API Specs](saas-guide/admin/api-specs.md).

### CLI

- **sudodocs-cli 1.1.0** adds commands to manage members' sign-in and your organization's sign-in policy, check GitHub tokens before saving them, and change API Specs settings. Upgrade with `pip install --upgrade sudodocs-cli`. See [CLI Users](cli-guide/admin/users.md).

### Improvements

- Role changes and removals now take effect immediately.
- The trial countdown shows the full number of days left.
- Walkthrough Auditors now open straight into Capture after signing in.
- Emails from SudoDocs have a cleaner design.
