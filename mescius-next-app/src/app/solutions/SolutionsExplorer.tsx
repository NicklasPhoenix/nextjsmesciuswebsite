// src/components/SolutionsExplorer.tsx
'use client'; // This is an interactive component that runs in the browser

import { useState } from 'react';
import styles from './SolutionsExplorer.module.css';
import blueprintsData from '@/data/blueprints.json';
import type { Blueprint } from '@/lib/types';
import BlueprintCard from '../../components/BlueprintCard';

// Convert raw data to typed data
const typedBlueprintsData: Blueprint[] = blueprintsData;

// Define filter options and the frameworks they should show
const filters = [
  { key: 'all', label: 'All Products' },
  // Show any blueprint with one of these .NET frameworks in its array:
  { key: 'net', label: '.NET Suite', frameworks: ['dotnet', 'blazor', 'maui', 'winforms', 'wpf'] },
  // Show any blueprint with one of these JS frameworks in its array:
  { key: 'js', label: 'JavaScript', frameworks: ['react', 'angular', 'vue'] },
  // Simple single-framework filters:
  { key: 'wijmo', label: 'Wijmo', frameworks: ['wijmo'] },
  { key: 'ds', label: 'Documents', frameworks: ['documents'] },
  { key: 'ar', label: 'Reporting', frameworks: ['reporting'] },
];

export default function SolutionsExplorer() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter blueprints by matching frameworks, unless "all".
  const filteredBlueprints =
    activeFilter === 'all'
      ? typedBlueprintsData
      : typedBlueprintsData.filter((b) =>
          b.frameworks.some((fw) =>
            filters
              .find((f) => f.key === activeFilter)
              ?.frameworks?.includes(fw)
          )
        );

  return (
    <div>
      {/* Filter Toolbar */}
      <div className={styles.filterToolbar}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={activeFilter === filter.key ? styles.active : ''}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Blueprint Grid */}
      <div className={styles.grid}>
        {filteredBlueprints.map((blueprint) => (
          <BlueprintCard key={blueprint.id} {...blueprint} />
        ))}
      </div>
    </div>
  );
}