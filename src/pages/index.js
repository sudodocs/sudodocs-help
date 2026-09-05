import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import GuideHero from '@site/src/components/GuideHero';
import GuideBlocks from '@site/src/components/GuideBlocks';

const GUIDE_BLOCKS = [
  {
    href: '/saas-guide',
    icon: '📘',
    title: 'SudoDocs SaaS Guide',
    description: 'Manage and use SudoDocs from the dashboard.',
  },
  {
    href: '/cli-guide',
    icon: '💻',
    title: 'SudoDocs CLI Guide',
    description: 'Automate SudoDocs from a terminal or CI/CD pipeline - Enterprise plan.',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Automated Documentation for Technical Teams">
      <GuideHero title={siteConfig.title} subtitle={siteConfig.tagline} />
      <main>
        <section className="container" style={{padding: '4rem 0'}}>
          <GuideBlocks blocks={GUIDE_BLOCKS} size="lg" />
        </section>
      </main>
    </Layout>
  );
}
