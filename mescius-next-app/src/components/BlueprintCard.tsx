// src/components/BlueprintCard.tsx
import Link from 'next/link';
import styles from './BlueprintCard.module.css';
import type { Blueprint } from '@/lib/types';

export default function BlueprintCard({ href, product, title, excerpt, frameworks }: Blueprint) {
  return (
    <Link href={href} className={`${styles.card} ${styles[product]}`}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>{excerpt}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.cta}>
          Explore Blueprint <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  );
}