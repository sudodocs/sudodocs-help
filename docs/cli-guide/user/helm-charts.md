---
title: Helm charts
description: Register, check, describe and publish Helm charts from the terminal.
---

# Helm charts

CLI equivalent of [Helm charts](../../saas-guide/publish/helm-charts.md). Registering and publishing charts needs the **System Administrator** role (`sudodocs admin charts`); running checks is open to Writers (`sudodocs chart-scan`).

## Register and publish charts

```bash
sudodocs admin charts detect --repo 12                  # Chart.yaml folders found in connected repository 12
sudodocs admin charts add --repo 12 --name "Ledger chart" --path charts/ledger --branch main
sudodocs admin charts list
sudodocs admin charts show "Ledger chart"                # a chart (id or name) and what SudoDocs found in it
sudodocs admin charts read --chart "Ledger chart"        # read the chart again (free)
sudodocs admin charts update "Ledger chart" --branch release
sudodocs admin charts publish "Ledger chart"             # needs a check without errors
sudodocs admin charts unpublish "Ledger chart"
sudodocs admin charts remove "Ledger chart"
```

`--repo` is the id of a repository connected under **Admin > Repositories**. Leave out `--path` for the top folder, and use `--no-validate` to keep a chart out of the checks. Run `sudodocs admin charts COMMAND --help` for each command's options. Publishing a chart rebuilds the sites that have the **Helm reference tab** turned on.

## Check a chart and fix its descriptions

```bash
sudodocs chart-scan run                                  # check every chart with checking on, or --chart "Ledger chart"
sudodocs chart-scan list --chart "Ledger chart"
sudodocs chart-scan show 42                              # findings by file and line
sudodocs chart-scan report 42 -o report.md
sudodocs chart-scan suggest 42                           # AI descriptions for undocumented values
sudodocs chart-scan open-pr 42 --only image.tag          # a pull request that adds the proposals (repeat --only, or leave it out for all)
```

`chart-scan suggest` uses credits: one for each value that gets a description, up to 25. Checks are free.

## Converting a values file

`sudodocs convert --type helm` still works for now, but it is deprecated: use the commands above instead. See [Convert a spec to docs](converter.md).
