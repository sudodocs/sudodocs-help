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

> **Note**: Initial sync times vary by repository size. A typical documentation repo (50-100 pages) takes 2-5 minutes. Large codebases may take longer. You can navigate away from the page while the sync runs in the background.

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
