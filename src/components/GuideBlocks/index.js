import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function GuideBlocks({blocks, size = 'lg'}) {
  return (
    <div className={clsx(styles.blockGrid, size === 'md' && styles.md)}>
      {blocks.map((block) => (
        <Link key={block.href} to={block.href} className={styles.block}>
          <div className={styles.blockIconTile}>
            <span className={styles.blockIcon} aria-hidden="true">
              {block.icon}
            </span>
          </div>
          <div className={styles.blockBody}>
            <Heading as="h3" className={styles.blockTitle}>
              {block.title}
            </Heading>
            <p className={styles.blockDescription}>{block.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
