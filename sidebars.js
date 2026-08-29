/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    /* -------------------------------------------------------
       2. ADMIN GUIDE SECTION
       ------------------------------------------------------- */
    {
      type: 'category',
      label: '⚙️ Admin Tasks',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'admin-guide/index', // Links "Admin Guide" text to index.md
      },
      items: [
        'admin-guide/connect-repos',
        'admin-guide/doc-drift',
        'admin-guide/kb-config',
        'admin-guide/doc-team-roles',
        'admin-guide/users',
        'admin-guide/integrations',
        'admin-guide/sso-setup',
        'admin-guide/settings',
        'admin-guide/cli-headless-api',
      ],
    },

    /* -------------------------------------------------------
       1. USER GUIDE SECTION
       ------------------------------------------------------- */
    {
      type: 'category',
      label: '👤 User Tasks',
      collapsible: true,
      collapsed: false, // Keep open by default (optional)
      link: {
        type: 'doc',
        id: 'user-guide/index', // This links the "User Guide" text to index.md
      },
      items: [
        // The list below defines the EXACT order of topics
        'user-guide/chat',
        'user-guide/converter',
        'user-guide/doc-drift',
        'user-guide/diagram-gen',
        'user-guide/api-readiness',
        'user-guide/release-composer',
        'user-guide/feature-author',
        'user-guide/assign-pr',
      ],
    },
  ],
};

module.exports = sidebars; // Use module.exports for CommonJS
