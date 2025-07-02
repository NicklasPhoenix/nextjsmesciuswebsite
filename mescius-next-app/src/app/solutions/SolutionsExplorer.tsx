// src/components/SolutionsExplorer.tsx
'use client'; // This is an interactive component that runs in the browser

import { useState } from 'react';
import styles from './SolutionsExplorer.module.css';
import blueprintsData from '@/data/blueprints.json';
import type { Blueprint } from '@/lib/types';
import BlueprintCard from '../../components/BlueprintCard';

const typedBlueprintsData: Blueprint[] = blueprintsData;

// Define our filter buttons
const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'net', label: '.NET Suite' },
  { key: 'js', label: 'JavaScript' },
  { key: 'wijmo', label: 'Wijmo' },
  { key: 'ds', label: 'Documents' },
  { key: 'ar', label: 'Reporting' },
];

export default function SolutionsExplorer() {
  // State to keep track of the current filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter the blueprints based on the active filter
  const filteredBlueprints =
    activeFilter === 'all'
      ? typedBlueprintsData
      : typedBlueprintsData.filter((b) => b.product === activeFilter);

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