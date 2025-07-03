'use client';

import React, { useState, useMemo } from 'react';
import { pricingData } from '../pricing-data';
import styles from '../Pricing.module.css';
import ResultsView from './ResultsView';

const PricingSelector = () => {
  // Default state is now 'all', showing everything on page load.
  const [platform, setPlatform] = useState<'all' | 'net' | 'js'>('all');

  const recommendedProducts = useMemo(() => {
    if (platform === 'all') {
      return pricingData; // Return all products if 'all' is selected
    }
    return pricingData.filter(p => p.platform === platform);
  }, [platform]);

  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.step}>
        <h4 className={styles.questionText}>Filter by Platform:</h4>
        <div className={styles.options}>
          <button 
            onClick={() => setPlatform('all')} 
            className={`${styles.optionButton} ${platform === 'all' ? styles.active : ''}`}
          >
            All Products
          </button>
          <button 
            onClick={() => setPlatform('net')} 
            className={`${styles.optionButton} ${platform === 'net' ? styles.active : ''}`}
          >
            .NET
          </button>
          <button 
            onClick={() => setPlatform('js')} 
            className={`${styles.optionButton} ${platform === 'js' ? styles.active : ''}`}
          >
            JavaScript
          </button>
        </div>
      </div>

      <div className={styles.resultsWrapper}>
        <ResultsView products={recommendedProducts} />
      </div>
    </div>
  );
};

export default PricingSelector;