# Assigned Doc PRs

The Assigned Doc PRs module within the Project Dashboard is where your documentation team reviews, edits, and finalizes AI-generated documentation drafts before pushing them to production. While the global **Doc PR Inbox** is used for triaging new suggestions, this module focuses strictly on the updates assigned to your specific release project.  

## View Your Assigned Queue

To see your workload for a specific release, click **View Assigned PRs** on the Project Dashboard. 

This opens a queue displaying:  

* **Source PR** & **Target File**: Links back to the original engineering pull request and displays the destination file path.  
* **Batch Updates**: If the AI detected that multiple files need updating (e.g., creating a new Markdown file and updating the navigation menu), it will be clearly marked with a **📦 BATCH UPDATE** badge.  
* **Product Tag**: The category tag assigned during triage.  

## Review & Push Workflow

Click **Review & Push** on any item to open the interactive editor modal. This interface allows you to finalize the content before it merges into your docs repository:  

* **Select Target Repo**: Choose the specific documentation repository where this update should be published.  
* **Review File Actions**: For batch updates, you will see a list of all affected files, each tagged with their respective action (e.g., **✨ CREATE** for new files or **✏️ UPDATE** for existing ones).  
* **Draft Editor**: Manually refine the AI-generated Markdown, reStructuredText, or AsciiDoc content inside the text area. You can save your progress at any time by clicking **Save Draft**. 

## Manage Engineering Changes

If an engineer pushes new commits to their Pull Request after the AI has already generated your documentation draft, you do not need to start over:

* Sync Latest Code: Click this button to fetch the newest code changes from GitHub. The AI will use GraphRAG to analyze the delta and automatically append a **### 🔄 Latest Engineering Updates** section to the bottom of your editor, summarizing the missing details without overwriting your manual edits.  

## Finalize the Update

* **Push PR**: Once you are satisfied with the draft, click **Push PR**. SudoDocs will automatically create a new branch, commit your edited files, and open a Pull Request directly in your documentation repository.  
* **Dismiss**: If the documentation update is no longer relevant to this release, click **Dismiss** to permanently remove it from your project's assigned list.