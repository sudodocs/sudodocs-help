/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
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
        'user-guide/reference-docs',
        'user-guide/doc-drift',
        'user-guide/chat',
      ],
    },

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
        'admin-guide/sso-setup',
        'admin-guide/users',
      ],
    },

    /* -------------------------------------------------------
       3. API GUIDE SECTION
       ------------------------------------------------------- */
    /*{
      type: 'category',
      label: '⚡ API Reference',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'api/index', // Links "API Guide" text to index.md
      },
      items: [
        // Since you only have petstore.yaml for now, we leave this empty
        // or add specific sub-pages if you create them later.
      ],
    },
    */
  ],
};

module.exports = sidebars; // Use module.exports for CommonJS