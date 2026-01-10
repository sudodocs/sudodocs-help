# Generate Reference Docs

This tool converts structured configuration files into readable Markdown reference tables. It is ideal for documenting configuration options or API parameters without manual formatting.

## Supported Formats

* **OpenAPI / Swagger**: JSON or YAML specification files.
* **Helm Charts**: `values.yaml` files for Kubernetes deployments.

## Generating a Document

1.  On the **Project Dashboard**, click **Generate** on the **Generate Reference Doc** card.
2.  Enter a **Document Title** (e.g., ""Helm Chart Configuration"").
3.  Select the **Source Type** (OpenAPI or Helm).
4.  Provide the source content:
    * **Upload File**: Upload a local `.yaml` or `.json` file.
    * **URL**: Provide a raw URL to a file hosted on GitHub or another server.
5.  Click **Generate Documentation**.

## Output

The system generates a formatted Markdown document containing tables for parameters, types, descriptions, and default values. You can view, edit, and export this document from the sidebar history.
