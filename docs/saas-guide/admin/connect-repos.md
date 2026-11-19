# Ingest Repositories

SudoDocs ingests content from your repositories to power its AI features. You can connect Documentation repositories (for auditing and chat) and Source Code repositories (for technical drift detection).

Open **Admin > Repositories**. Each repository is a row with its type, its sync state, **Used by** (the sites built from it), a **Writers may edit** switch, a **Sync now** button and **Manage**. **Manage** opens a dialog with the repository's sync, access, webhook, token and screenshot settings, and a confirmed **Remove**.

## Connect with GitHub (Recommended)

The quickest way to add GitHub repositories is the SudoDocs GitHub App. There's nothing to copy, and its access doesn't expire.

1. On **Admin > Repositories**, click **Connect GitHub**.
2. On GitHub, choose the account or organization, select which repositories SudoDocs can access, and install the app.
3. Back in SudoDocs, under **Choose repositories**, select the repositories to add and their **Repository type** (**Documentation** or **Source code**).
4. Click **Add selected repositories**.

To give SudoDocs access to more repositories later, change the installation's repository list on GitHub, then click **Connect GitHub** again.

## Add a Git Repository with a Token

If you can't install the GitHub App, add a repository with a token:

1.  Open **Admin > Repositories** and click **Connect a repository**.
2.  In **Name**, enter a recognizable name (e.g., "Main API Docs").
3.  In **Repository type**, select one of the following:
    * **Documentation (Git)**: For Markdown, MDX, reStructuredText, AsciiDoc, HTML, DITA XML (`.dita`/`.ditamap`), or plain text files.
    * **Source code (Git)**: For programming languages (Python, JS, Go, etc.). Available on every plan, including Free.
4.  In **Git URL (HTTPS)**, enter the HTTPS clone URL (e.g., `https://github.com/org/repo.git`).
5.  Under **Authentication**, select one of the following:
    * **GitHub token**: Paste a token. SudoDocs recognizes its type as you paste - see the table below.
    * **Own GitHub App (Enterprise)**: Enter your own app's **App ID**, **Installation ID** and **Private key (PEM)**.
6.  Click **Verify** to check the token against the repository before saving. The result shows the GitHub account it belongs to and any missing access.
7.  Click **Connect a repository** to save it.

| Token | Starts with | Notes |
|---|---|---|
| Fine-grained token | `github_pat_` | Recommended. Give it **Contents** and **Pull requests** read & write on the repository. |
| Classic token | `ghp_` | Needs the `repo` scope for private repositories. |
| GitHub CLI token | `gho_` | The output of `gh auth token`. It's tied to your personal `gh` login and stops working if you run `gh auth logout`. |

If a token is valid but lacks write access, SudoDocs warns you. You can still save it with **Save anyway**, but features that open pull requests won't work with it.

## Check a Repository's Credentials

Each GitHub repository on **Admin > Repositories** shows a tag for its credentials:

| Status | Meaning |
|---|---|
| **Working** | The token or app access works. |
| **Limited access** | It works, but is missing permissions some features need. |
| **Invalid** or **Revoked** | GitHub rejects it. Replace it with **Manage** > **Update token**, or reconnect with GitHub. |
| **Not checked** | SudoDocs has not checked it yet. |

Hover over the tag to see when it was last checked and any error. In **Manage**, click **Check again** to check it now. SudoDocs also re-checks credentials that are more than a day old when an administrator opens Admin. Expiring tokens show their expiry date.

To replace a token, click **Manage** > **Update token** on the repository, paste the new token, and save. It is checked with GitHub before it replaces the current one.

## Add a Public Website

To ingest a public documentation site:

1.  On **Admin > Repositories**, click **Connect a repository**.
2.  Set **Repository type** to **Public website**.
3.  In the website address box, enter the root URL (e.g., `https://docs.example.com`).
    * **Note**: SudoDocs automatically looks for an `/llms.txt` file or a `sitemap.xml` to discover pages.
4.  Click **Connect a repository** to save it.

## Sync a Repository (RAG)

After adding a repository, you must sync it to index the content into the Vector Database. This creates a RAG pipeline.

1.  Find the repository on **Admin > Repositories**.
2.  Click **Sync now**.
    * The button shows the progress as **Syncing 40%**, then **Synced** (or **Sync failed**).
3.  Wait for it to say **Synced**.

> **Note**: Docflows' [Check against your docs](../user/doc-drift.md#which-version-of-your-docs-is-checked) doesn't depend on syncing: it reads the documentation repository's default branch live from GitHub. Syncing keeps the copy SudoDocs drafts from up to date.

> **Note**: Initial sync times vary by repository size. A typical documentation repo (50-100 pages) takes 2-5 minutes. Large codebases may take longer. You can navigate away from the page while the sync runs in the background.

### What Syncing Is Used For

A sync gives SudoDocs its own searchable copy of a repository: the text of every file, how your components relate, and - for a documentation repository - its layout. These tools read that copy, so they only know what was in the repository at the last sync:

| Tool | What it uses the synced copy for |
|---|---|
| [Docflows](../user/doc-drift.md) | Which of your pages a change affects, what they say now, and whether a file is new or an update. Also where screenshots go and which existing screenshots a new one replaces. |
| [Author mode](../user/author-mode.md) | Your existing pages and related code, so drafts fit what's there. |
| [Sync Latest Code](../user/assign-pr.md#manage-engineering-changes) | Related docs, for context. |
| [Changelog](../user/release-composer.md) | Context for writing each entry, and your docs framework when pushing release notes. |
| [Doc Assistant](../user/index.md) | Searching your docs and code to answer questions and find gaps. |
| [Knowledge Base Auto-Learn](kb-config.md) | Your writing style and screenshot style. |

If a documentation repository hasn't been synced since people changed it, Docflows drafts against the older pages. A page added since the last sync can even look like a new file, so the review shows all of it as added. Sync after big changes to your docs.

These don't depend on syncing - they read GitHub directly when you use them: Docflows' [Check against your docs](../user/doc-drift.md#is-a-suggestion-still-needed), pushing pull requests to your repositories, and where release notes go in your docs. Capture, Diagrams, API Specs and the Converter don't use synced repositories.

How often SudoDocs refreshes its copy is up to you - see [Keep in Sync](#keep-in-sync).

### What SudoDocs Learns About a Docs Repository

When a **documentation** repository syncs, SudoDocs also works out how it's laid out, from its files alone:

* **Docs framework**: Docusaurus, Mintlify, MkDocs, Antora, Sphinx, Hugo, Jekyll, GitBook, or plain Markdown files.
* **Image folder**: where most of its images live (for example `static/img/billing`), or the framework's usual folder if it has none yet.
* **How pages reference images**: from the site's root (`/img/x.png`), relative to the page (`../images/x.png`), or by name (Antora).
* **File naming**: for example `refund-dialog.png` or `refund_dialog.png`.

Docflows uses this to save screenshots in the right folder and to write each image reference the way that page needs, in its own format (Markdown, MDX, reStructuredText, AsciiDoc, HTML or DITA).

To see it, look under **Docs layout** on the repository: for example **Docusaurus · images in static/img**. To choose a different **image folder**, open **Docs layout settings** at the bottom of the repository; leave it blank to go back to the detected one. Your choice is kept when the repository syncs again.

## Cancel a Running Sync

If a sync is taking longer than expected or was started by mistake, click **Stop sync** while the repository is syncing on **Admin > Repositories**, and confirm. Progress is saved. This works for any in-progress job, not just syncs - see [CLI Tasks → Organization](../../cli-guide/admin/settings.md#cancel-a-running-job) for the command-line equivalent.

## Keep in Sync

Each repository has a **Keep in sync** setting that decides when SudoDocs re-reads it. Click **Manage** > **Keep in sync** on the repository, then choose under **Sync**:

* **When it changes** (the default for documentation repositories): SudoDocs syncs after a pull request is merged into the repository - including the docs pull requests SudoDocs opens - and, within the hour, after any other change, such as a commit pushed straight to the branch. Merges close together are grouped: at most one sync every 30 minutes.
* **On a schedule** (the default for code repositories: daily): every day, week, month, or a number of hours you choose - and only when the repository has new commits.
* **Only when I click Sync now**: nothing happens on its own.

Repositories you connected before this setting existed sync when they change, as they did before. Websites can sync on a schedule or by hand.

> **Note**: Keep in sync isn't shown for spec/OpenAPI repositories - API Readiness reads the spec directly, so they don't need syncing.

### Sync Status

Under **Sync**, each repository shows whether SudoDocs' copy is current, checked every hour:

* **Up to date**: nothing new since the last sync.
* **Behind GitHub: 12 commits**: the repository has changed since SudoDocs last read it.
* **Not synced yet**: click **Sync now** to read it for the first time.

It also shows when the repository was last synced and its Keep in sync setting. **Admin > Overview** lists the repositories that need a sync.

Writers see a notice on **Docflows** and the **Release Dashboard** when a documentation repository is behind (for a repository set to **When it changes**, only if it hasn't caught up within the hour) or hasn't been synced yet - or when a code repository has been behind for a week. They can click **Let admins know**, which emails your organization's System Administrators (at most once a day per repository). Admins see **Sync now** in the notice instead.

### What a Sync Costs

A sync only reads what changed since the last one:

| What changed | AI credits |
|---|---|
| Nothing (already up to date) | Free |
| Some files | 1 credit for every 10 changed files (1-10 files: 1 credit, 11-20: 2 credits, and so on), up to 20 |
| A first sync, a change of branch, or a very large change (more than 200 files) | 20 |
| A website | 20 |

Removed files are free. The sync's result says what it read and what it cost, for example **Synced 7 changed files (1 credit)**.

### Docs Branch

By default SudoDocs works with a documentation repository's default branch on GitHub, usually `main`. If your team writes docs on another branch, set it in **Manage** > **Keep in sync** under **Docs branch**. SudoDocs then uses that branch for everything:

* syncing,
* Docflows' [Check against your docs](../user/doc-drift.md#which-version-of-your-docs-is-checked),
* and every pull request it opens - Docflows, Author mode, release notes and API Readiness pull requests to this repository.

Leave it blank to go back to the default branch. After you change the branch, the next sync reads the whole repository (20 credits).

## Remove a Repository

Click **Manage** > **Remove** on the repository and confirm. SudoDocs deletes its copy of the repository; the repository itself isn't changed.

## See Also

* [CLI Tasks → Repositories](../../cli-guide/admin/connect-repos.md) - script every action on this page.
* [Configure Webhooks and Screenshot Settings for Docflows](doc-drift.md) - the other repository-level configuration, for automated documentation suggestions rather than search/RAG.

## Track Pull Request Reviews

SudoDocs follows the pull requests it opens in your documentation repositories - reviews, merges and closes - and shows them on each item (see [Track work and pull requests](../user/releases.md#track-work-and-pull-requests)). Repositories connected through the SudoDocs GitHub App report this automatically. For a repository connected with a token, SudoDocs checks open pull requests every 15 minutes.

For updates within seconds on a token-connected documentation repository, add a webhook to it:

1. In SudoDocs, open **Admin > Repositories** and copy the repository's **Payload URL** and **Secret** (the same webhook dialog Docflows uses).
2. In GitHub, open the documentation repository's **Settings** > **Webhooks** > **Add webhook**, paste both, and set **Content type** to `application/json`.
3. Choose **Let me select individual events**, deselect **Pushes**, and select **Pull requests** and **Pull request reviews**.
4. Click **Add webhook**.
