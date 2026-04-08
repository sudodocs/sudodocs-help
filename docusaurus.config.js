// @ts-check
// Note: We use 'require' instead of 'import' to avoid syntax errors
const prismThemes = require('prism-react-renderer').themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SudoDocs Help',
  tagline: 'Documentation Workflow, Automated!',
  favicon: 'img/favicon.ico',

  // 1. Font Loader
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
  ],

  // 2. Production URL
  url: 'https://docs.sudodocs.com',
  baseUrl: '/',

  // 3. GitHub Deployment Config
  organizationName: 'sudodocs', 
  projectName: 'sudodocs-help', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sudodocs/sudodocs-help/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sudodocs/sudodocs-help/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        content: {
          enableLlmsFullTxt: true, // This enables the full-text generation
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
          src: 'img/Light-Logo.svg',
          srcDark: 'img/Dark-Logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://app.sudodocs.com',
            label: 'Go to App',
            position: 'right',
          },
          // GitHub Icon
          {
            href: 'https://github.com/sudodocs/sudodocs-help',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // YouTube Icon
          {
            href: 'https://youtube.com/@sudodocs-tv',
            position: 'right',
            className: 'header-youtube-link',
            'aria-label': 'SudoDocs TV',
          },
        ],
      },
      footer: {
        style: 'dark', 
        links: [], // Empty array = No links, no columns
        copyright: `Copyright © ${new Date().getFullYear()} SudoDocs by Saurabh Sugandh.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;