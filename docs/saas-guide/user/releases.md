# Manage Releases

A release groups the work for one version of your product. Anything any tool produces - feature drafts, release notes, captures, conversions, Assistant chats, API scans, diagrams and Docflows - can be tagged with a release, and with the writer responsible for it.

## Create a Release

You can create a release in any of these places:

* **On the Workspace:** click **New Release** at the top. Enter a **Release Name**, and optionally a **Target Date** and **Build Number**, then click **Create**. Its Release Dashboard opens.
* **While tagging:** choose **+ New release...** in any release list - on the Feature Author or Release Composer form, or in the **Tag** dialog - and type a name.
* **In Docflows:** type a new name in **Target Release** when you assign a suggestion.

## Tag Work with a Release and a Writer

Every tool has a history list on the left. Each item in it can carry two tags:

* **Release**: the release the item belongs to.
* **Writer**: the team member responsible for it. New items get their creator as the writer; you can change or clear it.

Tags never limit who can see an item. An item stays in its tool whether or not it's tagged; tagging also makes it show up for that release.

To tag an item, hover over it in the tool's history list and click the tag icon. Pick a release and a writer (or **No release** / **No writer**), then click **Save**. The tags show under the item's title.

Hover over an item to also **Rename** it (pencil icon) or **Delete** it (trash icon).

To see only some items, use **Show in history** above a tool's history list: **Everything**, **Not tagged to a release**, or one release. It only filters the list; it doesn't change any item or the form.

:::note
DocOps Assistant chats are private: only the person who started a chat sees it, so only they can tag, rename or delete it.
:::

## Track Work and Pull Requests

Every item except Assistant chats has a work status:

| Status | Meaning |
|---|---|
| **To do** | Not started. New Docflows suggestions start here. |
| **In progress** | Being worked on. New items start here. |
| **In review** | Waiting for review - usually a pull request is open. |
| **Blocked** | Can't move forward. Add a reason so others know why. |
| **Done** | Finished. A merged pull request moves an item here. |
| **Rejected** | Dropped, or its pull request was closed without merging. |

The status shows as a badge on the item in its tool's history list. To change it, hover over the item, click the tag icon, and pick a **Status** in **Status and tags**.

Only an item's writer or a System Administrator can change its status. To work on an item that isn't yours, make yourself its writer in the same dialog, then change the status - both save together.

Some statuses change on their own:

* **Author a Feature**: the draft is **In progress** while the review pipeline works on it, and **In review** once it's ready for your technical review.
* **Docflows**: assigning a suggestion moves it to **In progress**; dismissing it moves it to **Rejected**.
* **Pull requests**: when SudoDocs opens a pull request for an item (Author a Feature's **Open Pull Request**, Docflows' **Push PR**, or **Push to Git** on a draft or release notes), the item moves to **In review** and SudoDocs follows the pull request on GitHub:

| On GitHub | In SudoDocs |
|---|---|
| Pull request open, no review yet | **In review**, badge **PR open** |
| A reviewer requested changes | **In review**, badge **Changes requested** |
| Approved | **In review**, badge **Ready to merge** |
| Merged | **Done** |
| Closed without merging | **Rejected** |

Click the pull request badge to open the pull request on GitHub and see the review comments. GitHub emails you about reviews as usual; SudoDocs doesn't send its own emails.

SudoDocs checks open pull requests every 15 minutes. If your administrator has set up a webhook for the docs repository, updates arrive within seconds - see [Connect Repositories](../admin/connect-repos.md#track-pull-request-reviews).

## Open a Release Dashboard

Click **Release Dashboard** at the top of the Workspace, then pick the release in the list on the left. A new release opens its Release Dashboard as soon as you create it. It leads with the **Release timeline** - where the release stands against its target date, every date change and how much work is done - then each writer's work, what needs attention and a board for moving work along - see [Dashboards](dashboards.md). It also links to Feature Author and Release Composer filtered to that release, and shows the Docflows assigned to it (see [Assigned Docflows](assign-pr.md)).

For all releases at once, click **Overall** in that list - it's what **Release Dashboard** opens first.

## Edit a Release, Move Its Date, or Mark It Released

At the top of the Release Dashboard, next to the release's name:

* Click **Edit release** to change its name, **Target date** or build number. If you move the date, add a reason - it's kept in the timeline's **Date changes**. The first target date is kept too, so the timeline shows "First planned for" the original. You can also hover over the release in the list on the left and click the pencil icon.
* When the release ships, click **Mark as released**, check the date (it defaults to today) and click **Mark as released** in the dialog. The timeline then says whether it shipped on time, early or late. Click **Reopen** if you marked it by mistake.

Renames, build changes and releases also appear in the dashboard's **Recent activity**.

Writers and System Administrators can both edit releases.

## Delete a Release

Hover over the release in the list on the left of the Release Dashboard and click the trash icon, then confirm.

Deleting a release doesn't delete any work. Everything tagged with it stays in its tool and just loses the release tag.

## Links from Before Releases Were Renamed

Releases used to be called projects. Old links that contain `/project/` still work and open the same page under `/release/`.

To manage releases and tags from a terminal or CI pipeline, see [CLI Tasks → Manage Releases](../../cli-guide/user/releases.md) and [CLI Tasks → Tool Items and Tags](../../cli-guide/user/items.md).
