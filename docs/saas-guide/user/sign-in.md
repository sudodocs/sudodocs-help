# Sign In and Create an Account

SudoDocs offers three ways to sign in, all from the same page at [app.sudodocs.com/login](https://app.sudodocs.com/login):

* **Email and password**: a SudoDocs password.
* **Continue with Google**: your Google account.
* **Sign in with company SSO**: your company's identity provider, on Enterprise plans where an administrator has [set up SSO](../admin/sso-setup.md).

Your organization's administrators choose which of these members can use - see [Sign-in Policy](../admin/users.md#set-the-sign-in-policy). After you sign in, System Administrators land on the Admin Dashboard and everyone else on the Workspace.

## Create an Account

To start a new organization:

1. On the sign-in page, click **Create an account**.
2. Enter your name, work email, a password, and an organization name.
3. Click **Create account**.
4. Open the confirmation email SudoDocs sends you and click the link, then **Confirm my email**.

You can't use SudoDocs until you confirm your email. The link works for 24 hours; if it expires, try to sign in and click **Send a new link**.

When you confirm, SudoDocs creates your organization on a 14-day free trial and makes you its System Administrator.

> **Note**: If a teammate has already invited your email, leave **Organization name** blank. Confirming your email joins you to their organization instead of creating a new one.

## Accept an Invitation

When an administrator invites you, you get an email with an invitation link. Open it and choose one of the following:

* **Continue with Google**, if your invited email is a Google account.
* **Create a password**: enter your name and a password, then click **Join**. You don't need to confirm your email separately - the invitation already proves it's yours.

If you already have a SudoDocs account with that email, sign in instead to accept the invitation.

## Password Rules

* At least 12 characters. A short phrase is easier to remember than a string of symbols.
* Passwords that appear in known data breaches are rejected.

## Forgot Your Password

1. On the sign-in page, click **Forgot password?**.
2. Enter your email and click **Email me a reset link**.
3. Open the link within 30 minutes and choose a new password.

Resetting your password signs you out on every other device and sends you an email confirming the change.

> **Note**: For your security, the page shows the same message whether or not an account exists for that email.

## Google and Password on the Same Account

Google sign-in and a password are two ways into the **same** account, not two accounts:

* If you have a password and then use **Continue with Google** with the same email, SudoDocs links Google to your account.
* If you've only ever used Google, you can add a password - see [Set a Password](profile-security.md#set-or-change-your-password). SudoDocs reminds you once per session until you do or click **Not now**.

## Two-Factor Authentication at Sign-In

If two-factor authentication is on for your account, a password sign-in asks for a 6-digit code from your authenticator app after your password. If you can't use your app, enter one of your recovery codes in the same box. Each code works once.

Google and company SSO sign-ins don't ask for a SudoDocs code - your Google account or identity provider handles that step.

System Administrators must use two-factor authentication for password sign-ins. If yours isn't set up yet, SudoDocs takes you to set it up right after you sign in. See [Two-Factor Authentication](profile-security.md#two-factor-authentication).

## If You Can't Sign In

| Message | What to do |
|---|---|
| That email and password don't match | Check both, or [reset your password](#forgot-your-password). If you usually use Google, click **Continue with Google**. |
| Too many failed attempts | After 5 wrong passwords, the account is locked for 15 minutes. Wait, or reset your password, which also clears the lock. |
| Confirm your email first | Open the confirmation email, or click **Send a new link**. |
| Your organization requires signing in with ... | Your organization has turned this method off. Use one of the methods named in the message. |
| This account has been disabled | An administrator has disabled your account. Ask them to enable it. |
| Your organization's access is paused | Contact SudoDocs support. |
| Your sign-in timed out | You took more than 5 minutes to enter your two-factor code. Sign in again. |
| Lost your phone and your recovery codes | Ask an administrator to [reset your two-factor authentication](../admin/users.md#manage-a-members-sign-in). |
