# Diagram Generator

The Diagram Generator is an AI-powered tool that allows users to instantly build brand-compliant Mermaid.js sequence diagrams. By analyzing natural language descriptions or visual reference images, the tool generates raw Mermaid code, renders a live preview, and offers automatic syntax repair.

**Key Capabilities**

* Generates valid `Mermaid.js` sequence diagrams based on text descriptions.  
* Analyzes uploaded reference images (`.jpg`, `.jpeg`, `.png`, `.webp`) to map out corresponding architectural sequences.  
* Enforces company-specific terminology by applying custom **Neural Style Overrides** during generation.  
* Sanitizes generated code automatically by fixing literal newlines, converting self-loops to standard notes, and neutralizing angle brackets.  
* Detects Mermaid syntax errors during rendering and automatically sends the broken code and error message back to the AI for immediate repair.  

## Use the Global Diagrammer

1. Navigate to the **Diagram Generator** from the Workspace dashboard under **Global Tools**.  
2. Describe your architecture or workflow in the text area provided.  
3. Optionally, upload a reference image to guide the AI generation.  
4. Click **Generate Code** to instruct the AI to build the sequence.  
5. Click **Render** to view the live preview of your diagram.  

## Export and Download Options

Once a diagram is successfully generated and rendered, users can export it in multiple formats:

* Copy Code: Copies the raw, sanitized Mermaid syntax directly to your clipboard.  
* Download `.mmd`: Saves the raw Mermaid code as a `.mmd` file.  
* Download SVG: Downloads the rendered diagram as a scalable `.svg` image file.  

## Feature Draft Integration

The same generation logic is also built into [Author a Feature](feature-author.md), reused rather than duplicated:

* **Automatic**: The Information Architect decides on its own whether the feature is significant enough to warrant a diagram, and generates one if so - no action needed from you.
* **Manual override**: Check **Generate Architecture Diagram** when creating the draft to force one regardless of the Information Architect's own judgment.
* **Update, not just create**: If the target file already contains a diagram, SudoDocs updates it in place - preserving what's still accurate and incorporating the new feature - instead of always starting from scratch. You can also upload a reference image of an existing diagram; the AI redraws its logic as Mermaid, incorporating the new feature.

## Docflows Integration

[Docflows](doc-drift.md) uses this same generation logic too, fully automatically - there's no checkbox, since Docflows has no manual initiation step at all. If the Information Architect judges a suggestion significant enough, it generates or updates a diagram for the most relevant file as part of the same automated review that produces the rest of the suggestion.

## AI Credit Costs

* Using the standalone Diagram Generator (this page): `1` AI Credit for a text-only description, `2` AI Credits with an attached reference image.
* A diagram generated as part of an Author a Feature draft is included in that draft's overall credit cost - not charged separately.
* A diagram generated as part of a Docflows suggestion adds a small additional charge on top of that suggestion's base cost, only when one is actually generated.