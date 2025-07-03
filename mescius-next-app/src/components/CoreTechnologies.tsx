// src/components/CoreTechnologies.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import styles from './CoreTechnologies.module.css';

// ADDED: Correct data with full Font Awesome class names
const technologies = [
  {
    name: 'ComponentOne',
    description: '.NET UI controls for desktop, web, and mobile.',
    href: '#',
    iconClass: 'fa-solid fa-layer-group',
  },
  {
    name: 'Spread',
    description: '.NET & JS spreadsheets',
    href: '#',
    iconClass: 'fa-solid fa-table-cells',
  },
  {
    name: 'Wijmo',
    description: 'Fast, flexible JavaScript UI controls for enterprise apps.',
    href: '#',
    iconClass: 'fa-solid fa-chart-pie',
  },
  {
    name: 'ActiveReports',
    description: '.NET & JS reporting',
    href: '#',
    iconClass: 'fa-solid fa-print',
  },
  {
    name: 'Document Solutions',
    description: 'APIs for docs, PDFs & images',
    href: '#',
    iconClass: 'fa-solid fa-file-lines',
  },
];

const CoreTechnologies = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = gridRef.current?.querySelectorAll<HTMLAnchorElement>('.techCard');
      cards?.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };

    const currentGrid = gridRef.current;
    currentGrid?.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentGrid?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Explore Our Core Technologies</h2>
          <p>A comprehensive suite of award-winning components for any platform.</p>
        </div>
        <div className={styles.grid} ref={gridRef}>
          {technologies.map(tech => (
            <a href={tech.href} key={tech.name} className={styles.techCard}>
              <div className={styles.icon}>
                <i className={tech.iconClass}></i>
              </div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreTechnologies;