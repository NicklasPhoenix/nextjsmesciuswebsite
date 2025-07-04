'use client';

import React from 'react';
import styles from './Pricing.module.css';
import ProductResult from './components/ProductResult';

const PricingPage = () => {
  // Create a mock "unified" product that represents all MESCIUS products combined
  const unifiedProduct = {
    id: 'mescius',
    name: 'MESCIUS',
    platform: 'all' as 'net' | 'js',
    accentColor: '#6366f1',
    description: 'Complete development toolkit for all platforms.',
    tabs: []
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        {/* Render the ProductResult component with the unified product */}
        <ProductResult product={unifiedProduct} />
      </main>
    </div>
  );
};

export default PricingPage;