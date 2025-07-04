'use client';

import React, { useState } from 'react';
import { Product, universalSubscriptions } from '../pricing-data';
import styles from '../Pricing.module.css';

interface ProductResultProps {
  product: Product;
}

const ProductResult = ({ product }: ProductResultProps) => {
  const [activeMainTab, setActiveMainTab] = useState('universal-subscription');
  const [licenseType, setLicenseType] = useState('subscription');
  const [quantity, setQuantity] = useState(1);
  const [termYears, setTermYears] = useState(1);

  // Function to calculate price with discounts
  const calculatePrice = (basePrice: string, perpetualPrice: string | undefined, volumeDiscounts: any[], termDiscounts: any[]) => {
    if (basePrice === 'Contact Us') return basePrice;
    
    let price = licenseType === 'perpetual' && perpetualPrice ? 
      parseFloat(perpetualPrice.replace('€', '').replace(',', '')) : 
      parseFloat(basePrice.replace('€', '').replace(',', ''));

    // Apply volume discount
    let volumeDiscount = 0;
    if (volumeDiscounts) {
      for (const discount of volumeDiscounts.sort((a, b) => b.minQuantity - a.minQuantity)) {
        if (quantity >= discount.minQuantity) {
          volumeDiscount = discount.discountPercent;
          break;
        }
      }
    }

    // Apply term discount (only for subscription)
    let termDiscount = 0;
    if (licenseType === 'subscription' && termDiscounts && termYears > 1) {
      for (const discount of termDiscounts.sort((a, b) => b.years - a.years)) {
        if (termYears >= discount.years) {
          termDiscount = discount.discountPercent;
          break;
        }
      }
    }

    // Apply discounts
    const totalDiscount = volumeDiscount + termDiscount;
    const finalPrice = price * (1 - totalDiscount / 100);
    
    return `€${Math.round(finalPrice).toLocaleString()}`;
  };

  // Function to get term with discounts applied
  const getTerm = (baseTerm: string, perpetualTerm: string | undefined, termDiscounts: any[]) => {
    const term = licenseType === 'perpetual' && perpetualTerm ? perpetualTerm : baseTerm;
    
    if (licenseType === 'subscription' && termYears > 1) {
      return term.replace('/ year', `/ ${termYears} years`);
    }
    
    return term;
  };

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

      {/* Volume and Term Discount Controls */}
      <div className={styles.calculatorControls}>
        <div className={styles.controlGroup}>
          <label htmlFor="quantity">Quantity:</label>
          <select 
            id="quantity"
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className={styles.selectInput}
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
        
        {licenseType === 'subscription' && (
          <div className={styles.controlGroup}>
            <label htmlFor="term">Subscription Term:</label>
            <select 
              id="term"
              value={termYears} 
              onChange={(e) => setTermYears(parseInt(e.target.value))}
              className={styles.selectInput}
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Years (10% off)</option>
              <option value={3}>3 Years (15% off)</option>
            </select>
          </div>
        )}
      </div>

      {/* Universal Subscription - 3 Tiers */}
      {activeMainTab === 'universal-subscription' && (
        <div className={styles.pricingCardsGrid}>
          {universalSubscriptions.map((subscription) => {
            const basePrice = subscription.price;
            const perpetualPrice = subscription.perpetualPrice;
            const displayPrice = licenseType === 'perpetual' && perpetualPrice ? perpetualPrice : basePrice;
            const displayTerm = licenseType === 'perpetual' && subscription.perpetualTerm ? 
              subscription.perpetualTerm : subscription.term;
            
            return (
              <div key={subscription.id} className={`${styles.pricingCard} ${subscription.popular ? styles.popular : ''}`}>
                {subscription.badge && <div className={styles.popularBadge}>{subscription.badge}</div>}
                
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{subscription.name}</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>{displayPrice.replace('€', '')}</span>
                  </div>
                  <div className={styles.term}>{displayTerm}</div>
                </div>

                <div className={styles.supportLevel}>
                  <span>{subscription.supportLevel}</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>

                <button className={styles.buyButton}>Buy Now</button>

                <ul className={styles.featuresList}>
                  {subscription.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Individual Products - Select specific products */}
      {activeMainTab === 'individual-products' && (
        <div>
          <div className={styles.subTabNav}>
            <button className={`${styles.subTabButton} ${styles.active}`}>
              All Products
            </button>
          </div>

          {/* .NET Products */}
          <div className={styles.productGroup}>
            <h3 className={styles.groupTitle}>.NET Products</h3>
            <div className={styles.pricingCardsGrid}>
              {/* ComponentOne Products */}
              <div className={styles.pricingCard}>
                <div className={styles.badge} style={{ backgroundColor: '#d9534f' }}>Best Value</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>ComponentOne Studio Enterprise</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€1,385', '€1,850', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Standard support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    All platforms included
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    WinForms, WPF, Blazor, ASP.NET MVC
                  </li>
                </ul>
              </div>

              {/* ActiveReports */}
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>ActiveReports Professional</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€1,605', '€2,140', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Standard support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Advanced reporting features
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Export to multiple formats
                  </li>
                </ul>
              </div>

              {/* Documents for Excel */}
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>Documents for Excel</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€555', '€740', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Standard support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Excel file generation
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Formula calculation
                  </li>
                </ul>
              </div>

              {/* InputMan */}
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>InputMan for WinForms</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€835', '€1,115', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Standard support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Advanced input validation
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Masked input controls
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* JavaScript Products */}
          <div className={styles.productGroup}>
            <h3 className={styles.groupTitle}>JavaScript Products</h3>
            <div className={styles.pricingCardsGrid}>
              {/* SpreadJS */}
              <div className={styles.pricingCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>SpreadJS Developer License</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€925', '€1,235', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Standard support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    JavaScript spreadsheet component
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    Excel-like functionality
                  </li>
                </ul>
              </div>

              {/* Wijmo */}
              <div className={styles.pricingCard}>
                <div className={styles.badge} style={{ backgroundColor: '#059669' }}>Best Value</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>Wijmo Enterprise</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>
                      {calculatePrice('€925', '€1,235', 
                        [{ minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                         { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }],
                        [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                         { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                      ).replace('€', '')}
                    </span>
                  </div>
                  <div className={styles.term}>
                    {getTerm('per Developer / year', 'per Developer', 
                      [{ years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                       { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }]
                    )}
                  </div>
                </div>
                <div className={styles.supportLevel}>
                  <span>Premium support</span>
                  <span className={styles.infoIcon}>ℹ️</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    FlexGrid data grid
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    FlexChart charting
                  </li>
                </ul>
              </div>
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
                <td>Documents for Excel</td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>Spread.NET</td>
                <td><span className={styles.included}>●</span></td>
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
                <td>Documents for PDF</td>
                <td><span className={styles.notIncluded}>-</span></td>
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
                <td>InputMan</td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>MultiRow</td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.notIncluded}>-</span></td>
                <td><span className={styles.included}>●</span></td>
              </tr>
              <tr>
                <td>TrueChart</td>
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