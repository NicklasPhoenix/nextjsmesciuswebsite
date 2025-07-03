// src/components/BlueprintCard.tsx
import Link from 'next/link';
import styles from './BlueprintCard.module.css';
import type { Blueprint } from '@/lib/types';

// REVERTED: Using the simple Font Awesome map again.
const frameworkIconMap: { [key: string]: string } = {
  react: 'fa-brands fa-react',
  angular: 'fa-brands fa-angular',
  vue: 'fa-brands fa-vuejs',
  winforms: 'fa-brands fa-windows',
  wpf: 'fa-brands fa-windows',
  dotnet: 'fa-solid fa-microchip',
};

export default function BlueprintCard({ href, product, title, frameworks }: Blueprint) {
  return (
    <Link href={href} className={`${styles.card} ${styles[product] || ''}`}>
      <div className={styles.content}>
        {/* NEW: A smart banner-style tag for the product */}
        <span className={styles.productTag}>{product}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.footer}>
        <div className={styles.frameworks}>
          {frameworks.map((fwKey) => {
            const framework = frameworkIconMap[fwKey];
            if (!framework) return null;
            const frameworkName = fwKey.charAt(0).toUpperCase() + fwKey.slice(1);
            return (
              <div key={fwKey} className={styles.frameworkIconWrapper}>
                {/* REVERTED: Using simple <i> tags for Font Awesome icons */}
                <i className={`${framework} ${styles.frameworkIcon}`} aria-label={frameworkName}></i>
                <span className={styles.tooltip}>{frameworkName}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.arrowLink}>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}