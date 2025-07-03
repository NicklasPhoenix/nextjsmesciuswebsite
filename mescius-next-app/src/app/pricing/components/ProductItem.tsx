import React from 'react';
import { Product } from '@/app/pricing/pricing-data';
import styles from '@/app/pricing/Pricing.module.css';

interface ProductItemProps {
  product: Product;
  onSelect: () => void;
}

const ProductItem = ({ product, onSelect }: ProductItemProps) => {
  return (
    <div className={styles.productItem} style={{ '--accent-color': product.accentColor } as React.CSSProperties}>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <button onClick={onSelect} className={styles.viewPricingButton}>
        View Pricing <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ProductItem;