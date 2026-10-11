# Assigned Docflows

Docflows allows technical writers to review, edit, and assign automated documentation suggestions generated directly from engineering activity - a Pull Request or a Jira ticket. See [Manage Docflows](doc-drift.md) for how a suggestion is generated and reviewed before it reaches this queue.

## View Your Assigned Queue

To see your workload for a specific release, open the release from **Release Dashboard** on the Workspace (pick it in the list on the left) and click the **Docflows** button under its name. It shows how many are assigned to you, for example **Docflows: 2 for you**.

The list is grouped, with a count for each group:

* **Assigned to you** first.
* **Not assigned yet**: click **Claim** to make one yours. It stays in the release.
* **Others on this release**: assigned to other writers.

Each row shows:

* **Source PR** & **Target File**: Links back to the original engineering pull request and displays the destination file path.
* **Batch Updates**: If the AI detected that multiple files need updating (e.g., creating a new Markdown file and updating the navigation menu), it will be clearly marked with a **📦 BATCH UPDATE** badge.
* **Review Status**: A **✓ IA + Editor Reviewed** badge means the automated review found no blocking issues. A **⚠️ Editor Flagged Open Issues** badge means it didn't fully resolve everything on its own - hover the badge for what's still open, and give those specific files a closer read before pushing. See [Manage Docflows](doc-drift.md#automated-review-before-it-reaches-your-inbox) for how this review works.
* **Product Tag**: The category tag assigned during triage.
* **Writer**: who it's assigned to (**You**, a teammate, or **No writer**).
* **Screenshot Status**: If a preview environment screenshot capture failed or was unreachable, a **⚠️ No Screenshots** alert badge is displayed on the dashboard suggestion card.

## Review & Push Workflow

Click **Review & Push** on any item. Like a pull request on GitHub, you see exactly what each file will change before it reaches your docs repository:

* **Select Target Repo**: choose the documentation repository to publish to.
* **Files**: every file in the suggestion, with how many lines are added (green) and removed (red). Click a file in the list to jump to it. Images are marked **image**.
* **Changes**: each file's before and after. Removed lines are red and added lines green, with the exact words that changed highlighted. Long stretches of unchanged text are folded - click **Show N unchanged lines** to expand them.
  * **Split** shows the file before and after side by side; **Unified** shows them in one column with **+** and **−** markers. Your choice is remembered. Narrow screens always use Unified.
  * A new file shows only additions.
* **Edit**: change a file in place, in whatever format it uses (Markdown, reStructuredText, AsciiDoc, HTML, MDX or DITA XML). Tip: click a line number on the after side to start editing at that line. Switch back to **Changes** to see your edits in the diff. You can also change the file's path here. Click **Save Draft** to save at any time.
* **Reviewed**: tick it once you're happy with a file. The count at the top (for example **2 of 3 reviewed**) tracks your progress, and **Push PR** asks you to confirm if any file isn't reviewed yet.
* **Screenshots**: captured screenshots are shown as images and committed with the text when you push - into your docs repository's image folder, with each page referencing them the way your docs site expects (see [What SudoDocs Learns About a Docs Repository](../admin/connect-repos.md#what-sudodocs-learns-about-a-docs-repository)).
  * Each screenshot shows whether it was checked for personal data. If SudoDocs covered something - or couldn't check the image - it's marked **⚠**: look over the whole image and tick **Reviewed**. **Push PR** won't go ahead until every flagged screenshot is reviewed. See [How SudoDocs Takes Screenshots](../admin/doc-drift.md#how-sudodocs-takes-screenshots).
  * A screenshot that **replaces** an image already in your docs is shown next to the current one. Switch between **Side by side**, **Slider** (drag to compare) and **Highlight changes** (marks what's different).
  * A screenshot re-taken because your UI changed says so: **Re-shot the same way as before**, or why SudoDocs chose what to show now. **⚠ Needs your eyes** means it wasn't sure - check it (use **Edit** or **Retake** if needed) and tick **Reviewed**; it can't be pushed until you do.
  * When the steps before a screenshot name controls in bold, SudoDocs has already boxed (or numbered) them and cropped to them - the image says **Pointed out from the text**. Your edits start from that.
  * **Edit** opens a small editor: draw a **Box** around a control, an **Arrow**, a **Number** callout, a **Cover** over anything private, or **Crop** to the part that matters. **Undo** and **Reset** are there too; click **Done** to use the result. Your annotations stay editable - open **Edit** again to change them. Colours follow your [Screenshot Style](../admin/kb-config.md#screenshot-style).
  * **Retake** captures the page again; **Discard** drops the screenshot (a new one is also removed from the text that uses it; a replacement just leaves the current image as it is).
  * **Alt text** can be changed here; SudoDocs updates it everywhere the image is used.
  * The counter at the top shows text files and images separately, for example **Text 2/3 · Images 1/2 reviewed**.

What a file looked like before the suggestion is kept as you edit, so the comparison always shows the change against your docs repository, not against your last save.

## Manage Engineering Changes

If an engineer pushes new commits to their Pull Request after the AI has already generated your documentation draft, you do not need to start over:

* Sync Latest Code: Click this button to fetch the newest code changes from GitHub. The AI will use GraphRAG to analyze the delta and automatically append a **### 🔄 Latest Engineering Updates** section to the bottom of your editor, summarizing the missing details without overwriting your manual edits. This button only appears for PR-sourced suggestions - a Jira-sourced one has no linked commits to sync from.

## Finalize the Update

* **Push PR**: Once you are satisfied with the draft, click **Push PR**. SudoDocs will automatically create a new branch, commit your edited files, and open a Pull Request directly in your documentation repository. The suggestion moves to **In review**, and SudoDocs follows the pull request until it's merged (**Done**) or closed (**Rejected**) - see [Track work and pull requests](releases.md#track-work-and-pull-requests).
* **Dismiss**: If the documentation update is no longer relevant to this release, click **Dismiss** to permanently remove it from the release's assigned list. Its status becomes **Rejected**.