import Layout from '@theme/Layout';
import GuideHero from '@site/src/components/GuideHero';
import GuideBlocks from '@site/src/components/GuideBlocks';

const TASK_BLOCKS = [
  {
    href: '/docs/saas-guide/admin',
    icon: '⚙️',
    title: 'Admin Tasks',
    description: 'Configure, manage, and secure your SudoDocs workspace.',
  },
  {
    href: '/docs/saas-guide/user',
    icon: '👤',
    title: 'User Tasks',
    description: 'Author, review, and automate documentation from the dashboard.',
  },
];

export default function SaasGuide() {
  return (
    <Layout
      title="SudoDocs SaaS Guide"
      description="Manage and use SudoDocs from the dashboard">
      <GuideHero
        title="SudoDocs SaaS Guide"
        subtitle="Everything you can do from the SudoDocs dashboard, split by who's doing it."
        compact
      />
      <main>
        <section className="container" style={{padding: '4rem 0'}}>
          <GuideBlocks blocks={TASK_BLOCKS} size="md" />
        </section>
      </main>
    </Layout>
  );
}
