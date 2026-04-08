# Author a Feature

Author comprehensive feature documentation using Jira tickets, codebase context, and visual diagrams.

## 1. Import Source Context

You can import engineering context using two methods:

* **Fetch from Jira**: Enter a valid Jira ticket key (e.g., PROJ-1234) to automatically import the summary and description.
* **Start from Blank**: Manually enter the feature summary and technical details.

## 2. Generate Architecture Diagrams

SudoDocs can generate SVG architecture diagrams based on your input context.

* **Mode A (Auto)**: SudoDocs analyzes the text and codebase to generate a feature flow diagram from scratch.
* **Mode B (Update)**: Upload an existing system diagram image. SudoDocs redraws the diagram and highlights the new feature components in green.

## 3. Export Drafts

Once the AI generates the draft, you can push the content to your preferred platform.
* **Push to GDoc**: Exports the content to Google Docs, preserving headers and table formats. 
* **Push to Git**: Opens a Pull Request in your target documentation repository.
* **Download**: Export locally as Markdown, RST, AsciiDoc, or Word (.docx).