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

The Diagram Generator is also seamlessly integrated into the feature authoring workflow. When creating a new feature draft, users can check the **Generate Architecture Diagram** option.  

* Mode A (Auto): The AI automatically generates a feature flow diagram based on the Jira ticket and codebase context.  * Mode B (Update): Users can upload an existing system diagram, and the AI will redraw it to visually incorporate the new feature updates.  

## AI Credit Costs

* Generating a diagram using only a text description costs `1` AI Credit.  
* Generating a diagram using an attached reference image costs `2` AI Credits. 