'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/app/pricing/pricing-data';
import PriceCard from './PriceCard';
import styles from '@/app/pricing/Pricing.module.css';

interface PricingModalProps {
  product: Product;
  onClose: () => void;
}

const PricingModal = ({ product, onClose }: PricingModalProps) => {
  const [activeTabId, setActiveTabId] = useState(product.tabs[0]?.id);

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className={styles.modalHeader}>
          <h2>{product.name} Pricing</h2>
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
    </div>
  );
};

export default PricingModal;