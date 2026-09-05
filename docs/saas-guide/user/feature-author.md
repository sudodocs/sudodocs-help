# Author a Feature

Author comprehensive feature documentation from a Jira ticket, a linked engineering Pull Request, or both.

## Import Source Context

Choose one of four modes for **Import Source** - each reveals only the fields it needs:

* **Jira**: Type a Jira key or part of a summary into the search box. As you type, SudoDocs looks up matching issues (same idea as linking an issue inside a Jira ticket) - pick the right one from the dropdown to import its summary and description.
* **PR**: Pick a connected **Repository**, then pick one of its open or draft pull requests from the second dropdown (drafts are labeled). SudoDocs uses that PR's title and description as the summary, and pulls its code diff in as supporting evidence - no Jira ticket required.
* **Jira + PR**: Search and select a Jira issue the same way as **Jira** mode. SudoDocs then automatically looks up pull requests associated with that issue across every repository your org has connected, and lists all of them (a ticket can have more than one linked PR, e.g. a frontend and a backend change) - you still explicitly pick which one to use. If a matching PR turns up in a repository that isn't connected to SudoDocs yet, it's shown greyed out with a note to connect that repository under **Admin Dashboard > Repositories** first.
* **Start from Blank**: Manually enter the feature summary and technical details yourself - no Jira or PR link at all.

You must provide at least a Feature Summary or a linked repository/PR - SudoDocs has nothing to draft from otherwise.

Before submitting, choose a **Target Format** for the draft: Markdown, reStructuredText, AsciiDoc, HTML, MDX, or DITA XML. The Writer and Editor both follow the syntax conventions of whichever format you pick.

## How Your Draft Gets Reviewed

Once you submit the form, your draft doesn't go straight to a blank page - it goes through the same three-role pipeline every SudoDocs-generated draft goes through (see [Doc Team Roles](../admin/doc-team-roles.md) for how your admin can customize each role):

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

Every draft's Information Architect also decides whether the feature is significant enough to warrant a Mermaid architecture/sequence diagram - a new subsystem, a multi-service integration, or a complex sequence of interactions, not a minor UI tweak or a small bug fix. When it decides yes, a diagram is generated automatically alongside the outline, with no action needed from you.

You can also force one yourself: check **Generate Architecture Diagram** when creating the draft. Your request is never overridden by the Information Architect's own judgment - checking the box always produces a diagram, even for a change it wouldn't have flagged on its own.

If the target file already has a diagram in it, SudoDocs updates that diagram in place - incorporating your new feature while preserving what's still accurate - rather than always starting from scratch. You can also upload a reference image of an existing diagram (e.g. a screenshot) when creating the draft; SudoDocs redraws its logic as Mermaid, incorporating the new feature.

The diagram lives in its own tab in the classic editor, alongside a live preview (rendered from the generated Mermaid code) and options to download the raw `.mmd` source or the rendered `.svg`.

## Reassign to a Different Release

If a draft was created under the wrong release, or plans changed after the fact, you don't need to recreate it:

1. Open the draft in the classic editor.
2. Next to the release name under **Feature Author**, click **Reassign**.
3. Type an existing release name to move it there, or type a new name to create that release and move the draft into it.
4. Click **Move Draft**.
