'use client';

import React, { useState } from 'react';
import { Product } from '../pricing-data';
import PriceCard from './PriceCard'; // We can reuse the PriceCard component
import styles from '../Pricing.module.css';

interface ProductSectionProps {
  product: Product;
  isFirst: boolean;
}

const ProductSection = ({ product, isFirst }: ProductSectionProps) => {
  const [activeTabId, setActiveTabId] = useState(product.tabs[0]?.id);

  return (
    <section className={`${styles.productSection} ${isFirst ? styles.firstProductSection : ''}`}>
      <div className={styles.container}>
        <div className={styles.productSectionHeader}>
          <h2 className={styles.productTitle}>{product.name}</h2>
          <p className={styles.productDescription}>{product.description}</p>
        </div>

        <div className={styles.tabNav}>
          {product.tabs.map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTabId(tab.id)}
              className={`${styles.tabButton} ${activeTabId === tab.id ? styles.active : ''}`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {product.tabs.find(tab => tab.id === activeTabId)?.cards.map(card => (
            <PriceCard key={card.id} card={card} accentColor={product.accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;