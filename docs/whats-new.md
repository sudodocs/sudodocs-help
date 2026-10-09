---
title: What's New
description: Product updates to SudoDocs, newest first.
---

# What's New

Product updates to SudoDocs, newest first.

## October 2026

### Sign in your way

- **Email and password sign-in.** Sign in with a SudoDocs password, Google, or your company's SSO. A password and Google sign-in lead to the same account, so you can use either. See [Sign In and Create an Account](saas-guide/user/sign-in.md).
- **Two-factor authentication.** Add an authenticator app under **Profile & security**. Administrators who sign in with a password are asked to set it up. See [Profile & Security](saas-guide/user/profile-security.md).
- **Sign-in policy for your organization.** Administrators can choose which sign-in methods members may use and require two-factor for everyone. See [Set the Sign-In Policy](saas-guide/admin/users.md#set-the-sign-in-policy).
- **Manage members' sign-in.** From the **Users** tab, send a password reset, reset two-factor, sign someone out everywhere, or disable an account.

### Easier to find your way around

- **New profile menu.** Click your initials in the top-right corner for **Profile & security**, **Admin settings**, and **Sign out**.
- **The Admin Dashboard's Account tab is now Organization**, so it's clear it holds your organization's subscription and API keys, not your personal settings.

### Repositories and API specs

- **Connect with GitHub.** Add repositories in one click with the SudoDocs GitHub App, or paste a fine-grained, classic, or GitHub CLI token. SudoDocs checks each token and shows its status. See [Ingest Repositories](saas-guide/admin/connect-repos.md).
- **API Specs tab.** Administrators set where your OpenAPI spec lives and which style rules check it in one place. See [API Specs](saas-guide/admin/api-specs.md).

### CLI

- **sudodocs-cli 1.1.0** adds commands to manage members' sign-in and your organization's sign-in policy, and to check GitHub tokens before saving them. Upgrade with `pip install --upgrade sudodocs-cli`. See [CLI Users](cli-guide/admin/users.md).

### Improvements

- Role changes and removals now take effect immediately.
- The trial countdown shows the full number of days left.
- Walkthrough Auditors now open straight into Capture after signing in.
- Emails from SudoDocs have a cleaner design.
