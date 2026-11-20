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
