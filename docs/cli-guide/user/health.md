---
title: Site health commands
description: Monitor public docs sites on a schedule from the terminal.
---

# Site health commands

Pro and Enterprise organizations can monitor docs sites: see [Site health](../../saas-guide/publish/site-health.md). The one-off public check is a web page; monitors can be scripted.

```bash
sudodocs health add https://docs.example.com          # start monitoring; the first check runs now
sudodocs health add https://docs.example.com --daily  # Enterprise: every day (otherwise weekly)
sudodocs health list                                  # your monitors and the result of the last check
sudodocs health show 4                                # the latest report: every finding with its severity
sudodocs health run 4                                 # check now
sudodocs health history 4 --limit 20                  # past checks, newest first
sudodocs health pause 4                               # stop the schedule (history is kept)
sudodocs health resume 4
sudodocs health alerts 4 off                          # email alerts for new problems on|off
sudodocs health remove 4                              # stop monitoring and delete the history
```

Your plan decides how many sites you can monitor and how often. A site that is already monitored cannot be added twice.

## Healing

What SudoDocs does after a scheduled check of a published site: see [Fix what Site health finds](../../saas-guide/publish/site-health-healing.md).

```bash
sudodocs publish healing docs                    # the policy and the latest runs of the site
sudodocs publish healing docs --no-auto          # stop preparing fixes after each check
sudodocs publish healing docs --ai               # include AI fixes (1 credit each, 25 a month per site)
sudodocs publish healing docs --kinds structure,links   # titles and headings, and links only (the third kind is content)
sudodocs publish healing docs --max-files 10     # at most 10 files in one pull request
sudodocs publish healing docs --no-watch         # do not monitor the site by itself
```

Without options the command shows the current policy, how many AI fixes are left this month, and the last runs with their pull requests.

