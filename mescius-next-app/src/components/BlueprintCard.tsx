// src/components/BlueprintCard.tsx
import React from 'react';
import Link from 'next/link';
import styles from './BlueprintCard.module.css';
import { DotNetTextIcon } from '@/app/solutions/components/techIconGroupsData';

// REVERTED: Using the simple Font Awesome map again.
const frameworkIconMap: { [key: string]: string } = {
  react: 'fa-brands fa-react',
  angular: 'fa-brands fa-angular',
  vue: 'fa-brands fa-vuejs',
  winforms: 'fa-brands fa-windows',
  wpf: 'fa-brands fa-windows',
  dotnet: 'fa-solid fa-microchip',
};

type Blueprint = {
  href: string;
  product: string;
  title: string;
  frameworks: string[];
};

// MODIFIED: Wrap the component with React.forwardRef
const BlueprintCard = React.forwardRef<HTMLAnchorElement, Blueprint>(
  ({ href, product, title, frameworks }, ref) => {
    return (
      <Link href={href} className={`${styles.card} ${styles[product] || ''}`} ref={ref}>
        <div className={styles.content}>
          {/* NEW: A smart banner-style tag for the product */}
          <span className={styles.productTag}>{product}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.footer}>
          <div className={styles.frameworks}>
            {frameworks.map((fwKey) => {
              if (fwKey === 'dotnet' || fwKey === 'net') {
                return (
                  <div key={fwKey} className={styles.frameworkIconWrapper}>
                    {/* MODIFIED: Pass the className from the BlueprintCard's CSS module */}
                    <DotNetTextIcon className={styles.dotNetTextIcon} />
                    <span className={styles.tooltip}>.NET</span>
                  </div>
                );
              }
              const framework = frameworkIconMap[fwKey];
              if (!framework) return null;
              const frameworkName = fwKey.charAt(0).toUpperCase() + fwKey.slice(1);
              return (
                <div key={fwKey} className={styles.frameworkIconWrapper}>
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
);

BlueprintCard.displayName = 'BlueprintCard'; // Good practice for debugging
export default BlueprintCard;