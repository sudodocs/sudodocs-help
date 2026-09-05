# Universal Converter

CLI equivalent of [User Tasks → Universal Doc Converter](../user-guide/converter.md#generate-ai-reference-docs-pro) - specifically the **API / Helm to Docs** tool. Not admin-only - available to any doc-team member, matching the underlying dashboard page. The plain format-to-format converter (Markdown ↔ RST ↔ AsciiDoc ↔ HTML ↔ Word) has no CLI equivalent yet.

## Convert a Spec to Docs

```bash
sudodocs convert openapi.yaml --type openapi --target docusaurus
sudodocs convert values.yaml --type helm --target sphinx -o docs/config-reference.rst
```

| Option | Required | Description |
|---|---|---|
| `-t`, `--type` | Yes | Source spec type: `openapi` or `helm`. |
| `--target` | No | Output format: `docusaurus` (Markdown), `sphinx` (reStructuredText), or the raw formats `md` / `rst` / `adoc`. Defaults to `docusaurus`. |
| `-o`, `--output` | No | Local file path to write the result to. Defaults to the input filename with the target's extension. |

Applies the same anti-hallucination rules as the web tool - it only extracts parameters explicitly present in your file (see [Generate AI Reference Docs](../user-guide/converter.md#generate-ai-reference-docs-pro)). The generated document is also saved to your SudoDocs workspace (visible in **AI Generated Specs** history) - the command prints a link to it alongside the local file path.

## Other Automatable Dashboard Tools

Two other Global Tools have a Headless API endpoint but no `sudodocs` command wrapping them yet - call the API directly if you need to script them:

* [API Readiness](../user-guide/api-readiness.md) - `POST /oas/validate`, body `{"run_swagger", "run_redocly", "run_ai_fix", "run_ai_content"}` (all optional booleans), runs your saved config the same as clicking **Check API Specs**.
* [Diagram Generator](../user-guide/diagram-gen.md) - `POST /diagram/generate`, `multipart/form-data` (not JSON) with a `description` field and an optional `image_file`.

## Headless API

| Endpoint | Method | Purpose |
|---|---|---|
| `/convert` | POST | `{"source_type", "content", "target_format"}` → `202 {"job_id"}`. Wrapped by `sudodocs convert`. |
| `/oas/validate` | POST | See above. Not yet wrapped by the CLI. |
| `/diagram/generate` | POST | See above. Not yet wrapped by the CLI. |
| `/jobs/{job_id}` | GET | Poll the status of a job returned by any of the above. |

All POST endpoints except `/diagram/generate` take a JSON body and return `202 {"status": "queued", "job_id": "..."}` immediately; poll `/jobs/{job_id}` until `status` is `completed` or `failed`.
