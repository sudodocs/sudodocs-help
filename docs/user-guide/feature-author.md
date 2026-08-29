# Author a Feature

Author comprehensive feature documentation from a Jira ticket, a linked engineering Pull Request, or both.

## Import Source Context

You can start a draft from any combination of the following:

* **Fetch from Jira**: Enter a valid Jira ticket key (e.g., PROJ-1234) to automatically import the summary and description.
* **Start from Blank**: Manually enter the feature summary and technical details yourself.
* **Link a PR only, no Jira ticket needed**: Under **Code Verification**, select the repository and enter the branch name, then leave **Feature Summary** blank. SudoDocs looks up that branch's open (or merged) pull request and uses its title and description as the summary - useful when the work was never tracked in Jira, or you just want to document straight from the code.

If you provide both a Jira summary and a linked branch, SudoDocs uses the Jira summary and pulls the branch's code diff in as supporting evidence. You must provide at least a Feature Summary or a linked branch - SudoDocs has nothing to draft from otherwise.

## How Your Draft Gets Reviewed

Once you submit the form, your draft doesn't go straight to a blank page - it goes through the same three-role pipeline every SudoDocs-generated draft goes through (see [Doc Team Roles](../admin-guide/doc-team-roles.md) for how your admin can customize each role):

1. **Information Architect** decides where this content belongs - a new page or an update to an existing one - and outlines the sections before any prose exists.
2. **Technical Writer** drafts against that outline.
3. **Editor** reviews the draft with fresh eyes and either approves it or sends it back to the Writer with specific feedback. This can repeat for a couple of rounds automatically before it's handed to you.

When it's done, you're redirected to the **Pipeline Review** page, showing the full history - the Information Architect's placement decision and outline, every draft the Writer produced, and every comment the Editor left (marked **blocking** or **suggestion**). If the Editor and Writer couldn't fully resolve every issue automatically, the draft is marked **Needs Human** instead, with the open issues shown so you know exactly what to look at.

## Accept, Revise, or Reject

From the Pipeline Review page, once a draft reaches **Ready For Technical Review**:

* **Approve**: Records your internal sign-off. This doesn't publish anything by itself - it's a marker that you've looked at it and it's ready to go out for the real technical review, which happens on the pull request itself.
* **Request Changes**: Send it back to the Writer with your own feedback for one more automated Writer/Editor pass.
* **Open Pull Request**: Reveals a form pre-filled with the target repository, file path (taken from the Information Architect's placement decision), and a commit message. If the change updates an existing file, you'll see a diff against the current version rather than just the raw new text. Confirm to actually push the branch and open the pull request - **the real technical review happens there, on GitHub, not inside SudoDocs.**
* **Reject**: Discards the draft. This is terminal.

If a draft lands in **Needs Human** (the Editor and Writer couldn't fully agree after a couple of automated rounds), you can send it back to the Writer with your own explicit guidance for one more attempt, approve it anyway despite the open comments, or reject it.

You can still edit the draft manually at any point - before or after approving - using the classic editor (see below). Opening the pull request always uses whatever content is currently saved, including your manual edits.

## Edit and Export from the Classic Editor

Click **Edit Draft** from the Pipeline Review page (or open a draft from the sidebar) to reach the full editor, with tabs for the draft content, the Information Architect's placement/audit notes, and any generated diagram.

* **Push to GDoc**: Exports the content to Google Docs, preserving headers and table formats.
* **Push to Git**: Opens a pull request directly from the editor, letting you type the target repository, file path, and commit message yourself - useful for re-publishing after manual edits without going back through Pipeline Review.
* **Download**: Export locally as Markdown, RST, AsciiDoc, or Word (.docx).

## Generate Architecture Diagrams

SudoDocs can generate SVG architecture diagrams based on your input context.

* **Mode A (Auto)**: SudoDocs analyzes the text and codebase to generate a feature flow diagram from scratch.
* **Mode B (Update)**: Upload an existing system diagram image. SudoDocs redraws the diagram and highlights the new feature components in green.

## Reassign to a Different Release

If a draft was created under the wrong release, or plans changed after the fact, you don't need to recreate it:

1. Open the draft in the classic editor.
2. Next to the release name under **Feature Author**, click **Reassign**.
3. Type an existing release name to move it there, or type a new name to create that release and move the draft into it.
4. Click **Move Draft**.
