'use client';

import React from 'react';
import styles from './Pricing.module.css';
import ProductList from './pricing/ProductList';

const PricingPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Flexible Developer</span> License Pricing
          </h1>
          <p className={styles.heroSubtitle}>
            Find the right licensing plan for your development needs, from individual projects to large enterprise solutions.
          </p>
        </div>
      </header>

      <main className={`${styles.container} ${styles.pricingContainer}`}>
        {/* The page is now cleaner, delegating the work to a dedicated component */}
        <ProductList />
      </main>
    </div>
  );
};

export default PricingPage;