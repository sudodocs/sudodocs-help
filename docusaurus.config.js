// @ts-check
// Note: We use 'require' instead of 'import' to avoid syntax errors
const prismThemes = require('prism-react-renderer').themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SudoDocs Help',
  tagline: 'Documentation Workflow, Automated!',
  // Single icon works for both themes - no light/dark variants needed.
  favicon: 'img/favicon.ico',

  // 1. Font Loader
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ],

  // 2. Production URL
  url: 'https://docs.sudodocs.com',
  baseUrl: '/',

  // 3. GitHub Deployment Config
  organizationName: 'sudodocs',
  projectName: 'sudodocs-help',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {tagName: 'link', attributes: {rel: 'llms-txt', href: '/llms.txt'}},
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** Built at compile time into a static index: no external service. */
      ({
        hashed: true,
        docsRouteBasePath: '/docs',
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sudodocs/sudodocs-help/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          ignorePatterns: ['/404.html'],
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // The old /saas-guide and /cli-guide landing pages are now tabs; the
        // CLI's README and PyPI page still link to /cli-guide.
        redirects: [
          {from: '/saas-guide', to: '/docs/saas-guide/overview'},
          {from: '/cli-guide', to: '/docs/cli-guide/getting-started'},
          {from: '/docs/whats-new', to: '/docs/changelog'},
        ],
      },
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteTitle: 'SudoDocs Help',
        siteDescription: 'Automates the documentation workflows for technical writers and lean product teams.',
        content: {
          enableLlmsFullTxt: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sudodocs-social-card.png',
      navbar: {
        title: 'SudoDocs',
        logo: {
          alt: 'SudoDocs Logo',
          src: 'img/logo.png',
        },
        items: [
          // Top-level tabs: each opens its own sidebar and stays highlighted
          // while you're anywhere inside it.
          {type: 'docSidebar', sidebarId: 'saasSidebar', label: 'Guides', position: 'left'},
          {type: 'docSidebar', sidebarId: 'cliSidebar', label: 'CLI & API', position: 'left'},
          {type: 'doc', docId: 'changelog', label: 'Changelog', position: 'left'},
          {type: 'search', position: 'right'},
          {href: 'https://app.sudodocs.com', label: 'Go to App', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Guides', to: '/docs/saas-guide/overview'},
              {label: 'CLI & API', to: '/docs/cli-guide/getting-started'},
              {label: 'Changelog', to: '/docs/changelog'},
              {label: 'llms.txt', href: 'https://docs.sudodocs.com/llms.txt'},
            ],
          },
          {
            title: 'SudoDocs',
            items: [
              {label: 'Go to App', href: 'https://app.sudodocs.com'},
              {label: 'Pricing', href: 'https://sudodocs.com/#pricing'},
              {label: 'Blog', href: 'https://hackernoon.com/u/sudodocs'},
              {label: 'SudoDocs TV', href: 'https://youtube.com/@sudodocs-tv'},
              {label: 'Docs on GitHub', href: 'https://github.com/sudodocs/sudodocs-help'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Terms of Service', href: 'https://sudodocs.com/terms'},
              {label: 'Privacy Policy', href: 'https://sudodocs.com/privacy'},
              {label: 'Refund Policy', href: 'https://sudodocs.com/refund.html'},
              {label: 'Contact', href: 'mailto:admin@sudodocs.com'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SudoDocs. <a class="footer-agent-score" href="https://buildwithfern.com/agent-score" target="_blank" rel="noopener noreferrer" title="100% Fern Agent Score"><img src="https://img.shields.io/badge/Fern_Agent_Score-100%25-0891b2?style=flat-square" alt="100% Fern Agent Score" height="20" /></a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
