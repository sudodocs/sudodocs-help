# Connect GitHub

Connecting GitHub via a webhook allows you to automatically create feature drafts in SudoDocs whenever a pull request is opened or merged in your engineering repository. This helps keep your documentation in sync with your codebase by capturing changes as they happen.

This setup requires you to copy a unique URL and a secret key from SudoDocs and paste them into your GitHub repository's settings.

### Set up the webhook

1.  Go to **Admin Dashboard** > **Connect Services**.
2.  In the **Webhook Connections** section, find **GitHub**.
3.  Copy the unique **Webhook URL** and click **Reveal Secret** to copy the **Webhook Secret**. Keep this page open.
4.  In a new browser tab, navigate to the GitHub repository you want to connect.
5.  Go to the repository's **Settings** tab and select **Webhooks** from the sidebar.
6.  Click **Add webhook**.
7.  Configure the webhook settings:
    *   **Payload URL**: Paste the **Webhook URL** you copied from SudoDocs.
    *   **Content type**: Select `application/json`.
    *   **Secret**: Paste the **Webhook Secret** you copied from SudoDocs.
8.  In the section **Which events would you like to trigger this webhook?**, select **Let me select individual events.**
9.  Deselect the default **Pushes** event and select only **Pull requests**.
10. Ensure **Active** is checked.
11. Click **Add webhook**.

> **Verification**: Once the webhook is saved, GitHub will send a test ping. A green checkmark next to the webhook in your GitHub settings indicates a successful connection. SudoDocs will now automatically create a new feature draft when a pull request is merged in the connected repository.