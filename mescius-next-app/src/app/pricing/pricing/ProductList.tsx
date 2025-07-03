'use client';

import React, { useState } from 'react';
import { pricingData, Product } from '@/app/pricing/pricing-data';
import ProductItem from './ProductItem';
import PricingModal from './PricingModal';
import styles from '@/app/pricing/Pricing.module.css';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className={styles.productList}>
        {pricingData.map(product => (
          <ProductItem 
            key={product.id} 
            product={product}
            onSelect={() => setSelectedProduct(product)} 
          />
        ))}
      </div>

      {selectedProduct && (
        <PricingModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};

export default ProductList;