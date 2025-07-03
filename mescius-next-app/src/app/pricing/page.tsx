'use client';

import React from 'react';
import styles from './Pricing.module.css';
import ProductResult from './components/ProductResult';
import { pricingData } from './pricing-data';

const PricingPage = () => {
  // Find the ComponentOne product data directly.
  const componentOneProduct = pricingData.find(p => p.id === 'componentone');

  // Handle case where product isn't found
  if (!componentOneProduct) {
    return <div className={styles.container}>Product not found.</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        {/* Render the ProductResult component directly with the C1 data */}
        <ProductResult product={componentOneProduct} />
      </main>
    </div>
  );
};

export default PricingPage;