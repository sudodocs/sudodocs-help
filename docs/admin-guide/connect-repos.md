# Connecting Repositories

SudoDocs ingests content from your repositories to power its AI features. You can connect Documentation repositories (for auditing and chat) and Source Code repositories (for technical drift detection).

## Add a Git Repository

To add a GitHub repository:

1.  Navigate to the **Admin Dashboard** and select the **Repositories** tab.
2.  Click **+ Add New Repository**.
3.  In the **Integration Name** box, enter a recognizable name (e.g., "Main API Docs").
4.  In the **Repository Type** list, select one of the following:
    * **Documentation**: For Markdown, RST, or text files.
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

## Syncing a Repository

After adding a repository, you must sync it to index the content into the Vector Database.

1.  Locate the repository in the **Active Repositories** list.
2.  Click the **Sync** button.
    * The button will change to a progress bar showing the percentage complete.
3.  Wait for the status to change to **Synced**.

> **Note**: Initial sync times vary by repository size. A typical documentation repo (50-100 pages) takes 2-5 minutes. Large codebases may take longer. You can navigate away from the page while the sync runs in the background.
