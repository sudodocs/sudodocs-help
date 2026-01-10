import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compose Release Notes',
    Svg: require('@site/static/img/icon-release.svg').default,
    description: (
      <>
        Hassle-free release notes generation from Jira filters or CSV uploads. 
      </>
    ),
  },
  {
    title: 'Author Features',
    Svg: require('@site/static/img/icon-draft.svg').default,
    description: (
      <>
        Draft comprehensive feature documentation directly from Jira tickets 
        with AI-generated architecture diagrams and placement logic.
      </>
    ),
  },
  {
    title: 'Generate Developer References',
    Svg: require('@site/static/img/icon-ref-docs.svg').default,
    description: (
      <>
        Upload JSON or YAML files and get a generated Markdown output for publishing.
      </>
    ),
  },
  {
    title: 'Audit Docs',
    Svg: require('@site/static/img/icon-audit.svg').default,
    description: (
      <>
        Automatically detect gaps between your source code and documentation 
        using vector-based AI analysis to ensure technical accuracy.
      </>
    ),
  },
  {
    title: 'Validate API & Helm Charts',
    Svg: require('@site/static/img/icon-api.svg').default,
    description: (
      <>
        Validate OpenAPI specifications or Helm Charts against industry standards
        and instantly publish to your developer portals.
      </>
    ),
  },
  {
    title: 'Chat with Docs',
    Svg: require('@site/static/img/icon-chat.svg').default,
    description: (
      <>
        Talk to your knowledge base to understand any product feature. You can also 
        generate future content strategies.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* THIS WRAPPER IS KEY: It creates the visible glass card */}
      <div className={styles.featureCard}> 
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" style={{height: '48px', width: '48px', color: 'var(--ifm-color-primary)'}} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" style={{marginTop: '1.5rem', marginBottom: '1rem'}}>{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center', rowGap: '2rem'}}> 
          {/* Added rowGap to separate the top 3 and bottom 3 cards */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}