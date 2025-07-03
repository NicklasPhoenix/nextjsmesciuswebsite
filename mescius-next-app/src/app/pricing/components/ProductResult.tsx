'use client';

import React, { useState } from 'react';
import { Product } from '../pricing-data';
import styles from '../Pricing.module.css';

interface ProductResultProps {
  product: Product;
}

const ProductResult = ({ product }: ProductResultProps) => {
  const [activeMainTab, setActiveMainTab] = useState('universal-subscription');
  const [licenseType, setLicenseType] = useState('subscription');

  return (
    <div className={styles.productResultSection}>
      <h1 className={styles.productResultTitle}>Pricing</h1>
      
      {/* Main Navigation - Universal Subscription vs Individual Products */}
      <div className={styles.mainTabNav}>
        <button 
          className={`${styles.mainTabButton} ${activeMainTab === 'universal-subscription' ? styles.active : ''}`}
          onClick={() => setActiveMainTab('universal-subscription')}
        >
          UNIVERSAL SUBSCRIPTION
        </button>
        <button 
          className={`${styles.mainTabButton} ${activeMainTab === 'individual-products' ? styles.active : ''}`}
          onClick={() => setActiveMainTab('individual-products')}
        >
          INDIVIDUAL PRODUCTS
        </button>
      </div>

      {/* License Type Selector */}
      <div className={styles.licenseTypeSection}>
        <h3 className={styles.licenseTypeTitle}>LICENSE TYPE:</h3>
        <div className={styles.licenseTypeButtons}>
          <button 
            className={`${styles.licenseTypeButton} ${licenseType === 'subscription' ? styles.active : ''}`}
            onClick={() => setLicenseType('subscription')}
          >
            Subscription
          </button>
          <button 
            className={`${styles.licenseTypeButton} ${licenseType === 'perpetual' ? styles.active : ''}`}
            onClick={() => setLicenseType('perpetual')}
          >
            Perpetual
          </button>
        </div>
        
        <div className={styles.licenseDescriptions}>
          {licenseType === 'subscription' && (
            <p className={styles.licenseDescription}>
              Save at least 25% of your initial investment. Flat annual fee including product updates, technical support, and any forthcoming exclusive benefits.
            </p>
          )}
          {licenseType === 'perpetual' && (
            <p className={styles.licenseDescription}>
              One-time purchase granting access to the current released versions. 1 year of product updates and technical support included.
            </p>
          )}
        </div>
      </div>

      {/* Universal Subscription - 3 Tiers */}
      {activeMainTab === 'universal-subscription' && (
        <div className={styles.pricingCardsGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>MESCIUS Essential</h3>
              <div className={styles.priceBlock}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>799</span>
              </div>
              <div className={styles.term}>per Developer</div>
            </div>

            <div className={styles.supportLevel}>
              <span>Standard support</span>
              <span className={styles.infoIcon}>ℹ️</span>
            </div>

            <button className={styles.buyButton}>Buy Now</button>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                ComponentOne Studio
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Spread.NET
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Documents for Excel
              </li>
            </ul>
          </div>

          <div className={`${styles.pricingCard} ${styles.popular}`}>
            <div className={styles.popularBadge}>MOST POPULAR</div>
            
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>MESCIUS Complete</h3>
              <div className={styles.priceBlock}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>1299</span>
              </div>
              <div className={styles.term}>per Developer</div>
            </div>

            <div className={styles.supportLevel}>
              <span>Priority support</span>
              <span className={styles.infoIcon}>ℹ️</span>
            </div>

            <button className={styles.buyButton}>Buy Now</button>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Everything in Essential
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                ActiveReports
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Documents for PDF
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Wijmo
              </li>
            </ul>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>MESCIUS Ultimate</h3>
              <div className={styles.priceBlock}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>1899</span>
              </div>
              <div className={styles.term}>per Developer</div>
            </div>

            <div className={styles.supportLevel}>
              <span>Premium support</span>
              <span className={styles.infoIcon}>ℹ️</span>
            </div>

            <button className={styles.buyButton}>Buy Now</button>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Everything in Complete
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                InputMan
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                MultiRow
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                TrueChart
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Individual Products - Select specific products */}
      {activeMainTab === 'individual-products' && (
        <div>
          <div className={styles.subTabNav}>
            <button className={`${styles.subTabButton} ${styles.active}`}>
              Web Components
            </button>
            <button className={styles.subTabButton}>
              Desktop Components
            </button>
            <button className={styles.subTabButton}>
              Reporting
            </button>
            <button className={styles.subTabButton}>
              Spreadsheet
            </button>
          </div>

          <div className={styles.pricingCardsGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Wijmo</h3>
                <div className={styles.priceBlock}>
                  <span className={styles.currency}>€</span>
                  <span className={styles.amount}>299</span>
                </div>
                <div className={styles.term}>per Developer</div>
              </div>

              <div className={styles.supportLevel}>
                <span>Standard support</span>
                <span className={styles.infoIcon}>ℹ️</span>
              </div>

              <button className={styles.buyButton}>Buy Now</button>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  JavaScript UI Controls
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  FlexGrid
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  FlexChart
                </li>
              </ul>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>ComponentOne</h3>
                <div className={styles.priceBlock}>
                  <span className={styles.currency}>€</span>
                  <span className={styles.amount}>599</span>
                </div>
                <div className={styles.term}>per Developer</div>
              </div>

              <div className={styles.supportLevel}>
                <span>Standard support</span>
                <span className={styles.infoIcon}>ℹ️</span>
              </div>

              <button className={styles.buyButton}>Buy Now</button>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  .NET UI Controls
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  WinForms Controls
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  WPF Controls
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Feature Comparison Table */}
      <div className={styles.productsIncluded}>
        <h3 className={styles.sectionTitle}>PRODUCTS INCLUDED</h3>
        <div className={styles.comparisonTableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Essential</th>
                <th>Complete</th>
                <th>Ultimate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ComponentOne Studio</td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>Wijmo</td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>ActiveReports</td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>InputMan</td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductResult;