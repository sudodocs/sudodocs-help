# Profile & Security

Manage your own sign-in settings from the **Profile & security** page. Every member has one, whatever their role.

To open it, click your initials in the top-right corner, then **Profile & security**. The same menu shows which email and organization you're signed in to, links System Administrators to **Admin settings**, and has **Sign out**.

> **Note**: These settings are about you. Settings for the whole organization - subscription, API keys, deleting the organization - are on the Admin Dashboard's [Organization](../admin/settings.md) tab.

## Change Your Name

Under **Profile**, edit **Name** and click **Save**.

## Set or Change Your Password

**Sign-in methods** shows whether you have a password and whether Google is linked.

* **If you have a password**: enter your current password and the new one twice, then click **Change password**. You stay signed in here; every other device is signed out.
* **If you only use Google**: click **Set a password**. SudoDocs emails you a link to choose one. Afterwards you can sign in either way.

New passwords follow the [password rules](sign-in.md#password-rules).

## Two-Factor Authentication

Two-factor authentication adds a 6-digit code from an authenticator app on your phone to every password sign-in. It's optional for most members and required for System Administrators, or for everyone if your organization's [sign-in policy](../admin/users.md#set-the-sign-in-policy) says so.

### Turn It On

1. In the **Two-factor authentication** card, click **Set up**.
2. Scan the QR code with an authenticator app, such as Google Authenticator, Microsoft Authenticator, 1Password, or Authy. If you can't scan it, click **Can't scan? Enter this key instead** and type the key into the app.
3. Enter the 6-digit code the app shows and click **Turn on two-factor authentication**.
4. Save the 10 recovery codes that appear: click **Download** or **Copy**, store them in a password manager or somewhere safe (not your email), then click **I've saved them, continue**.

The codes are shown only once. Each one signs you in once if you lose your phone.

> **Note**: Some authenticator apps, including Authy and Google Authenticator, show a generic icon for SudoDocs. That's normal - the codes work the same.

### Manage It

In the **Two-factor authentication** card, click **Manage**. Enter a current code from your app (or a recovery code), then choose one of the following:

* **Create new recovery codes**: replaces your codes. The old ones stop working immediately.
* **Move to a new phone or app**: removes your current authenticator and old recovery codes right away, then shows a new QR code. Have the new phone ready and finish the setup before leaving the page.
* **Turn off two-factor authentication**: not available if two-factor is required for you.

The card also shows how many recovery codes you have left. Create new ones before you run out.

## Sign Out Other Devices

If you signed in on a shared or lost device, click **Sign out other devices**. Every session except the one you're using ends immediately.

## Recent Sign-In Activity

The bottom of the page lists your recent sign-ins and failed attempts, with the method, result, and IP address. If you don't recognize something, change your password and sign out other devices.
