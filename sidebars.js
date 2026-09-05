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
        'admin-guide/llm-provider',
        'admin-guide/settings',
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
        'user-guide/feature-author-vs-docflows',
        'user-guide/doc-drift',
        'user-guide/diagram-gen',
        'user-guide/api-readiness',
        'user-guide/release-composer',
        'user-guide/feature-author',
        'user-guide/assign-pr',
      ],
    },

    /* -------------------------------------------------------
       3. CLI GUIDE SECTION (Enterprise) - mirrors Admin Tasks
          and User Tasks 1:1, one page per dashboard equivalent
       ------------------------------------------------------- */
    {
      type: 'category',
      label: '💻 CLI Tasks',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'cli-guide/index',
      },
      items: [
        'cli-guide/connect-repos',
        'cli-guide/doc-drift',
        'cli-guide/kb-config',
        'cli-guide/doc-team-roles',
        'cli-guide/users',
        'cli-guide/integrations',
        'cli-guide/sso-setup',
        'cli-guide/llm-provider',
        'cli-guide/settings',
        'cli-guide/converter',
        'cli-guide/release-composer',
      ],
    },
  ],
};

module.exports = sidebars; // Use module.exports for CommonJS
