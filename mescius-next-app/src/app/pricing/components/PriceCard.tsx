import React from 'react';
import styles from '../Pricing.module.css';

// This defines the structure of a single pricing card's data
interface PriceCardProps {
  card: {
    id: string;
    name: string;
    price: string;
    term: string;
    features: string[];
    badge?: string;
  };
  accentColor: string;
}

const PriceCard = ({ card, accentColor }: PriceCardProps) => (
  <div className={styles.priceCard}>
    {card.badge && <div className={styles.badge} style={{ backgroundColor: accentColor }}>{card.badge}</div>}
    <h3 className={styles.priceCardName}>{card.name}</h3>
    <div className={styles.price}>
      {card.price}
      {card.term && <span className={styles.priceTerm}>/ {card.term}</span>}
    </div>
    <ul className={styles.features}>
      {card.features.map((feature: string) => (
        <li key={feature}><i className="fas fa-check"></i> {feature}</li>
      ))}
    </ul>
    <button className={styles.buyButton} style={{ '--accent-color': accentColor } as React.CSSProperties}>
      Add to Cart
    </button>
  </div>
);

export default PriceCard;