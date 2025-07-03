// src/app/solutions/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import BlueprintCard from '@/components/BlueprintCard';
import blueprints from '@/data/blueprints.json';
import styles from './solutions.module.css';
// Import icons
import { FaReact, FaAngular, FaVuejs, FaJs, FaMicrosoft, FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { SiDotnet, SiBlazor } from 'react-icons/si';
// Import the new component
import SolutionsHeader from './components/SolutionsHeader';

// Define the Blueprint interface based on your JSON structure
interface Blueprint {
  id: string;
  href: string;
  product: string;
  title: string;
  excerpt: string;
  frameworks: string[];
}

// --- DATA (This can be moved to its own file, e.g., app/solutions/data.ts) ---
export const solutionGroups = [
  { id: 'all', label: 'All Solutions' },
  { id: 'web', label: 'Web & Mobile', technologies: ['js', 'wijmo', 'react', 'angular', 'vue'] },
  { id: 'net', label: '.NET', technologies: ['net', 'winforms', 'wpf', 'dotnet', 'ar', 'blazor', 'maui'] },
  { id: 'data', label: 'Data Tools', technologies: ['ds'] }
];

export const DotNetTextIcon = () => <span className={styles.textIcon}>.NET</span>;

export const techIconGroups = [
  {
    title: 'Web & Mobile',
    icons: [
      { icon: <FaJs />, name: 'JavaScript', filterGroupId: 'web' },
      { icon: <FaReact />, name: 'React', filterGroupId: 'web' },
      { icon: <FaAngular />, name: 'Angular', filterGroupId: 'web' },
      { icon: <FaVuejs />, name: 'Vue', filterGroupId: 'web' },
    ]
  },
  {
    title: '.NET',
    icons: [
      { icon: <DotNetTextIcon />, name: '.NET', filterGroupId: 'net' },
      { icon: <SiBlazor />, name: 'Blazor', filterGroupId: 'net' },
      { icon: <FaMobileAlt />, name: 'MAUI', filterGroupId: 'net' },
      { icon: <FaDesktop />, name: 'WPF', filterGroupId: 'net' },
    ]
  },
  {
    title: '', // Remove the "View All" title for a cleaner look
    icons: [
       { icon: <FaCode />, name: 'All Solutions', filterGroupId: 'all' },
    ]
  }
];
// --- END OF DATA ---

export default function SolutionsPage() {
  const [mainFilter, setMainFilter] = useState<string>('all');
  const [iconFilter, setIconFilter] = useState<string | null>(null);
  const [activeIconName, setActiveIconName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlueprints, setVisibleBlueprints] = useState<Blueprint[]>([]);
  const blueprintsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let filtered = blueprints;
    const activeFilterId = iconFilter || mainFilter; // Use iconFilter if it exists, otherwise use mainFilter

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

      <div className={styles.filters}>
        {/* This can be the FilterControls component */}
        {solutionGroups.map(group => (
          <button
            key={group.id}
            className={mainFilter === group.id && !iconFilter ? styles.active : ''}
            onClick={() => handleMainFilterClick(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className={styles.blueprintsGrid} ref={blueprintsRef}>
        {/* This can be the BlueprintGrid component */}
        {visibleBlueprints.length > 0 ? (
          visibleBlueprints.map(bp => <BlueprintCard key={bp.id} {...bp} />)
        ) : (
          <div className={styles.emptyState}>
            <h3>No Blueprints Found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}