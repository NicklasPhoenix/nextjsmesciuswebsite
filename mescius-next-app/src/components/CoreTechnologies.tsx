// src/components/CoreTechnologies.tsx
import Link from 'next/link';
import styles from './CoreTechnologies.module.css';

// The 'key' now matches our product color variables (e.g., 'net' for ComponentOne)
const technologies = [
  {
    key: 'net', // Changed from 'componentone'
    name: 'ComponentOne',
    description: '.NET UI controls for desktop, web, and mobile.',
    iconClass: 'fa-solid fa-layer-group',
    href: '/products/componentone',
  },
  {
    key: 'js', // Changed from 'spread'
    name: 'Spread',
    description: '.NET & JS spreadsheets',
    iconClass: 'fa-solid fa-table-cells',
    href: '/products/spread',
  },
  {
    key: 'wijmo', // This was already correct
    name: 'Wijmo',
    description: 'Fast, flexible JavaScript UI controls for enterprise apps.',
    iconClass: 'fa-solid fa-chart-pie',
    href: '/products/wijmo',
  },
  {
    key: 'ar', // Changed from 'activereports'
    name: 'ActiveReports',
    description: '.NET & JS reporting',
    iconClass: 'fa-solid fa-print',
    href: '/products/activereports',
  },
  {
    key: 'ds', // Changed from 'documents'
    name: 'Document Solutions',
    description: 'APIs for docs, PDFs & images',
    iconClass: 'fa-solid fa-file-lines',
    href: '/products/documents',
  },
];

export default function CoreTechnologies() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Explore Our Core Technologies</h2>
          <p>A comprehensive suite of award-winning components for any platform.</p>
        </div>
        <div className={styles.grid}>
          {technologies.map((tech) => (
            // This line now correctly applies a class like .net, .js, etc.
            <Link href={tech.href} key={tech.name} className={`${styles.techCard} ${styles[tech.key]}`}>
              <i className={`${tech.iconClass} ${styles.icon}`}></i>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}