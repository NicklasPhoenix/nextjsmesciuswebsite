export interface Feature {
  name: string;
  tooltip: string;
}

export interface PriceCard {
  id: string;
  name: string;
  price: string;
  term: string;
  features: Feature[];
  badge?: string; // NEW: Added optional badge property
}

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
              { id: 'c1-se', name: 'Studio Enterprise', price: '€1,385', term: 'per Developer', features: [
                { name: 'All platforms included', tooltip: 'Includes WinForms, WPF, Blazor, ASP.NET MVC, WinUI, and ActiveX controls.' },
                { name: 'Web, Desktop & Mobile', tooltip: 'Build applications for any screen or platform.' }
              ]},
              { id: 'c1-ax', name: 'ActiveX Edition', price: '€1,385', term: 'per Developer', features: [
                { name: 'Legacy ActiveX support', tooltip: 'The most popular and complete toolset for ActiveX.' }
              ]},
            ]
          },
          {
            id: 'desktop',
            title: 'Desktop',
            cards: [
              // THE FIX: Converted all feature strings to objects
              { id: 'c1-wfd', name: 'WinForms Data Services', price: '€1,205', term: 'per Developer', features: [{ name: 'Advanced data controls', tooltip: 'Advanced data controls for WinForms.' }] },
              { id: 'c1-wfe', name: 'WinForms Edition', price: '€925', term: 'per Developer', features: [{ name: 'Essential WinForms controls', tooltip: 'Essential controls for WinForms.' }] },
              { id: 'c1-wpf', name: 'WPF Edition', price: '€925', term: 'per Developer', features: [{ name: 'Robust WPF controls', tooltip: 'Robust controls for WPF.' }] },
              { id: 'c1-winui', name: 'WinUI & MAUI Edition', price: '€925', term: 'per Developer', features: [{ name: 'Modern UI for WinUI & MAUI', tooltip: 'Modern UI controls for WinUI & MAUI.' }] },
            ]
          },
          {
            id: 'web',
            title: 'Web',
            cards: [
              { id: 'c1-mvc', name: 'ASP.NET MVC Edition', price: '€835', term: 'per Developer', features: [{ name: 'MVC controls for web apps', tooltip: 'Controls for ASP.NET MVC web applications.' }] },
              { id: 'c1-blazor', name: 'Blazor Edition', price: '€465', term: 'per Developer', features: [{ name: 'Native Blazor UI components', tooltip: 'Native UI components for Blazor.' }] },
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
          { id: '60976', name: 'Hostname License Pack', price: '€1,855', term: 'for 3-5 Hostnames', features: [{ name: 'Deploy to multiple internal sites', tooltip: 'Deploy to multiple internal sites.' }], badge: 'Best Value' },
          { id: '62805', name: 'Dev + Hostname Bundle', price: '€1,395', term: 'per Dev Bundle / year', features: [{ name: '1 Dev License + 1 Hostname', tooltip: 'Includes one developer license and one hostname license.' }] },
          { id: '60974', name: 'Annual Hostname License', price: '€555', term: 'for 1 Hostname', features: [{ name: 'Annual subscription', tooltip: 'Annual subscription for one hostname.' }] },
        ],
      },
      {
        id: 'sjs-com',
        title: 'Paid & SaaS Apps',
        cards: [
          { id: '57922', name: 'Developer License', price: '€925', term: 'per Developer', features: [{ name: 'For commercial app development', tooltip: 'For commercial application development.' }] },
          { id: '61408', name: 'Limited Annual Deployment', price: '€11,605', term: 'per Single Domain', features: [{ name: 'Deploy to one public domain', tooltip: 'Deploy to one public domain.' }] },
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
  // ... Add other products here following the same structure ...
];