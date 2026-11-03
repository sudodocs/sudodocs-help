---
title: Custom domains
description: Serve your docs on your own domain, such as docs.company.com.
---

# Custom domains

Pro and Enterprise sites can be served on your own domain. In **Admin Dashboard > Publish > Settings**, under **Custom domain**:

1. Enter the domain (for example `docs.company.com`) and press **Add**.
2. Create the DNS record SudoDocs shows you at your domain provider.
3. Press **Check**. SudoDocs verifies the record and, when it is right, issues the certificate. This can take a few minutes.
4. Choose which address is the **primary** one. Readers who arrive on the other address are sent to it.

HTTPS is automatic. If you remove a domain, the site stays on its `sudodocs.app` address.

Pro includes 3 custom domains and Enterprise 25. Basic sites use their `sudodocs.app` address.

The CLI manages the same thing: [`sudodocs publish domain`](../../cli-guide/user/publish.md#custom-domains).
