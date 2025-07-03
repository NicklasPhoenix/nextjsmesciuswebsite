// src/components/FeaturedSolutions.tsx
import React from 'react';
import BlueprintCard from './BlueprintCard';
import blueprints from '../data/blueprints.json';
import styles from './FeaturedSolutions.module.css';
import Link from 'next/link';

const FeaturedSolutions = () => {
  const featured = blueprints.slice(0, 3);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Blueprints</h2>
          {/* The "View All Solutions" button has been moved from here */}
        </div>
        <div className={styles.grid}>
          {featured.map(blueprint => (
            <BlueprintCard key={blueprint.id} {...blueprint} />
          ))}
        </div>
        {/* ADDED: Container for the button below the grid */}
        <div className={styles.ctaContainer}>
          <Link href="/solutions" className="btn btnSecondary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;