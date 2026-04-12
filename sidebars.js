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
        'admin-guide/integrations',
        'admin-guide/kb-config',
        'admin-guide/doc-drift',
        'admin-guide/sso-setup',
        'admin-guide/users',
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
        'user-guide/release-composer',
        'user-guide/single-note',
        'user-guide/feature-author',
        'user-guide/api-readiness',
        'user-guide/doc-drift',
        'user-guide/chat',
        'user-guide/converter',
      ],
    },
  ],
};

module.exports = sidebars; // Use module.exports for CommonJS
