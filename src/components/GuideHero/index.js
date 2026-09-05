import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function GuideHero({title, subtitle, compact = false, children}) {
  return (
    <header className={clsx('hero', styles.heroBanner, compact && styles.compact)}>
      <div className={styles.heroOverlay}></div>

      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className="hero__title">
          {title}
        </Heading>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
