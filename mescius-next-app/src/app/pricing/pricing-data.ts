export interface Feature {
  name: string;
  tooltip: string;
}

export interface PriceCard {
  id: string;
  name: string;
  price: string;
  perpetualPrice?: string; // Price for perpetual license
  term: string;
  perpetualTerm?: string; // Term for perpetual license
  features: Feature[];
  badge?: string;
  volumeDiscounts?: VolumeDiscount[];
  termDiscounts?: TermDiscount[];
}

export interface VolumeDiscount {
  minQuantity: number;
  discountPercent: number;
  description: string;
}

export interface TermDiscount {
  years: number;
  discountPercent: number;
  description: string;
}

export interface UniversalSubscription {
  id: string;
  name: string;
  price: string;
  perpetualPrice?: string;
  term: string;
  perpetualTerm?: string;
  supportLevel: string;
  features: string[];
  included: string[];
  badge?: string;
  popular?: boolean;
}

export const universalSubscriptions: UniversalSubscription[] = [
  {
    id: 'essential',
    name: 'MESCIUS Essential',
    price: '€799',
    perpetualPrice: '€1,065',
    term: 'per Developer / year',
    perpetualTerm: 'per Developer',
    supportLevel: 'Standard support',
    features: [
      'ComponentOne Studio',
      'Spread.NET',
      'Documents for Excel'
    ],
    included: [
      'componentone',
      'documents'
    ]
  },
  {
    id: 'complete',
    name: 'MESCIUS Complete',
    price: '€1,299',
    perpetualPrice: '€1,735',
    term: 'per Developer / year',
    perpetualTerm: 'per Developer',
    supportLevel: 'Priority support',
    features: [
      'Everything in Essential',
      'ActiveReports',
      'Documents for PDF',
      'Wijmo'
    ],
    included: [
      'componentone',
      'documents',
      'activereports',
      'wijmo'
    ],
    badge: 'MOST POPULAR',
    popular: true
  },
  {
    id: 'ultimate',
    name: 'MESCIUS Ultimate',
    price: '€1,899',
    perpetualPrice: '€2,535',
    term: 'per Developer / year',
    perpetualTerm: 'per Developer',
    supportLevel: 'Premium support',
    features: [
      'Everything in Complete',
      'InputMan',
      'MultiRow',
      'TrueChart'
    ],
    included: [
      'componentone',
      'documents',
      'activereports',
      'wijmo',
      'inputman'
    ]
  }
];

export interface LicenseTab {
  id: string;
  title: string;
  // NEW: Groups array to organize editions
  groups?: {
    id: string;
    title: string;
    cards: PriceCard[];
  }[];
  cards: PriceCard[];
}

export interface Product {
  id: string;
  name: string;
  platform: 'net' | 'js';
  description: string;
  accentColor: string;
  tabs: LicenseTab[];
}

export const pricingData: Product[] = [
  {
    id: 'componentone',
    name: 'ComponentOne',
    platform: 'net',
    accentColor: '#d9534f',
    description: 'The complete toolkit for .NET developers.',
    tabs: [
      {
        id: 'new-licenses',
        title: 'New Licenses',
        // NEW: Groups array to organize editions
        groups: [
          {
            id: 'bundles',
            title: 'Bundles',
            cards: [
              { id: 'c1-se', name: 'Studio Enterprise', price: '€1,385', perpetualPrice: '€1,850', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [
                { name: 'All platforms included', tooltip: 'Includes WinForms, WPF, Blazor, ASP.NET MVC, WinUI, and ActiveX controls.' },
                { name: 'Web, Desktop & Mobile', tooltip: 'Build applications for any screen or platform.' }
              ], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
              { id: 'c1-ax', name: 'ActiveX Edition', price: '€1,385', perpetualPrice: '€1,850', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [
                { name: 'Legacy ActiveX support', tooltip: 'The most popular and complete toolset for ActiveX.' }
              ],
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
            ]
          },
          {
            id: 'desktop',
            title: 'Desktop',
            cards: [
              // THE FIX: Converted all feature strings to objects
              { id: 'c1-wfd', name: 'WinForms Data Services', price: '€1,205', perpetualPrice: '€1,610', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'Advanced data controls', tooltip: 'Advanced data controls for WinForms.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
              { id: 'c1-wfe', name: 'WinForms Edition', price: '€925', perpetualPrice: '€1,235', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'Essential WinForms controls', tooltip: 'Essential controls for WinForms.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
              { id: 'c1-wpf', name: 'WPF Edition', price: '€925', perpetualPrice: '€1,235', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'Robust WPF controls', tooltip: 'Robust controls for WPF.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
              { id: 'c1-winui', name: 'WinUI & MAUI Edition', price: '€925', perpetualPrice: '€1,235', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'Modern UI for WinUI & MAUI', tooltip: 'Modern UI controls for WinUI & MAUI.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
            ]
          },
          {
            id: 'web',
            title: 'Web',
            cards: [
              { id: 'c1-mvc', name: 'ASP.NET MVC Edition', price: '€835', perpetualPrice: '€1,115', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'MVC controls for web apps', tooltip: 'Controls for ASP.NET MVC web applications.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
              { id: 'c1-blazor', name: 'Blazor Edition', price: '€465', perpetualPrice: '€620', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'Native Blazor UI components', tooltip: 'Native UI components for Blazor.' }], 
              volumeDiscounts: [
                { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
                { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
              ],
              termDiscounts: [
                { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
                { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
              ]},
            ]
          }
        ],
        cards: [] // The old cards array is now empty, as they are inside groups
      },
      {
        id: 'c1-renew',
        title: 'Renewals',
        cards: [], // Renewal form will be shown here
      },
    ],
  },
  {
    id: 'spreadjs',
    name: 'SpreadJS',
    platform: 'js',
    description: 'Empower your web applications with the industry-leading JavaScript spreadsheet solution.',
    accentColor: '#809B59',
    tabs: [
      {
        id: 'sjs-noncom',
        title: 'Internal & Free Apps',
        cards: [
          // THE FIX: Converted all feature strings to objects
          { id: '60976', name: 'Hostname License Pack', price: '€1,855', perpetualPrice: '€2,475', term: 'for 3-5 Hostnames / year', perpetualTerm: 'for 3-5 Hostnames', features: [{ name: 'Deploy to multiple internal sites', tooltip: 'Deploy to multiple internal sites.' }], badge: 'Best Value',
          volumeDiscounts: [
            { minQuantity: 2, discountPercent: 10, description: '10% off for 2+ packs' },
            { minQuantity: 5, discountPercent: 15, description: '15% off for 5+ packs' }
          ],
          termDiscounts: [
            { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
            { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
          ]},
          { id: '62805', name: 'Dev + Hostname Bundle', price: '€1,395', perpetualPrice: '€1,860', term: 'per Dev Bundle / year', perpetualTerm: 'per Dev Bundle', features: [{ name: '1 Dev License + 1 Hostname', tooltip: 'Includes one developer license and one hostname license.' }],
          volumeDiscounts: [
            { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ bundles' },
            { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ bundles' }
          ],
          termDiscounts: [
            { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
            { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
          ]},
          { id: '60974', name: 'Annual Hostname License', price: '€555', perpetualPrice: '€740', term: 'for 1 Hostname / year', perpetualTerm: 'for 1 Hostname', features: [{ name: 'Annual subscription', tooltip: 'Annual subscription for one hostname.' }],
          volumeDiscounts: [
            { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
            { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
          ],
          termDiscounts: [
            { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
            { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
          ]},
        ],
      },
      {
        id: 'sjs-com',
        title: 'Paid & SaaS Apps',
        cards: [
          { id: '57922', name: 'Developer License', price: '€925', perpetualPrice: '€1,235', term: 'per Developer / year', perpetualTerm: 'per Developer', features: [{ name: 'For commercial app development', tooltip: 'For commercial application development.' }],
          volumeDiscounts: [
            { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
            { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
          ],
          termDiscounts: [
            { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
            { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
          ]},
          { id: '61408', name: 'Limited Annual Deployment', price: '€11,605', perpetualPrice: '€15,475', term: 'per Single Domain / year', perpetualTerm: 'per Single Domain', features: [{ name: 'Deploy to one public domain', tooltip: 'Deploy to one public domain.' }],
          volumeDiscounts: [
            { minQuantity: 2, discountPercent: 5, description: '5% off for 2+ domains' },
            { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ domains' }
          ],
          termDiscounts: [
            { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
            { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
          ]},
          { id: 'sjs-unlimited-annual', name: 'Unlimited Annual Deployment', price: 'Contact Us', term: 'for a quote', features: [{ name: 'For large-scale deployments', tooltip: 'For large-scale deployments.' }] },
        ],
      },
      {
        id: 'sjs-renew',
        title: 'Renewals',
        cards: [],
      },
    ],
  },
  {
    id: 'activereports',
    name: 'ActiveReports',
    platform: 'net',
    description: 'Comprehensive reporting solution for .NET applications.',
    accentColor: '#2563eb',
    tabs: [
      {
        id: 'new-licenses',
        title: 'New Licenses',
        cards: [
          { 
            id: 'ar-standard', 
            name: 'Standard Edition', 
            price: '€1,205', 
            perpetualPrice: '€1,605',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Core reporting features', tooltip: 'Essential reporting capabilities for standard applications.' },
              { name: 'Web and desktop support', tooltip: 'Support for both web and desktop applications.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          },
          { 
            id: 'ar-professional', 
            name: 'Professional Edition', 
            price: '€1,605', 
            perpetualPrice: '€2,140',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Advanced reporting features', tooltip: 'Advanced reporting capabilities with enhanced features.' },
              { name: 'Export to multiple formats', tooltip: 'Export reports to PDF, Excel, Word, and more.' },
              { name: 'Charting and visualization', tooltip: 'Rich charting and data visualization components.' }
            ],
            badge: 'Popular',
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          }
        ]
      },
      {
        id: 'renewals',
        title: 'Renewals',
        cards: []
      }
    ]
  },
  {
    id: 'wijmo',
    name: 'Wijmo',
    platform: 'js',
    description: 'JavaScript UI controls for enterprise web applications.',
    accentColor: '#059669',
    tabs: [
      {
        id: 'new-licenses',
        title: 'New Licenses',
        cards: [
          { 
            id: 'wijmo-core', 
            name: 'Core Edition', 
            price: '€465', 
            perpetualPrice: '€620',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'FlexGrid data grid', tooltip: 'High-performance data grid with sorting, filtering, and editing.' },
              { name: 'Input controls', tooltip: 'Rich input controls for forms.' },
              { name: 'Themes and styling', tooltip: 'Multiple built-in themes and custom styling options.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          },
          { 
            id: 'wijmo-enterprise', 
            name: 'Enterprise Edition', 
            price: '€925', 
            perpetualPrice: '€1,235',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Everything in Core', tooltip: 'All features from Core edition included.' },
              { name: 'FlexChart charting', tooltip: 'Advanced charting capabilities with multiple chart types.' },
              { name: 'OLAP and analytics', tooltip: 'OLAP pivot tables and advanced analytics.' },
              { name: 'Premium support', tooltip: 'Priority technical support and assistance.' }
            ],
            badge: 'Best Value',
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          }
        ]
      },
      {
        id: 'renewals',
        title: 'Renewals',
        cards: []
      }
    ]
  },
  {
    id: 'documents',
    name: 'Documents API',
    platform: 'net',
    description: 'Server-side document generation and manipulation APIs.',
    accentColor: '#7c3aed',
    tabs: [
      {
        id: 'new-licenses',
        title: 'New Licenses',
        cards: [
          { 
            id: 'docs-excel', 
            name: 'Documents for Excel', 
            price: '€555', 
            perpetualPrice: '€740',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Excel file generation', tooltip: 'Create Excel files programmatically without Excel installed.' },
              { name: 'Formula calculation', tooltip: 'Calculate Excel formulas server-side.' },
              { name: 'Charts and styling', tooltip: 'Create charts and apply rich formatting.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          },
          { 
            id: 'docs-pdf', 
            name: 'Documents for PDF', 
            price: '€555', 
            perpetualPrice: '€740',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'PDF creation and editing', tooltip: 'Create and modify PDF documents programmatically.' },
              { name: 'Digital signatures', tooltip: 'Add digital signatures and security features.' },
              { name: 'Form filling', tooltip: 'Fill PDF forms and extract data.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          },
          { 
            id: 'docs-word', 
            name: 'Documents for Word', 
            price: '€555', 
            perpetualPrice: '€740',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Word document generation', tooltip: 'Create Word documents programmatically.' },
              { name: 'Mail merge', tooltip: 'Perform mail merge operations with data sources.' },
              { name: 'Document conversion', tooltip: 'Convert between different document formats.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          }
        ]
      },
      {
        id: 'renewals',
        title: 'Renewals',
        cards: []
      }
    ]
  },
  {
    id: 'inputman',
    name: 'InputMan',
    platform: 'net',
    description: 'Advanced input controls for data entry applications.',
    accentColor: '#dc2626',
    tabs: [
      {
        id: 'new-licenses',
        title: 'New Licenses',
        cards: [
          { 
            id: 'inputman-winforms', 
            name: 'InputMan for WinForms', 
            price: '€835', 
            perpetualPrice: '€1,115',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'Advanced input validation', tooltip: 'Sophisticated input validation and formatting.' },
              { name: 'Masked input controls', tooltip: 'Customizable masked input controls.' },
              { name: 'International support', tooltip: 'Support for international formats and locales.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          },
          { 
            id: 'inputman-wpf', 
            name: 'InputMan for WPF', 
            price: '€835', 
            perpetualPrice: '€1,115',
            term: 'per Developer / year', 
            perpetualTerm: 'per Developer',
            features: [
              { name: 'WPF-optimized controls', tooltip: 'Input controls designed specifically for WPF.' },
              { name: 'MVVM support', tooltip: 'Full support for MVVM pattern.' },
              { name: 'Custom styling', tooltip: 'Extensive styling and theming capabilities.' }
            ],
            volumeDiscounts: [
              { minQuantity: 5, discountPercent: 10, description: '10% off for 5+ licenses' },
              { minQuantity: 10, discountPercent: 15, description: '15% off for 10+ licenses' }
            ],
            termDiscounts: [
              { years: 2, discountPercent: 10, description: '10% off for 2-year subscription' },
              { years: 3, discountPercent: 15, description: '15% off for 3-year subscription' }
            ]
          }
        ]
      },
      {
        id: 'renewals',
        title: 'Renewals',
        cards: []
      }
    ]
  }
];