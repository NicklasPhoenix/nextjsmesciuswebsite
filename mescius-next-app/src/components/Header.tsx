// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navItems = [
  { name: 'Solutions', href: '/solutions' },
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
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Bundles', href: '/bundles' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className={styles.header} onMouseLeave={() => setOpenMenu(null)}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="https://cdn.mescius.io/umb/media/pujnxfci/mescuis-logo-horiz.svg"
            alt="Mescius Logo"
            width={150}
            height={36}
          />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => setOpenMenu(item.name)}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
              {item.dropdown && openMenu === item.name && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuGrid}>
                    {item.dropdown.map((dropdownItem) => (
                      <Link href={dropdownItem.href} key={dropdownItem.name} className={styles.menuItem}>
                        <i className={`fa-solid ${dropdownItem.icon} ${styles.menuItemIcon}`}></i>
                        <div>
                          <span className={styles.menuItemName}>{dropdownItem.name}</span>
                          <span className={styles.menuItemDesc}>{dropdownItem.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* --- THIS IS THE CHANGE --- */}
        <div className={styles.actionsContainer}>
          <Link href="/login" className={styles.logInLink}>
            Log in
          </Link>
          <Link href="/cart" className={styles.cartLink} aria-label="View Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        {/* --- End of Change --- */}
        
      </div>
    </header>
  );
}