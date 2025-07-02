// src/components/BlueprintCard.tsx
import Link from 'next/link';
import styles from './BlueprintCard.module.css';
import type { Blueprint } from '@/lib/types';

const frameworkIconMap: { [key: string]: string } = {
  react: 'fa-brands fa-react',
  angular: 'fa-brands fa-angular',
  vue: 'fa-brands fa-vuejs',
  winforms: 'fa-brands fa-windows',
  wpf: 'fa-brands fa-windows',
  dotnet: 'fa-solid fa-microchip',
};

export default function BlueprintCard({ href, product, title, excerpt, frameworks }: Blueprint) {
  return (
    <Link href={href} className={`${styles.card} ${styles[product] || ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.tag}>{product.toUpperCase()}</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.frameworks}>
          {frameworks.map((fwKey) => {
            const framework = frameworkIconMap[fwKey];
            if (!framework) return null;
            return ( <i key={fwKey} className={`${framework} ${styles.frameworkIcon}`} title={fwKey}></i> );
          })}
        </div>
        <div className={styles.arrowLink}>
          View Blueprint <span>→</span>
        </div>
      </div>
    </Link>
  );
}