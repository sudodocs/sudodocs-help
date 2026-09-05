# Ingest Repositories

SudoDocs ingests content from your repositories to power its AI features. You can connect Documentation repositories (for auditing and chat) and Source Code repositories (for technical drift detection).

## Add a Git Repository

To add a GitHub repository:

1.  Navigate to the **Admin Dashboard** and select the **Repositories** tab.
2.  Click **+ Add New Repository**.
3.  In the **Integration Name** box, enter a recognizable name (e.g., "Main API Docs").
4.  In the **Repository Type** list, select one of the following:
    * **Documentation**: For Markdown, MDX, reStructuredText, AsciiDoc, HTML, DITA XML (`.dita`/`.ditamap`), or plain text files.
    * **Source Code**: For programming languages (Python, JS, Go, etc.). *Note: Requires Pro/Enterprise plan.*
5.  In the **Git URL** box, enter the HTTPS clone URL (e.g., `https://github.com/org/repo.git`).
6.  Under **Authentication Type**, select your preferred method:
    * **Service Account (PAT)**: Enter a Classic Personal Access Token. This token requires `repo` scope for private repositories.
    * **GitHub App**: (Enterprise only) Enter your App ID, Installation ID, and Private Key.
7.  Click **Add Repository**.

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

If a sync is taking longer than expected or was started by mistake, click the small **Stop Sync** icon next to that repository's progress bar in the **Active Repositories** list. This works for any in-progress job, not just syncs - see [CLI Tasks → Account](../../cli-guide/admin/settings.md#cancel-a-running-job) for the command-line equivalent.

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
