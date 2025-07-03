import React from 'react';
import { Product } from '../pricing-data';
import ProductResult from './ProductResult'; // Import the new component
import styles from '../Pricing.module.css';

interface ResultsViewProps {
  products: Product[];
}

const ResultsView = ({ products }: ResultsViewProps) => {
  if (!products || products.length === 0) {
    return null; // Don't show anything if there's no selection
  }

  return (
    <div>
      {products.map(product => (
        <ProductResult key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ResultsView;