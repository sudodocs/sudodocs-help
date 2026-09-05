# Manage Users and Roles

Manage team access and role-based permissions for your SudoDocs organization.

## User Roles

SudoDocs utilizes Role-Based Access Control (RBAC) to secure your documentation environments. 

* **System Administrator**: Full access to repository integrations, Single Sign-On (SSO) configurations, and global knowledge base settings.
* **Writer**: Access to workspaces, release dashboards, and the DocOps Assistant.
* **Pending**: The default state for new users awaiting admin approval.

## Invite a Team Member

Seat limits are determined by your active subscription plan.

1. Navigate to the **Admin Dashboard** and select the **Users** tab.
2. Click **Invite User**.
3. Enter the user's email address and assign a role (Writer or System Administrator).
4. Click **Invite**.

> **Note**: The number of available seats depends on your subscription plan. Check the "Seats Used" indicator on the Users tab.

## Update User Roles

1.  Locate the user in the **Organization Team** list.
2.  In the **Actions** column, select the new role from the dropdown menu.
3.  Click **Update**.

## Expand Seat Limits

If your organization requires additional writers on a Pro or Annual plan, you can purchase seat add-ons dynamically. Enterprise's seat limit (up to 25) is fixed and not expandable via add-on.

1. Navigate to the **Users** tab.
2. Under **Team Seats**, click **Add Seat ($4.99/mo)**.
3. Complete the checkout process via Paddle to immediately increase your user limit.

## Cancel a Pending Invitation

If you invited someone by mistake, or plans changed before they accepted:

1. Locate the invitation in the **Pending Invitations** list.
2. Click **Cancel**.

This frees up the seat the invitation was holding.

## Remove a User

To revoke access, remove the user from your organization directly - no need to contact support:

1. Locate the user in the **Organization Team** list.
2. In the **Actions** column, click **Remove**.
3. Confirm the removal.

The user keeps their SudoDocs account (so re-inviting the same email later works normally) but immediately loses access to your organization, including any API keys they'd generated. You can't remove yourself this way - log out instead, or have another administrator remove you.

If Enterprise SSO is enabled for your domain, also remove the user from your identity provider to prevent them from being re-provisioned automatically the next time they sign in.

See [CLI Tasks → Users](../cli-guide/users.md) for the command-line equivalent of every action on this page.