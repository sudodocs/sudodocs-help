# Configure Webhooks and Screenshot Settings for Docflows

> **Note:** The standalone **Technical Drift Audit** feature has been deprecated and superseded by the real-time **Docflows**.

Docflows provides a proactive approach to preventing documentation drift. Instead of running periodic audits, the system automatically analyzes engineering pull requests (PRs) and Jira tickets as they happen, suggesting documentation changes directly to the writing team.

To enable this feature, configure a webhook for each connected repository or Jira instance. This allows the external service (like GitHub) to securely notify our platform about new activity. You can also configure browser automation settings to capture visual screenshots of your preview environments.

## Configuring Webhooks for Automated Suggestions

After connecting a repository or Jira instance in the **Admin Dashboard**, set up the corresponding webhook to begin receiving automated suggestions.

### Step 1: Retrieve Webhook Credentials

1. Navigate to the **Admin Dashboard** page.
2. Under the **Repositories** tab, locate the **Active Repositories** list.
3. Find the repository or service you want to connect and click the **Webhook** button.
4. A dialog appears containing a unique **Payload URL** and a **Secret** for that specific integration. Keep this dialog open.

### Step 2: Set up the Webhook in GitHub

For each connected code repository, follow these steps in GitHub:

1. Navigate to your repository's main page.
2. Click **Settings** > **Webhooks** > **Add webhook**.
3. Paste the **Payload URL** from the SudoDocs dialog into the corresponding field.
4. Change the **Content type** to `application/json`.
5. Paste the **Secret** from the SudoDocs dialog into the corresponding field.
6. Under "Which events would you like to trigger this webhook?", select **Let me select individual events.**
7. Deselect **Pushes**, and select both **Pull requests** and **Issue comments** - the latter lets SudoDocs respond when someone comments `@sudodocs` on a PR to request a fix.
8. Ensure **Active** is checked, and click **Add webhook**.

Once configured, the system begins analyzing new and updated pull requests for that repository, and suggestions appear in **Docflows**. Every suggestion is generated through the same Information Architect / Technical Writer / Editor review pipeline as manually-created drafts, fully automated - see [Doc Team Roles](doc-team-roles.md) to customize what each role checks for.

### Step 3: Set up the Webhook in Jira

For connected Jira instances, follow these steps in your Jira account:

1. Navigate to **Jira Settings** > **System**.
2. Under **Advanced**, click **Webhooks**.
3. Click **Create a Webhook**.
4. Give the webhook a descriptive name (e.g., "SudoDocs Doc Suggestions").
5. Paste the **Payload URL** from the SudoDocs dialog into the URL field. Note that the Jira URL already contains the secret as a query parameter.
6. In the "Issue related events" section, find the **Issue** subsection and check the box for **updated**.
7. Click **Create**.

This configuration notifies the system when Jira tickets are moved to a "Done", "Resolved", or "Closed" status, triggering a documentation suggestion.

---

## Configure Screenshot Settings for Docflows

For code repository integrations, SudoDocs can spin up a headless browser using Playwright to take automated screenshots of your preview environments. This helps writers visually verify engineering changes before publishing them.

To configure screenshots for an active repository:

1. Go to the **Admin Dashboard** and select the **Repositories** tab.
2. In the **Active Repositories** list, find your repository and click **Screenshot Settings**.
3. Enter your **Preview URL Pattern** (e.g., `https://pr-{pr_number}.preview.example.com`).
4. Select your environment's authentication method from the **Access Method** dropdown (see options below).
5. Define your **Route Map** as a list of glob patterns mapped to application routes (e.g., `templates/admin_dashboard.html => /admin/dashboard`).
6. Click **Save Settings**.

### Supported Access Methods

SudoDocs supports five authentication modes to handle various preview environment configurations:

| Access Method | Configuration Fields | Use Case |
| :--- | :--- | :--- |
| **None (publicly reachable)** | None | Public staging sites requiring no credentials. |
| **HTTP Basic Auth** | **Username**, **Password** | Sites protected by standard browser-level HTTP authentication. |
| **Custom Header** | **Header Name**, **Header Value** | Staging environments gated by a secret bypass token or header-based gateway. |
| **Session Cookie** | **Cookie Name**, **Cookie Value** | Applications using third-party OAuth or Single Sign-On (SSO) with no local login form. |
| **Login Form** | **Login URL**, **Username Field**, **Password Field**, **Submit Button** (CSS Selectors) | Standard applications featuring a username and password form. |

> **Tip on Session Cookies:** To use a session cookie, log into the preview environment manually using a dedicated test account. Open your browser's Developer Tools, copy the session cookie name and value, and paste them into the SudoDocs **Screenshot Settings** dialog. Because session cookies expire, you must periodically refresh this value.

> **Tip on Login Forms:** Use a dedicated, low-privilege service account for form logins. Define CSS selectors for the fields (e.g., `#email` for the **Username Field**, `#password` for the **Password Field**, and `button[type=submit]` for the **Submit Button**). SudoDocs reuses the **Username** and **Password** fields defined in the Basic Auth section so that credentials are encrypted together.

### Troubleshooting Screenshot Failures

If SudoDocs fails to capture screenshots for a Docflow suggestion, a warning banner appears at the top of the suggestion card in the **Docflows** list:

* **Preview environment was unreachable:** SudoDocs could not establish a network connection to your preview URL. Check that your staging server is up and accessible from the public internet.
* **Login to the preview environment failed:** SudoDocs reached the login page but could not authenticate. Verify that your login form CSS selectors, service account username, or password are correct in the repository's **Screenshot Settings**.

## See Also

* [CLI Tasks → Docflows](../cli-guide/doc-drift.md) - script webhook lookups, Screenshot Settings, and triggering a suggestion directly from CI.