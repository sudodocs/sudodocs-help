# Manage Users and Roles

Manage team access and role-based permissions for your SudoDocs organization.

## User Roles

SudoDocs utilizes Role-Based Access Control (RBAC) to secure your documentation environments. 

* **System Administrator**: Full access to repository integrations, Single Sign-On (SSO) configurations, and global knowledge base settings.
* **Writer**: Access to workspaces, release dashboards, and the DocOps Assistant.
* **Walkthrough Auditor**: Can view and edit [Capture](../user/capture.md) walkthroughs, generate voiceovers, and export video. Lands on Capture after signing in, and doesn't get Writer access to the other tools.
* **Pending**: The default state for new users awaiting admin approval.

## Invite a Team Member

Seat limits are determined by your active subscription plan.

1. Navigate to the **Admin Dashboard** and select the **Users** tab.
2. Click **Invite User**.
3. Enter the user's email address and assign a role (Writer, Walkthrough Auditor, or System Administrator).
4. Click **Invite**.

The invitee gets an email with a link. They can join with **Continue with Google** or by creating a SudoDocs password - see [Accept an Invitation](../user/sign-in.md#accept-an-invitation).

If the email already belongs to a SudoDocs account, that person is added to your organization right away - no invitation to accept.

> **Note**: The number of available seats depends on your subscription plan. Check the **Team Seats** indicator on the Users tab.

## Update User Roles

1.  Locate the user in the **Organization Team** list.
2.  In the **Actions** column, open the **Change...** menu and select the new role. The change applies immediately - if the user is signed in, on their next click.

Other System Administrators' roles can't be changed from this list, and they can't be removed here.

## See How Members Sign In

The **Sign-in** column shows, for each member:

* **2FA on**: they use two-factor authentication.
* **2FA pending**: two-factor is required for them (System Administrators, or everyone under your [sign-in policy](#set-the-sign-in-policy)) but not set up yet. They're asked to set it up at their next password sign-in.
* **Disabled**: they can't sign in until you enable them.
* **Last**: the date and method of their last sign-in (Password, Google, SSO, or Email link).

## Manage a Member's Sign-In

Open the **Sign-in...** menu in a member's row and choose an action. Each one asks you to confirm first.

| Action | What happens |
|---|---|
| **Send password reset** | Emails them a link to choose a new password. Also how a Google-only member gets a password. |
| **Reset two-factor** | Removes their authenticator and recovery codes, for example after they lose their phone. If two-factor is required for them, they set it up again at their next password sign-in. |
| **Sign out everywhere** | Ends every session they have, on every device. |
| **Disable account** | Signs them out now and blocks sign-in until you choose **Enable account**. Their seat, role, and work are kept. |

You can't use these on your own account - use [Profile & security](../user/profile-security.md) instead.

## Set the Sign-In Policy

The **Sign-in policy** card controls how members of your organization sign in:

* **Email and password**, **Google**, **Company SSO**: the methods members may use. Clear a box to turn that method off; anyone who tries it is told which methods are allowed.
* **Require two-factor for everyone (password sign-ins)**: extends the two-factor requirement from administrators to every member.

Click **Save policy**.

> **Note**: System Administrators always need two-factor authentication for password sign-ins, whatever the policy says. Google and SSO sign-ins don't ask for a SudoDocs code, because Google or your identity provider handles that step.

## Expand Seat Limits

If your organization requires additional writers on a Pro, Annual or Enterprise plan, you can purchase seat add-ons dynamically. Enterprise includes 25 seats and can add more, up to 100 in total.

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

The user keeps their SudoDocs account (so re-inviting the same email later works normally) but immediately loses access to your organization - including in any browser where they're signed in, and any API keys they'd generated. You can't remove yourself this way - sign out instead, or have another administrator remove you.

If Enterprise SSO is enabled for your domain, also remove the user from your identity provider to prevent them from being re-provisioned automatically the next time they sign in.

See [CLI Tasks → Users](../../cli-guide/admin/users.md) for the command-line equivalent of every action on this page.