# Technical Drift Audit (Deprecated)

> **Note:** This feature has been deprecated.

The standalone Technical Drift Audit feature has been superseded by the new **Doc PR Inbox**.

The functionality for comparing source code against documentation is now integrated into the automated suggestion workflow for incoming code pull requests. This provides a more proactive and real-time approach to preventing documentation drift.

### 🔄 Latest Engineering Updates

The documentation should be updated to reflect the specific user-facing changes implemented for the deprecation of the Technical Drift Audit feature.

- The user interface at `/workspace/audit` has been removed. Users attempting to navigate to this URL will now see a message stating, "The Doc Drift feature has been upgraded. Please use the new Doc PR Inbox," and will be automatically redirected to the main workspace.
- The associated API endpoints for running (`/workspace/audit/run`), saving (`/workspace/audit/save`), and deleting (`/workspace/audit/delete`) audit reports have been disabled. They will no longer perform any action and will return an error or redirect.