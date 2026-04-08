# Manage the Doc PR Inbox

The Doc PR Inbox allows technical writers to review, edit, and assign automated documentation suggestions generated directly from engineering Pull Requests.

## Triage Suggestions

When an engineer merges a Pull Request, SudoDocs generates an action item in your inbox.

1. Open the **Doc PR Inbox**.
2. Review the suggested target file path and the AI-generated draft.
3. In the assignment panel, input the **Target Release**, designate an **Assignee**, and apply a **Product Tag** (e.g., Auth, API).
4. Click **Approve**. 

> Triaged suggestions appear in the assigned Release Dashboard for final review.

## Sync and Push Updates

Writers can push approved documentation directly back to the Git repository.

1. Open the **Assigned Doc PRs** panel in your Release Dashboard.
2. Click **Review & Push** on a triaged item.
3. *(Optional)* Click **Sync Latest Code** to fetch new commits from GitHub and append missing updates to your draft.
4. Select the target integration, define the file path, and click **Push PR**.