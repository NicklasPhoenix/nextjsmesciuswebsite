// src/app/solutions/page.tsx
"use client";
import { useState, useEffect } from 'react';
import blueprintsData from '@/data/blueprints.json';
import styles from './solutions.module.css';
// Import the new components
import SolutionsHeader from './components/SolutionsHeader';
import FilterControls from './components/FilterControls';
import BlueprintGrid from './components/BlueprintGrid';

// Define the Blueprint interface based on your JSON structure
interface Blueprint {
  id: string;
  href: string;
  product: string;
  title: string;
  excerpt: string;
  frameworks: string[];
}

// Data for the main filter buttons. This could also be moved to a central data file.
const solutionGroups = [
  { id: 'all', label: 'All Solutions' },
  { id: 'web', label: 'Web & Mobile', technologies: ['js', 'wijmo', 'react', 'angular', 'vue'] },
  { id: 'net', label: '.NET', technologies: ['net', 'winforms', 'wpf', 'dotnet', 'ar', 'blazor', 'maui'] },
  { id: 'data', label: 'Data Tools', technologies: ['ds'] }
];

export default function SolutionsPage() {
  const [mainFilter, setMainFilter] = useState<string>('all');
  const [iconFilter, setIconFilter] = useState<string | null>(null);
  const [activeIconName, setActiveIconName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlueprints, setVisibleBlueprints] = useState<Blueprint[]>([]);

  useEffect(() => {
    let filtered: Blueprint[] = blueprintsData;
    const activeFilterId = iconFilter || mainFilter;

    // 1. Filter by the active solution group
    if (activeFilterId !== 'all') {
      const group = solutionGroups.find(g => g.id === activeFilterId);
      const filterTech = group?.technologies || [];
      filtered = filtered.filter(blueprint => 
        filterTech.includes(blueprint.product.toLowerCase()) ||
        blueprint.frameworks.some(fw => filterTech.includes(fw.toLowerCase()))
      );
    }

    // 2. Filter by the search term
    if (searchTerm.trim() !== '') {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(blueprint => 
        blueprint.title.toLowerCase().includes(lowercasedTerm) ||
        blueprint.excerpt.toLowerCase().includes(lowercasedTerm) ||
        blueprint.product.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    setVisibleBlueprints(filtered);
  }, [mainFilter, iconFilter, searchTerm]);

  const handleMainFilterClick = (groupId: string) => {
    setMainFilter(groupId);
    setIconFilter(null);
    setActiveIconName(null);
  };

  const handleIconFilterClick = (groupId: string, name: string) => {
    if (activeIconName === name) {
      setIconFilter(null);
      setActiveIconName(null);
    } else {
      setIconFilter(groupId);
      setActiveIconName(name);
    }
  };

  return (
    <main className={styles.main}>
      <SolutionsHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeIconName={activeIconName}
        onIconFilterClick={handleIconFilterClick}
      />

      <FilterControls
        solutionGroups={solutionGroups}
        currentFilter={mainFilter}
        onFilterClick={handleMainFilterClick}
        isIconFilterActive={!!iconFilter}
      />

      <BlueprintGrid
        blueprints={visibleBlueprints}
      />
    </main>
  );
}