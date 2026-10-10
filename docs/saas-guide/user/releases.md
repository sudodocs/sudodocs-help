# Manage Releases

A release groups the work for one version of your product. Anything any tool produces - feature drafts, release notes, captures, conversions, Assistant chats, API scans, diagrams and Docflows - can be tagged with a release, and with the writer responsible for it.

## Create a Release

You can create a release in any of these places:

* **On the Workspace:** click **New Release** (or the **New Release** card under **Releases**). Enter a **Release Name**, and optionally a **Target Date** and **Build Number**, then click **Create**.
* **While tagging:** choose **+ New release...** in any release list - on the Feature Author or Release Composer form, or in the **Tag** dialog - and type a name.
* **In Docflows:** type a new name in **Target Release** when you assign a suggestion.

## Tag Work with a Release and a Writer

Every tool has a history list on the left. Each item in it can carry two tags:

* **Release**: the release the item belongs to.
* **Writer**: the team member responsible for it. New items get their creator as the writer; you can change or clear it.

Tags never limit who can see an item. An item stays in its tool whether or not it's tagged; tagging also makes it show up for that release.

To tag an item, hover over it in the tool's history list and click the tag icon. Pick a release and a writer (or **No release** / **No writer**), then click **Save**. The tags show under the item's title.

Hover over an item to also **Rename** it (pencil icon) or **Delete** it (trash icon).

To see only some items, use the release list above a tool's history: **All releases**, **No release** for untagged items, or a specific release.

:::note
DocOps Assistant chats are private: only the person who started a chat sees it, so only they can tag, rename or delete it.
:::

## Open a Release Dashboard

Under **Releases** on the Workspace, click **Open** on a release. Its Release Dashboard links to Feature Author and Release Composer filtered to that release, and shows the Docflows assigned to it (see [Assigned Docflows](assign-pr.md)).

## Delete a Release

Click **Delete** on the release under **Releases** on the Workspace, then confirm.

Deleting a release doesn't delete any work. Everything tagged with it stays in its tool and just loses the release tag.

## Links from Before Releases Were Renamed

Releases used to be called projects. Old links that contain `/project/` still work and open the same page under `/release/`.

To manage releases and tags from a terminal or CI pipeline, see [CLI Tasks → Manage Releases](../../cli-guide/user/releases.md) and [CLI Tasks → Tool Items and Tags](../../cli-guide/user/items.md).
