# Manage Releases

A release groups the work for one version of your product: its feature drafts, its release notes, and the Docflows assigned to it. [Author a Feature](feature-author.md) and [Compose Release Notes](release-composer.md) save their work to a release.

## Create a Release

You can create a release in either of these places:

* **On the Workspace:** click **New Release** (or the **New Release** card under **Releases**). Enter a **Release Name**, and optionally a **Target Date** and **Build Number**, then click **Create**.
* **Inside Feature Author or Release Composer:** choose **+ New Release** from the release list in the left sidebar. After you create it, the tool opens in the new release.

You can also create a release by typing a new name when you assign a Docflows suggestion or move a feature draft to another release.

## Open a Release Dashboard

Under **Releases** on the Workspace, click **Open** on a release. Its Release Dashboard links to Feature Author and Release Composer for that release, and shows the Docflows assigned to it (see [Assigned Docflows](assign-pr.md)).

## Delete a Release

Click **Delete** on the release under **Releases** on the Workspace, then confirm.

:::warning
Deleting a release also deletes its feature drafts and release notes. Docflows assigned to it are not deleted; they just lose their release.
:::

## Links from Before Releases Were Renamed

Releases used to be called projects. Old links that contain `/project/` still work and open the same page under `/release/`.

To manage releases from a terminal or CI pipeline, see [CLI Tasks → Manage Releases](../../cli-guide/user/releases.md).
