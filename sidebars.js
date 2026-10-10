/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// One sidebar per navbar tab: Guides (saasSidebar) and CLI & API (cliSidebar).
const sidebars = {
  saasSidebar: [
    'saas-guide/overview',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: ['saas-guide/user/sign-in', 'saas-guide/user/profile-security'],
    },
    {
      type: 'category',
      label: 'Admin Tasks',
      collapsed: true,
      link: {type: 'doc', id: 'saas-guide/admin/index'},
      items: [
        'saas-guide/admin/connect-repos',
        'saas-guide/admin/doc-drift',
        'saas-guide/admin/kb-config',
        'saas-guide/admin/api-specs',
        'saas-guide/admin/doc-team-roles',
        'saas-guide/admin/users',
        'saas-guide/admin/integrations',
        'saas-guide/admin/sso-setup',
        'saas-guide/admin/llm-provider',
        'saas-guide/admin/settings',
        'saas-guide/admin/plans',
      ],
    },
    {
      type: 'category',
      label: 'User Tasks',
      collapsed: false,
      link: {type: 'doc', id: 'saas-guide/user/index'},
      items: [
        'saas-guide/user/chat',
        'saas-guide/user/converter',
        'saas-guide/user/feature-author-vs-docflows',
        'saas-guide/user/doc-drift',
        'saas-guide/user/diagram-gen',
        'saas-guide/user/api-readiness',
        'saas-guide/user/capture',
        'saas-guide/user/releases',
        'saas-guide/user/dashboards',
        'saas-guide/user/release-composer',
        'saas-guide/user/feature-author',
        'saas-guide/user/assign-pr',
      ],
    },
  ],

  cliSidebar: [
    'cli-guide/getting-started',
    {
      type: 'category',
      label: 'Admin Tasks',
      collapsed: true,
      link: {type: 'doc', id: 'cli-guide/admin/index'},
      items: [
        'cli-guide/admin/connect-repos',
        'cli-guide/admin/doc-drift',
        'cli-guide/admin/kb-config',
        'cli-guide/admin/api-specs',
        'cli-guide/admin/doc-team-roles',
        'cli-guide/admin/users',
        'cli-guide/admin/integrations',
        'cli-guide/admin/sso-setup',
        'cli-guide/admin/llm-provider',
        'cli-guide/admin/settings',
      ],
    },
    {
      type: 'category',
      label: 'User Tasks',
      collapsed: false,
      link: {type: 'doc', id: 'cli-guide/user/index'},
      items: ['cli-guide/user/releases', 'cli-guide/user/items', 'cli-guide/user/converter', 'cli-guide/user/release-composer'],
    },
  ],
};

module.exports = sidebars;
