---
title: Helm charts
description: Register a Helm chart, check it, write missing value descriptions with AI, and publish a Helm reference on your docs site.
---

# Helm charts

A Helm chart is a source of documentation, like an OpenAPI spec: you register it once, SudoDocs checks it, and it can appear on your published site as a **Helm reference** with one table per group of values.

You find it under **API Specs** in the left menu, with the switch under the page title: **API specs | Helm charts**.

## Register a chart (administrators)

1. Open **API Specs** and choose **Helm charts**.
2. Click **Find charts in a repository** to list the `Chart.yaml` files of a connected repository (subcharts, `node_modules` and `vendor` folders are skipped), then add the one you want. Or click **Add chart** and enter the repository, the branch and the chart folder (leave it empty for the top folder).
3. SudoDocs reads the chart and shows its version, how many values it has, and how many have no description.

Only GitHub repositories you connected are read. Packaged charts (`.tgz`), OCI registries and Artifact Hub are not supported yet.

## Checks

**Check charts** runs the checks on every chart that has checking on. A result opens as a page you can download as a Markdown report, and every earlier result is in **History**. **Errors** stop publishing, **warnings** should be fixed, and **notes** are optional. The checks are free.

| Check | What it finds |
|---|---|
| H01 | `values.yaml` is not valid YAML (error) |
| H02 | `Chart.yaml` is missing or invalid: `apiVersion`, name, a semantic version, type |
| H03 | A value has no description |
| H04 | `values.yaml` and `values.schema.json` disagree: type, allowed values, minimum, maximum, pattern, or keys missing from either |
| H05 | A template reads a value that `values.yaml` does not define |
| H06 | A value that no template reads |
| H07 | A value that looks like a secret (password, token, key) has a default |
| H08 | An image tag is `latest` |
| H09 | No `README.md`, or an empty `resources` |
| H10 | The values changed but the chart version did not |
| H11 | A subchart has no section in `values.yaml` |
| H12 | A dependency is not pinned or has no repository |
| H13 | A value changed type (an error: it breaks installs) or disappeared since the last check |

SudoDocs reads the files only; it does not run `helm`. A value read through a template variable, `with` or `range` may be reported as unused.

## Descriptions with AI

On a result, **Suggest descriptions** writes one sentence for each value that has none (up to 25). It uses only the chart's own files: the value's name, type, default and the template lines that read it. A sentence that adds a number or a name that is not in those files is dropped. It costs one credit for each value that gets a description.

You choose which sentences to keep, see the difference, and then **Open pull request**, which adds only `# -- ...` comment lines to `values.yaml`, or download the file.

## Publish a Helm reference

1. On the chart's row, administrators click **Publish**. A check without errors is needed; SudoDocs runs one first.
2. Open **Publish**, choose the site, then **Sources > API and Helm** and turn on **Helm reference tab** for the site.

Each published chart gets a page with its version, its dependencies and one table per top-level key (value, type, default, description), with a link to every value and the default `values.yaml`. The pages are in the site's search, `llms.txt`, Markdown copies, the MCP server and Ask AI like any other page.

If a chart breaks later, the earlier good page stays and the build says so. A chart with errors is never published. Plans: one chart on Basic, ten on Pro, no limit on Enterprise.

## Write the descriptions in Author mode

For a registered chart, Writers can edit `Chart.yaml`, `values.yaml` and `values.schema.json` in [Author mode](../user/author-mode.md) (the templates stay locked). **Problems** shows the checks for the open file, the preview is the chart's reference page drawn from what you type, and **Insert > Describe the values (form)** is a form for the descriptions.

## Review a check

A check can be [reviewed](../user/reviews.md) like other items: comment on a finding, a line or a file, and ask for a verdict.

## From the command line

See [Helm charts commands](../../cli-guide/user/helm-charts.md).
