// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
// MODIFIED: Removed FaChevronDown as it is not needed
import { FaJs, FaMicrosoft, FaDatabase } from 'react-icons/fa';
import blueprintsData from '@/data/blueprints.json';

// MODIFIED: The navItems array is updated to use the same promo section for both menus
const navItems = [
    {
        name: 'Solutions',
        href: '/solutions',
        dropdown: [
            { name: 'Web & Mobile', desc: 'JS, React, Angular, Vue', href: '/solutions?filter=web', icon: <FaJs /> },
            { name: '.NET', desc: 'MAUI, Blazor, WPF', href: '/solutions?filter=net', icon: <FaMicrosoft /> },
            { name: 'Data Tools', desc: 'Reporting & BI', href: '/solutions?filter=data', icon: <FaDatabase /> },
        ],
        // MODIFIED: This now uses the same promo section as Products
        promo: {
            title: 'Get Every Component We Make',
            description: 'Empower your entire team with our Enterprise Universal bundle, including source code and premium support.',
            // MODIFIED: Added className for the button
            link: { href: '/bundles#enterprise', text: 'Explore Universal', className: 'btn btnSecondary' }
        }
    },
    {
        name: 'Products',
        href: '/products',
        dropdown: [
            { name: 'ComponentOne', desc: 'The complete .NET UI toolkit', href: '/products/componentone', icon: 'fa-layer-group' },
            { name: 'Spread', desc: '.NET & JS spreadsheets', href: '/products/spread', icon: 'fa-table-cells' },
            { name: 'Wijmo', desc: 'High-performance JS controls', href: '/products/wijmo', icon: 'fa-chart-pie' },
            { name: 'ActiveReports', desc: '.NET & JS reporting', href: '/products/activereports', icon: 'fa-print' },
            { name: 'Document Solutions', desc: 'APIs for docs, PDFs & images', href: '/products/documents', icon: 'fa-file-lines' },
        ],
        promo: {
            title: 'Get Every Component We Make',
            description: 'Empower your entire team with our Enterprise Universal bundle, including source code and premium support.',
            // MODIFIED: Added className for the button
            link: { href: '/bundles#enterprise', text: 'Explore Universal', className: 'btn btnSecondary' }
        }
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Bundles', href: '/bundles' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} onMouseLeave={() => setOpenMenu(null)}>
      <div className={styles.container}>
        <Link href="/">
          <Image src="https://cdn.mescius.io/umb/media/pujnxfci/mescuis-logo-horiz.svg" alt="Mescius Logo" width={150} height={36}/>
        </Link>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div key={item.name} className={styles.navItem} onMouseEnter={() => setOpenMenu(item.name)}>
              <Link
                href={item.href}
                className={styles.navLink}
                onClick={() => setOpenMenu(null)} // ADDED: Close menu on click
              >
                {item.name}
              </Link>
              {item.dropdown && openMenu === item.name && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuContent}>
                    <div className={styles.megaMenuGrid}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          href={dropdownItem.href}
                          key={dropdownItem.name}
                          className={styles.menuItem}
                          onClick={() => setOpenMenu(null)} // ADDED: Close menu on click
                        >
                          <div className={styles.menuItemIcon}>
                            {typeof dropdownItem.icon === 'string' ? <i className={`fa-solid ${dropdownItem.icon}`}></i> : dropdownItem.icon}
                          </div>
                          <div>
                            <span className={styles.menuItemName}>{dropdownItem.name}</span>
                            <span className={styles.menuItemDesc}>{dropdownItem.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {item.promo && (
                      <div className={styles.promoSection}>
                        <h3>{item.promo.title}</h3>
                        {item.promo.description && <p>{item.promo.description}</p>}
                        <Link
                          href={item.promo.link.href}
                          className={item.promo.link.className || styles.viewAllLink}
                          onClick={() => setOpenMenu(null)} // ADDED: Close menu on click
                        >
                          {item.promo.link.text}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.actionsContainer}>
          <Link href="/login" className={styles.logInLink}>Log in</Link>
          <Link href="/cart" className={styles.cartLink} aria-label="View Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}