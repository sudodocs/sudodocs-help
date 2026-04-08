# DocOps Assistant

The DocOps Assistant is your global Retrieval-Augmented Generation (RAG) workspace. Query your codebase, draft new topics, and enforce style guides.

## Chat Modes

Select a mode to define the AI's behavior:

* **Discuss**: Ask questions about the codebase or documentation. The AI treats code as the source of truth and cites file paths.
* **Author**: Generate net-new documentation based on your prompt and context.
* **Rewrite**: Paste an existing draft and instruct the AI to fix technical gaps and reformat it.

## Multimodal Analysis

You can upload context files directly into the chat interface for the AI to analyze alongside your prompt.

* **Text Documents**: PDF, TXT, MD.
* **Visuals & Media**: JPG, PNG, MP4, MP3.

## Output Formatting

Define the exact syntax the AI uses to generate responses. SudoDocs supports:
* Markdown (`.md`)
* reStructuredText (`.rst`)
* AsciiDoc (`.adoc`)