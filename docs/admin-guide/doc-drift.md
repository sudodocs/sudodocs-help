# Configure Webhooks for Doc Drift Prevention

> **Note:** The standalone **Technical Drift Audit** feature has been deprecated and superseded by the real-time **Docflows**.

Docflows provides a proactive approach to preventing documentation drift. Instead of running periodic audits, the system now automatically analyzes engineering pull requests (PRs) and Jira tickets as they happen, suggesting documentation changes directly to the writing team.

To enable this feature, you must configure a webhook for each connected repository or Jira instance. This allows the external service (like GitHub) to securely notify our platform about new activity.

## Configuring Webhooks for Automated Suggestions

After connecting a repository or Jira instance in the **Admin Dashboard**, you must set up the corresponding webhook to begin receiving automated suggestions.

### Step 1: Retrieve Webhook Credentials

1.  Navigate to the **Admin Dashboard** page.
2.  Under the **Repositories** tab, locate the **Active Repositories** list.
3.  Find the repository or service you want to connect and click the **Webhook** button.
4.  A dialog will appear containing a unique **Payload URL** and a **Secret** for that specific integration. Keep this dialog open.

### Step 2: Set up the Webhook in GitHub

For each connected code repository, follow these steps in GitHub:

1.  Navigate to your repository's main page.
2.  Click **Settings** > **Webhooks** > **Add webhook**.
3.  Paste the **Payload URL** from the SudoDocs dialog into the corresponding field.
4.  Change the **Content type** to `application/json`.
5.  Paste the **Secret** from the SudoDocs dialog into the corresponding field.
6.  Under "Which events would you like to trigger this webhook?", select **Let me select individual events.**
7.  Deselect **Pushes**, and select both **Pull requests** and **Issue comments** - the latter lets SudoDocs respond when someone comments `@sudodocs` on a PR to request a fix.
8.  Ensure **Active** is checked, and click **Add webhook**.

Once configured, the system will begin analyzing new and updated pull requests for that repository, and suggestions will appear in **Docflows**.

### Step 3: Set up the Webhook in Jira

For connected Jira instances, follow these steps in your Jira account:

1.  Navigate to **Jira Settings** > **System**.
2. Under **Advanced**, click **Webhooks**.
3.  Click **Create a Webhook**.
4.  Give the webhook a descriptive name (e.g., "SudoDocs Doc Suggestions").
5.  Paste the **Payload URL** from the SudoDocs dialog into the URL field. Note that the Jira URL already contains the secret as a query parameter.
6.  In the "Issue related events" section, find the **Issue** subsection and check the box for **updated**.
7.  Click **Create**.

This configuration will notify the system when Jira tickets are moved to a "Done", "Resolved", or "Closed" status, triggering a documentation suggestion.

## Configure Preview Environments for Screenshot Docflows

SudoDocs can automatically capture screenshots from a pull request's live preview deployment and include those visuals directly in the generated Docflows suggestions. This allows the AI to reference actual UI renderings instead of guessing design elements.

### Configure preview environments

To configure screenshots for your code repository:

1. Navigate to the **Admin Dashboard** and select the **Repositories** tab.
2. Find the repository integration in the **Active Repositories** list and click **Preview Settings**.
3. Configure the following parameters in the settings modal:
   * **Preview URL Pattern**: The base URL format for your pull request preview environments (e.g., `https://pr-{pr_number}.preview.example.com`). You can use the tokens `{pr_number}`, `{branch}`, and `{sha}`. Leaving this blank disables screenshot collection.
   * **Access Method**: Select the authentication mechanism used to bypass login screens or access-control blocks on your preview builds:
     * **None (publicly reachable)**: Use this for open preview links.
     * **HTTP Basic Auth**: Provide a **Username** and **Password** for standard HTTP authentication.
     * **Custom Header**: Specify a **Header Name** and **Header Value** (e.g., `x-vercel-protection-bypass` for Vercel deployment protections).
   * **Route Map**: Map specific files in your codebase to UI routes to screenshot. Provide one mapping rule per line using the format `glob_pattern => /route1, /route2`. For example:
     ```text
     templates/admin_dashboard.html => /admin/dashboard, /admin/settings
     ```
4. Click **Save Preview Settings** to persist the configuration.