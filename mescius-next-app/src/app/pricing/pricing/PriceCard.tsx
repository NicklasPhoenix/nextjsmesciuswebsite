import React from 'react';
import styles from '@/app/pricing/Pricing.module.css';

const PriceCard = ({ card, accentColor }: { card: any; accentColor: string }) => (
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