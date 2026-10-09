import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import CaptureBar from '@site/src/components/CaptureBar';
import styles from './index.module.css';

// Newest Changelog release, shown as a strip on the home page. Update it with
// every new release in docs/changelog.md (see .claude/skills/changelog).
const LATEST_UPDATE = {
  month: 'October 2026',
  summary: 'Email and password sign-in, two-factor authentication, Connect with GitHub, and the API Specs tab.',
  anchor: 'october-2026',
};

// Outline icons (Lucide, ISC licence), drawn in the current text colour.
function Icon({d, size = 22}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d.map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

const ICONS = {
  book: ['M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20'],
  terminal: ['M4 17l6-6-6-6', 'M12 19h8'],
  key: ['M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'],
  git: ['M6 3v12', 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M18 9a9 9 0 0 1-9 9'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'],
  pen: ['M12 20h9', 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'],
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  arrow: ['M5 12h14', 'M12 5l7 7-7 7'],
  sparkle: ['M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z'],
};

const GUIDES = [
  {to: '/docs/saas-guide/overview', icon: 'book', title: 'Guides',
   text: 'Set up and use SudoDocs in the web app: repositories, style guide, users and every writing tool.'},
  {to: '/docs/cli-guide/getting-started', icon: 'terminal', title: 'CLI & API',
   text: 'Automate SudoDocs from a terminal or CI/CD pipeline with the sudodocs CLI and Headless API. Enterprise plan.'},
];

const TASKS = [
  {to: '/docs/saas-guide/user/sign-in', icon: 'key', title: 'Sign in or create an account'},
  {to: '/docs/saas-guide/admin/connect-repos', icon: 'git', title: 'Connect a GitHub repository'},
  {to: '/docs/saas-guide/admin/users', icon: 'users', title: 'Invite your team'},
  {to: '/docs/saas-guide/user/profile-security', icon: 'shield', title: 'Turn on two-factor authentication'},
  {to: '/docs/saas-guide/admin/kb-config', icon: 'pen', title: 'Set up your style guide'},
  {to: '/docs/cli-guide/getting-started', icon: 'download', title: 'Install the CLI'},
];

export default function Home() {
  return (
    <Layout description="Help center for SudoDocs, the AI documentation platform for technical writers: guides for the web app, the CLI and the Headless API.">
      <header className={styles.hero}>
        <div className={styles.heroBg}><div className={styles.heroGlow} /></div>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>How can we help?</h1>
          <p className={styles.subtitle}>Guides for the SudoDocs web app, CLI and API.</p>
          <div className={styles.search}><SearchBar /></div>
        </div>
      </header>

      <main className={styles.main}>
        <Link to={`/docs/changelog#${LATEST_UPDATE.anchor}`} className={styles.update}>
          <span className={styles.updateBadge}><Icon d={ICONS.sparkle} size={14} /> New in {LATEST_UPDATE.month}</span>
          <span className={styles.updateText}>{LATEST_UPDATE.summary}</span>
          <span className={styles.updateMore}>Changelog <Icon d={ICONS.arrow} size={14} /></span>
        </Link>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Choose a guide</h2>
          <div className={styles.guides}>
            {GUIDES.map((g) => (
              <Link key={g.to} to={g.to} className={styles.guide}>
                <span className={styles.iconTile}><Icon d={ICONS[g.icon]} /></span>
                <span className={styles.guideTitle}>{g.title}</span>
                <span className={styles.guideText}>{g.text}</span>
                <span className={styles.guideMore}>Open <Icon d={ICONS.arrow} size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Popular tasks</h2>
          <div className={styles.tasks}>
            {TASKS.map((t) => (
              <Link key={t.to + t.title} to={t.to} className={styles.task}>
                <span className={styles.taskIcon}><Icon d={ICONS[t.icon]} size={18} /></span>
                {t.title}
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <CaptureBar />
        </section>
      </main>
    </Layout>
  );
}
