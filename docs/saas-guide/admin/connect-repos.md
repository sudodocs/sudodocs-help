# Ingest Repositories

SudoDocs ingests content from your repositories to power its AI features. You can connect Documentation repositories (for auditing and chat) and Source Code repositories (for technical drift detection).

## Connect with GitHub (Recommended)

The quickest way to add GitHub repositories is the SudoDocs GitHub App. There's nothing to copy, and its access doesn't expire.

1. On the **Repositories** tab, click **Connect with GitHub**.
2. On GitHub, choose the account or organization, select which repositories SudoDocs can access, and install the app.
3. Back in SudoDocs, under **Choose repositories**, select the repositories to add and their **Repository type** (**Documentation** or **Source Code**).
4. Click **Add selected repositories**.

To give SudoDocs access to more repositories later, change the installation's repository list on GitHub, then click **Connect with GitHub** again.

## Add a Git Repository with a Token

If you can't install the GitHub App, add a repository with a token:

1.  Navigate to the **Admin Dashboard**, select the **Repositories** tab, and click **+ Add New Repository**.
2.  In the **Integration Name** box, enter a recognizable name (e.g., "Main API Docs").
3.  In the **Repository Type** list, select one of the following:
    * **Documentation**: For Markdown, MDX, reStructuredText, AsciiDoc, HTML, DITA XML (`.dita`/`.ditamap`), or plain text files.
    * **Source Code**: For programming languages (Python, JS, Go, etc.). Available on every plan, including Free.
4.  In the **Git URL** box, enter the HTTPS clone URL (e.g., `https://github.com/org/repo.git`).
5.  Under **Authentication Type**, select one of the following:
    * **GitHub token (PAT or gh CLI)**: Paste a token. SudoDocs recognizes its type as you paste - see the table below.
    * **Self-managed GitHub App** (Enterprise only): Enter your own app's App ID, Installation ID, and Private Key.
6.  Click **Verify** to check the token against the repository before saving. The result shows the GitHub account it belongs to and any missing access.
7.  Click **Add Repository**.

| Token | Starts with | Notes |
|---|---|---|
| Fine-grained token | `github_pat_` | Recommended. Give it **Contents** and **Pull requests** read & write on the repository. |
| Classic token | `ghp_` | Needs the `repo` scope for private repositories. |
| GitHub CLI token | `gho_` | The output of `gh auth token`. It's tied to your personal `gh` login and stops working if you run `gh auth logout`. |

If a token is valid but lacks write access, SudoDocs warns you. You can still save it with **Save anyway**, but features that open pull requests won't work with it.

## Check a Repository's Credentials

Each GitHub repository in **Active Repositories** shows a status:

| Status | Meaning |
|---|---|
| **OK** | The token or app access works. |
| **Limited access** | It works, but is missing permissions some features need. |
| **Invalid** or **Revoked** | GitHub rejects it. Replace it with **Update Token**, or reconnect with GitHub. |

Hover over the status to see when it was last checked and any error. Click **Re-check** to check it now. SudoDocs also re-checks credentials that are more than a day old when an administrator opens the Admin Dashboard. Expiring tokens show their expiry date.

To replace a token, click **Update Token** in the repository's row, paste the new token, and save.

## Add a Public Website

To ingest a public documentation site:

1.  On the **Repositories** tab, click **+ Add New Repository**.
2.  Set **Repository Type** to **Public Website**.
3.  In the **Website URL** box, enter the root URL (e.g., `https://docs.example.com`).
    * **Note**: SudoDocs automatically looks for an `/llms.txt` file or a `sitemap.xml` to discover pages.
4.  Click **Add Repository**.

## Sync a Repository (RAG)

After adding a repository, you must sync it to index the content into the Vector Database. This creates a RAG pipeline.

1.  Locate the repository in the **Active Repositories** list.
2.  Click the **Sync** button.
    * The button will change to a progress bar showing the percentage complete.
3.  Wait for the status to change to **Synced**.

> **Note**: Docflows' [Check against your docs](../user/doc-drift.md#which-version-of-your-docs-is-checked) doesn't depend on syncing: it reads the documentation repository's default branch live from GitHub. Syncing keeps the copy SudoDocs drafts from up to date.

> **Note**: Initial sync times vary by repository size. A typical documentation repo (50-100 pages) takes 2-5 minutes. Large codebases may take longer. You can navigate away from the page while the sync runs in the background.

### What Syncing Is Used For

A sync gives SudoDocs its own searchable copy of a repository: the text of every file, how your components relate, and - for a documentation repository - its layout. These tools read that copy, so they only know what was in the repository at the last sync:

| Tool | What it uses the synced copy for |
|---|---|
| [Docflows](../user/doc-drift.md) | Which of your pages a change affects, what they say now, and whether a file is new or an update. Also where screenshots go and which existing screenshots a new one replaces. |
| [Author a Feature](../user/feature-author.md) | Your existing pages and related code, so drafts fit what's there. |
| [Sync Latest Code](../user/assign-pr.md#manage-engineering-changes) | Related docs, for context. |
| [Release Composer](../user/release-composer.md) | Context for writing each entry, and your docs framework when pushing release notes. |
| [DocOps Assistant](../user/index.md) | Searching your docs and code to answer questions and find gaps. |
| [Knowledge Base Auto-Learn](kb-config.md) | Your writing style and screenshot style. |

If a documentation repository hasn't been synced since people changed it, Docflows drafts against the older pages. A page added since the last sync can even look like a new file, so the review shows all of it as added. Sync after big changes to your docs.

These don't depend on syncing - they read GitHub directly when you use them: Docflows' [Check against your docs](../user/doc-drift.md#is-a-suggestion-still-needed), pushing pull requests to your repositories, and where release notes go in your docs. Capture, Diagram Generator, API Readiness and the Universal Converter don't use synced repositories.

A repository also syncs on its own when a pull request is merged in it, if it sends SudoDocs pull request events (the SudoDocs GitHub App, or a webhook).

### What SudoDocs Learns About a Docs Repository

When a **documentation** repository syncs, SudoDocs also works out how it's laid out, from its files alone:

* **Docs framework**: Docusaurus, Mintlify, MkDocs, Antora, Sphinx, Hugo, Jekyll, GitBook, or plain Markdown files.
* **Image folder**: where most of its images live (for example `static/img/billing`), or the framework's usual folder if it has none yet.
* **How pages reference images**: from the site's root (`/img/x.png`), relative to the page (`../images/x.png`), or by name (Antora).
* **File naming**: for example `refund-dialog.png` or `refund_dialog.png`.

Docflows uses this to save screenshots in the right folder and to write each image reference the way that page needs, in its own format (Markdown, MDX, reStructuredText, AsciiDoc, HTML or DITA).

To see it, look under the repository's name in **Active Repositories**: **Docs layout: Docusaurus · images in static/img**. Click it to choose a different **image folder**; leave it blank to go back to the detected one. Your choice is kept when the repository syncs again.

## Cancel a Running Sync

If a sync is taking longer than expected or was started by mistake, click the small **Stop Sync** icon next to that repository's progress bar in the **Active Repositories** list. This works for any in-progress job, not just syncs - see [CLI Tasks → Organization](../../cli-guide/admin/settings.md#cancel-a-running-job) for the command-line equivalent.

## Automatic Sync Schedule

Beyond clicking **Sync** manually and webhook-triggered Docflows suggestions (see [Configure Webhooks and Screenshot Settings for Docflows](doc-drift.md)), you can set a per-repository schedule so a repository's indexed content is periodically refreshed on its own - useful as a catch-all if a webhook event is ever missed, or if you'd simply rather not rely on remembering to click Sync.

1. Locate the repository in the **Active Repositories** list.
2. Click **Sync Schedule** (repositories with a schedule already set show a green **Auto-Sync: Nh** badge here instead).
3. Choose a **Frequency**: Off (manual sync only), Daily (every 24 hours), Weekly (every 168 hours), Monthly (every 720 hours), or Custom (enter any interval in hours).
4. Click **Save Schedule**.

> **Note**: Sync Schedule isn't shown for spec/OpenAPI repositories - those don't need syncing the same way, since API Readiness reads the spec directly rather than from the Vector Database.

## See Also

* [CLI Tasks → Repositories](../../cli-guide/admin/connect-repos.md) - script every action on this page.
* [Configure Webhooks and Screenshot Settings for Docflows](doc-drift.md) - the other repository-level configuration, for automated documentation suggestions rather than search/RAG.

## Track Pull Request Reviews

SudoDocs follows the pull requests it opens in your documentation repositories - reviews, merges and closes - and shows them on each item (see [Track work and pull requests](../user/releases.md#track-work-and-pull-requests)). Repositories connected through the SudoDocs GitHub App report this automatically. For a repository connected with a token, SudoDocs checks open pull requests every 15 minutes.

For updates within seconds on a token-connected documentation repository, add a webhook to it:

1. In SudoDocs, open **Admin Dashboard > Repositories** and copy the repository's **Payload URL** and **Secret** (the same webhook dialog Docflows uses).
2. In GitHub, open the documentation repository's **Settings** > **Webhooks** > **Add webhook**, paste both, and set **Content type** to `application/json`.
3. Choose **Let me select individual events**, deselect **Pushes**, and select **Pull requests** and **Pull request reviews**.
4. Click **Add webhook**.
