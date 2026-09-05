import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import GuideHero from '@site/src/components/GuideHero';
import GuideBlocks from '@site/src/components/GuideBlocks';

const TASK_BLOCKS = [
  {
    href: '/docs/cli-guide/admin',
    icon: '⚙️',
    title: 'Admin Tasks',
    description: 'Script every Admin Tasks page from a terminal or CI/CD pipeline.',
  },
  {
    href: '/docs/cli-guide/user',
    icon: '👤',
    title: 'User Tasks',
    description: 'CLI equivalents of the User Tasks that already have one.',
  },
];

export default function CliGuide() {
  return (
    <Layout
      title="SudoDocs CLI Guide"
      description="Automate SudoDocs from a terminal or CI/CD pipeline - Enterprise plan">
      <GuideHero
        title="SudoDocs CLI Guide"
        subtitle="Automate SudoDocs from a terminal or CI/CD pipeline instead of the dashboard - an Enterprise-plan feature."
        compact
      />
      <main>
        <section className="container" style={{padding: '4rem 0'}}>
          <GuideBlocks blocks={TASK_BLOCKS} size="md" />
          <p style={{textAlign: 'center', marginTop: '2rem'}}>
            New to the CLI? Start with{' '}
            <Link to="/docs/cli-guide/getting-started">Getting Started</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
