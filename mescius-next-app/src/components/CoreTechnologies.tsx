// src/components/CoreTechnologies.tsx
import Link from 'next/link';
import styles from './CoreTechnologies.module.css';

// We map our product keys to a specific, high-quality Font Awesome icon
const techMap = [
  {
    key: 'net',
    name: 'ComponentOne',
    description: '.NET UI controls for desktop, web, and mobile.',
    iconClass: 'fa-solid fa-layer-group',
    href: '/products/componentone',
  },
  {
    key: 'js',
    name: 'SpreadJS',
    description: 'High-performance JavaScript spreadsheet components.',
    iconClass: 'fa-solid fa-table-cells',
    href: '/products/spreadjs',
  },
  {
    key: 'wijmo',
    name: 'Wijmo',
    description: 'Fast, flexible JavaScript UI controls for enterprise apps.',
    iconClass: 'fa-solid fa-chart-pie',
    href: '/products/wijmo',
  },
  {
    key: 'ar',
    name: 'ActiveReports',
    description: 'Complete .NET and JavaScript reporting solutions.',
    iconClass: 'fa-solid fa-print',
    href: '/products/activereports',
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
          {techMap.map((tech) => (
            <Link href={tech.href} key={tech.name} className={`${styles.techCard} ${styles[tech.key]}`}>
              {/* The icon is now rendered using a reliable <i> tag */}
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