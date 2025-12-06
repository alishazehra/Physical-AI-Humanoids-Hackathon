import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>; // Reintroduced Svg property
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hands-on Learning',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Reintroduced Svg
    description: (
      <>
        Dive into practical examples and projects that bring Physical AI concepts to life. Learn by doing, building, and experimenting with real-world scenarios.
      </>
    ),
  },
  {
    title: 'Real-world Applications',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Reintroduced Svg
    description: (
      <>
        Explore how Physical AI is being applied in robotics, autonomous systems, and various industries. Understand the impact and potential of intelligent physical agents.
      </>
    ),
  },
  {
    title: 'Cutting-edge Research',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Reintroduced Svg
    description: (
      <>
        Stay updated with the latest advancements and research in Physical AI and humanoid robotics. Discover the future of intelligent systems and their capabilities.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) { // Reintroduced Svg prop
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" /> 
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
