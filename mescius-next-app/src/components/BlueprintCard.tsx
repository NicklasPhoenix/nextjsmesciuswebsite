// src/components/BlueprintCard.tsx
import React from 'react';
import Link from 'next/link';
import styles from './BlueprintCard.module.css';
import { FaReact, FaAngular, FaVuejs, FaJs, FaWindows, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { SiBlazor } from 'react-icons/si';
import {
  BsPlusCircleFill // Import a plus icon for bundles
} from 'react-icons/bs';

// Define the Blueprint interface
interface Blueprint {
  id: string;
  href: string;
  product: string;
  title: string;
  excerpt: string;
  frameworks: string[];
}

// A complete mapping of framework IDs to icons and names
const frameworkIconMap: { [key: string]: { icon: React.ReactNode; name: string } } = {
  react: { icon: <FaReact />, name: 'React' },
  angular: { icon: <FaAngular />, name: 'Angular' },
  vue: { icon: <FaVuejs />, name: 'Vue' },
  js: { icon: <FaJs />, name: 'JavaScript' },
  blazor: { icon: <SiBlazor />, name: 'Blazor' },
  maui: { icon: <FaMobileAlt />, name: 'MAUI' },
  winforms: { icon: <FaDesktop />, name: 'WinForms' },
  wpf: { icon: <FaWindows />, name: 'WPF' },
  dotnet: { icon: <span className={styles.dotNetTextIcon}>.NET</span>, name: '.NET' },
};

export default function BlueprintCard(props: Blueprint) {
  const { id, href, product, title, excerpt, frameworks } = props;

  // Logic to determine if the solution is a bundle
  const isBundle = title.toLowerCase().includes('suite') || title.toLowerCase().includes('api');

  return (
    <Link href={href} className={`${styles.card} ${styles[product]}`}>
      {/* MODIFIED: Use the tag container */}
      <div className={styles.tagContainer}>
        <span className={styles.productTag}>{product}</span>
        {/* ADDED: Conditionally render the suite tag */}
        {isBundle && <span className={styles.suiteTag}>Suite</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.footer}>
        <div className={styles.frameworks}>
          {/* MODIFIED: Ensure the correct structure for hover effects */}
          {frameworks.map((fwId) => {
            const iconData = frameworkIconMap[fwId];
            if (!iconData) return null;

            return (
              <div key={fwId} className={styles.frameworkIconWrapper}>
                <span className={styles.frameworkIcon}>{iconData.icon}</span>
                <div className={styles.tooltip}>{iconData.name}</div>
              </div>
            );
          })}
        </div>
        <span className={styles.arrowLink}>→</span>
      </div>
    </Link>
  );
};