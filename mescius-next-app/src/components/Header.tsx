// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
// MODIFIED: Removed FaChevronDown as it is not needed
import { FaJs, FaMicrosoft, FaDatabase, FaMobileAlt, FaFileInvoice, FaChartPie } from 'react-icons/fa';
import blueprintsData from '@/data/blueprints.json';

// MODIFIED: The navItems array is updated to use the same promo section for both menus
const navItems = [
    {
        name: 'Solutions',
        href: '/solutions',
        // MODIFIED: Replaced the simple list with a categorized structure.
        // This will require new CSS to create the multi-column layout.
        dropdown: [
            {
                category: 'Web & JavaScript',
                items: [
                    { name: 'BI & Analytics Dashboards', desc: 'High-performance web dashboards', href: '/solutions/bi-dashboard', icon: <FaChartPie /> },
                    { name: 'Web-Based Office Suite', desc: 'Embed spreadsheets & viewers', href: '/solutions/spreadsheet-document-editor', icon: 'fa-file-excel' },
                    { name: 'Project Management App', desc: 'Interactive Gantt charts for web', href: '/solutions/project-management', icon: 'fa-tasks' },
                ]
            },
            {
                category: '.NET & Desktop',
                items: [
                    { name: 'Automated Financial Reporting', desc: 'Generate invoices & reports', href: '/solutions/financial-reporting', icon: <FaFileInvoice /> },
                    { name: 'Modernize Desktop Apps', desc: 'Upgrade WinForms & WPF UIs', href: '/solutions/desktop-modernization', icon: 'fa-desktop' },
                    { name: 'High-Speed Document APIs', desc: 'Process PDFs & Office files', href: '/solutions/document-processing-api', icon: <FaDatabase /> },
                ]
            },
            {
                category: 'Cross-Platform',
                items: [
                    { name: 'Blazor Enterprise Apps', desc: 'Build full-stack LOB apps', href: '/solutions/blazor-enterprise-apps', icon: 'fa-building' },
                    { name: 'Cross-Platform Data Apps', desc: 'Native mobile & desktop with MAUI', href: '/solutions/cross-platform-data-apps', icon: <FaMobileAlt /> },
                ]
            }
        ],
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
                    {/* MODIFIED: Wrapped categories for correct grid layout */}
                    <div className={styles.categoriesWrapper}>
                      {'category' in item.dropdown[0] ? (
                        // Render categorized dropdown (for Solutions)
                        (item.dropdown as any[]).map(categoryItem => (
                          <div
                            key={categoryItem.category}
                            className={`${styles.megaMenuCategory} ${
                              categoryItem.category === 'Cross-Platform' ? styles.spanFullWidth : ''
                            }`}
                          >
                            <h4 className={styles.megaMenuCategoryTitle}>{categoryItem.category}</h4>
                            {categoryItem.items.map((dropdownItem: any) => (
                              <Link
                                href={dropdownItem.href}
                                key={dropdownItem.name}
                                className={styles.menuItem}
                                onClick={() => setOpenMenu(null)}
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
                        ))
                      ) : (
                        // Render simple list dropdown (for Products)
                        (() => {
                          const items = item.dropdown as any[];
                          const midpoint = Math.ceil(items.length / 2);
                          return [items.slice(0, midpoint), items.slice(midpoint)].map((col, index) => (
                            <div key={index} className={styles.megaMenuCategory}>
                              {col.map(dropdownItem => (
                                <Link
                                  href={dropdownItem.href}
                                  key={dropdownItem.name}
                                  className={styles.menuItem}
                                  onClick={() => setOpenMenu(null)}
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
                          ));
                        })()
                      )}
                    </div>

                    {/* Promo section is now a direct child of the flex container */}
                    {item.promo && (
                      <div className={styles.promoSection}>
                        <h3>{item.promo.title}</h3>
                        {item.promo.description && <p>{item.promo.description}</p>}
                        <Link
                          href={item.promo.link.href}
                          className={item.promo.link.className || styles.viewAllLink}
                          onClick={() => setOpenMenu(null)}
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