export interface PriceCard {
  id: string;
  name: string;
  price: string;
  term: string;
  features: string[];
  badge?: string;
}

export interface LicenseTab {
  id: string;
  title: string;
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
    id: 'c1',
    name: 'ComponentOne',
    platform: 'net',
    description: 'The complete UI toolkit for .NET developers, including hundreds of controls for WinForms, WPF, Blazor, and MAUI.',
    accentColor: '#D6564C',
    tabs: [
      {
        id: 'c1-new',
        title: 'New Licenses',
        cards: [
          { id: '54087', name: 'Studio Enterprise', price: '€1,385', term: 'per Developer', features: ['All platforms included', 'Web, Desktop & Mobile'], badge: 'Recommended' },
          { id: '60892', name: 'WinForms Data Services', price: '€1,205', term: 'per Developer', features: ['Advanced data controls'] },
          { id: '53600', name: 'ActiveX Edition', price: '€1,385', term: 'per Developer', features: ['Legacy ActiveX support'] },
          { id: '53597', name: 'WinForms Edition', price: '€925', term: 'per Developer', features: ['Essential WinForms controls'] },
          { id: '55920', name: 'WPF Edition', price: '€925', term: 'per Developer', features: ['Robust WPF controls'] },
          { id: '61875', name: 'WinUI & MAUI Edition', price: '€925', term: 'per Developer', features: ['Modern UI for WinUI & MAUI'] },
          { id: '58274', name: 'ASP.NET MVC Edition', price: '€835', term: 'per Developer', features: ['MVC controls for web apps'] },
          { id: '60326', name: 'Blazor Edition', price: '€465', term: 'per Developer', features: ['Native Blazor UI components'] },
        ],
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
          { id: '60976', name: 'Hostname License Pack', price: '€1,855', term: 'for 3-5 Hostnames', features: ['Deploy to multiple internal sites'], badge: 'Best Value' },
          { id: '62805', name: 'Dev + Hostname Bundle', price: '€1,395', term: 'per Dev Bundle / year', features: ['1 Dev License + 1 Hostname'] },
          { id: '60974', name: 'Annual Hostname License', price: '€555', term: 'for 1 Hostname', features: ['Annual subscription'] },
        ],
      },
      {
        id: 'sjs-com',
        title: 'Paid & SaaS Apps',
        cards: [
          { id: '57922', name: 'Developer License', price: '€925', term: 'per Developer', features: ['For commercial app development'] },
          { id: '61408', name: 'Limited Annual Deployment', price: '€11,605', term: 'per Single Domain', features: ['Deploy to one public domain'] },
          { id: 'sjs-unlimited-annual', name: 'Unlimited Annual Deployment', price: 'Contact Us', term: 'for a quote', features: ['For large-scale deployments'] },
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