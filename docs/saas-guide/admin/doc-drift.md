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
7. Deselect **Pushes**, and select both **Pull requests** and **Issue comments** - the latter lets SudoDocs respond when someone comments `@sudodocs` on a PR to request a fix. You don't need **Pushes** to keep SudoDocs up to date: it checks every repository for new commits each hour (see [Keep in Sync](connect-repos.md#keep-in-sync)).
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

For code repositories, SudoDocs can sign in to your app and take screenshots for Docflows suggestions, so docs updates show the real UI. You don't have to tell it which pages to capture: it learns your app's pages once, then works out which ones each pull request affects.

**1. Tell SudoDocs how to reach and sign in to your app**

1. Go to **Admin Dashboard > Repositories**.
2. Find the code repository and click **Screenshot Settings**.
3. *(Optional)* Enter a **Preview URL Pattern** if each pull request gets its own preview site (for example `https://pr-{pr_number}.preview.example.com`). Without one, SudoDocs uses the app address from step 2 below.
4. Choose the **Access Method** - how SudoDocs signs in (see [Supported Access Methods](#supported-access-methods)).
5. Click **Save Preview Settings**.

**2. Build the page index**

1. Under the repository's name, open **Page index**.
2. Enter a stable address of your app - your test or staging site - and click **Build page index**.

SudoDocs signs in and follows your app's own links to learn its pages: their addresses, titles and headings. It never clicks buttons or submits forms, never follows sign-out, delete or download links, stops at 150 pages, and replaces personal data before reading a page. Pages that differ only by an ID - like `/customers/42` and `/customers/7` - count as one page. It takes a few minutes and uses no credits. Build it again after big UI changes.

**3. That's it.** For each pull request, SudoDocs picks the pages it affects and takes those screenshots - see [Screenshots in a Docflows suggestion](../user/doc-drift.md#screenshots-in-a-suggestion).

> **Route Map (optional):** to always capture certain pages when certain files change, add a **Route Map** in Screenshot Settings - one line per mapping: a file glob, `=>`, then routes, like `templates/admin_dashboard.html => /admin/dashboard`. Mapped pages are captured alongside the ones SudoDocs picks.

### Supported Access Methods

SudoDocs supports five authentication modes to handle various preview environment configurations:

| Access Method | Configuration Fields | Use Case |
| :--- | :--- | :--- |
| **None (publicly reachable)** | None | Public staging sites requiring no credentials. |
| **HTTP Basic Auth** | **Username**, **Password** | Sites protected by standard browser-level HTTP authentication. |
| **Custom Header** | **Header Name**, **Header Value** | Staging environments gated by a secret bypass token or header-based gateway. |
| **Session Cookie** | **Cookie Name**, **Cookie Value** | Applications using third-party OAuth or Single Sign-On (SSO) with no local login form. |
| **Login Form** | **Login URL**, **Username Field**, **Password Field**, **Submit Button** (CSS Selectors); for two-factor, **2FA Code Field** and **2FA Setup Key** | Standard applications featuring a username and password form, including ones that ask for an authenticator-app code. |

> **Tip on Session Cookies:** To use a session cookie, log into the preview environment manually using a dedicated test account. Open your browser's Developer Tools, copy the session cookie name and value, and paste them into the SudoDocs **Screenshot Settings** dialog. Because session cookies expire, you must periodically refresh this value.

> **Tip on Login Forms:** Use a dedicated, low-privilege service account for form logins. Define CSS selectors for the fields (e.g., `#email` for the **Username Field**, `#password` for the **Password Field**, and `button[type=submit]` for the **Submit Button**). SudoDocs reuses the **Username** and **Password** fields defined in the Basic Auth section so that credentials are encrypted together.

### Sign in to an App That Uses Two-Factor

If the screenshot account has two-factor turned on with an authenticator app, SudoDocs can type the code for it:

1. Turn on two-factor for the screenshot account, and copy its **setup key** (the text shown under the QR code) or the whole `otpauth://` link.
2. In the repository's **Screenshot Settings**, choose **Login Form**.
3. Fill in **2FA Code Field** with the CSS selector of the code box (`#code` for SudoDocs itself) and paste the key into **2FA Setup Key**.
4. Click **Save Preview Settings**.

After the password step, SudoDocs types the current 6-digit code and submits it. Accounts that don't get a code step sign in as usual. The key is stored encrypted and never shown again; leave the field blank to keep it, or tick **Remove the saved 2FA setup key** to delete it.

> **Use an account just for screenshots.** With its setup key saved, the account is effectively protected by its password alone. Give it the lowest role that can see the pages you screenshot, in an organization with demo data only.

Two-factor that sends codes by text message or email, passkeys, and Google-only accounts can't be automated this way - use a **Session Cookie** or an account without them.

#### Screenshot your own SudoDocs test instance

To screenshot SudoDocs pages for your docs: create a Writer account for screenshots with a password, then choose **Login Form** with your instance's `/login` page as the **Login URL**, `#email`, `#password` and `button[type=submit]` as the fields and, if the account uses two-factor, `#code` as the **2FA Code Field** and its setup key. System Administrators always need two-factor with a password, and so does everyone when your organization's sign-in policy requires it.

### How SudoDocs Takes Screenshots

Every screenshot follows your organization's [Screenshot Style](kb-config.md#screenshot-style) and is made safe before anyone sees it:

1. **Set up like your other screenshots**: your window size, sharpness and theme. Animations are off, dates are frozen to one neutral date, and pop-up messages and chat widgets are hidden. Pages on your **Never screenshot these pages** list are skipped.
2. **Personal data replaced before the shot**: email addresses, phone numbers, card and bank numbers, API keys and tokens, IDs, IP addresses, the screenshot account's own sign-in, and your **Also treat as private** patterns become realistic demo values - the same real value always becomes the same demo value. Your **Always hide these elements** are covered with a solid box.
3. **Checked after the shot**: AI writes the image's alt text and looks for anything personal still showing, such as names. Anything it finds is covered with a solid box, and the image is flagged **Check for personal data**.
4. **Pointed out to match the text**: when the draft's steps name controls in bold - "Click **Refund**, then **Save changes**" - SudoDocs draws a box around each of them in the screenshot that follows (numbered 1, 2, … when the steps are a numbered list, per your [Screenshot Style](kb-config.md#screenshot-style)) and crops to that part of the page with some space around it. Writers can adjust or remove this with **Edit** in the review. This step uses no AI and no credits.

The check costs 1 credit per screenshot. Pages skipped or not captured aren't charged.

### When Your UI Changes

When a screenshot from Docflows is pushed to your docs, SudoDocs remembers how it was made: the page, the controls it points at (by their names, not their positions), whether it was cropped or numbered, and the window it was taken in. When a later pull request makes that image out of date, SudoDocs re-takes it the same way:

* **Same screen, things moved**: it finds the same controls in their new places, frames the screenshot like before, and has AI confirm it's still the same screen (1 credit). The review says **Re-shot the same way as before**, with what changed.
* **The screen changed a lot** (the controls are gone, or it's a different screen): AI reads the docs text around the image and your page index and works out what the screenshot should show now - maybe another page - and points at the new controls (2 credits). The review says why, for example "Refunds moved into the Payments page".
* **Not sure**: if the AI isn't confident, the screenshot is marked **Needs your eyes** and can't be pushed until a writer reviews it.

SudoDocs never replaces a doc image without telling you. To see or forget what it remembers, go to **Admin Dashboard > Knowledge Base > Screenshot Style > Remembered screenshots**.

A flagged screenshot - or one the check couldn't run on - can't be pushed until someone looks at it and ticks **Reviewed** in [Review & Push](../user/assign-pr.md#review--push-workflow). Screenshots your own CI sends with `sudodocs docflow --screenshot` go through the same check.

### Troubleshooting Screenshot Failures

If SudoDocs fails to capture screenshots for a Docflow suggestion, a warning banner appears at the top of the suggestion card in the **Docflows** list:

* **Preview environment was unreachable:** SudoDocs could not establish a network connection to your preview URL. Check that your staging server is up and accessible from the public internet.
* **Login to the preview environment failed:** SudoDocs reached the login page but could not authenticate - the sign-in form or a two-factor code box was still showing after it submitted. Verify that your login form CSS selectors, service account username, password, and (for two-factor) the code field and setup key are correct in the repository's **Screenshot Settings**. SudoDocs never commits screenshots of a sign-in page.

## See Also

* [CLI Tasks → Docflows](../../cli-guide/admin/doc-drift.md) - script webhook lookups, Screenshot Settings, and triggering a suggestion directly from CI.