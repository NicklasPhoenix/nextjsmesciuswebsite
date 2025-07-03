// src/app/solutions/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import blueprintsData from '@/data/blueprints.json';
import styles from './solutions.module.css';
import { motion, Variants } from 'framer-motion';

import SolutionsHeader from './components/SolutionsHeader';
import BlueprintGrid from './components/BlueprintGrid';
import CallToAction from './components/CallToAction';

interface Blueprint {
  id: string;
  href: string;
  product: string;
  title: string;
  excerpt: string;
  frameworks: string[];
}

// Data for the header's icon grid
import techIconGroups from '@/data/solutionsPageData';

export default function SolutionsPage() {
  const [activeIconName, setActiveIconName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlueprints, setVisibleBlueprints] = useState<Blueprint[]>(blueprintsData);

  const handleIconFilterClick = (groupId: string, name: string) => {
    if (activeIconName === name) {
      setActiveIconName(null);
    } else {
      setActiveIconName(name);
    }
  };

  useEffect(() => {
    let filteredResult = [...blueprintsData];

    // 1. Icon filter
    if (activeIconName) {
      // Groups for JS & .NET
      const jsFrameworks = ['react', 'angular', 'vue', 'js'];
      const netFrameworks = ['dotnet', 'blazor', 'maui', 'winforms', 'wpf'];

      // FIXED: Simplified naming - no more mismatches
      const nameToIdMap: { [key: string]: string } = {
        'React': 'react',
        'Angular': 'angular',
        'Vue': 'vue',     // FIXED: Just Vue, not Vue.js
        'Blazor': 'blazor',
        'MAUI': 'maui',   // FIXED: Just MAUI, not .NET MAUI
        'WinForms': 'winforms',
        'WPF': 'wpf',
      };

      // Add logging for the active icon name
      console.log(`Active icon name: '${activeIconName}'`);
      
      if (activeIconName === 'All Solutions') {
        // Show everything
        filteredResult = [...blueprintsData];
      } else if (activeIconName === 'JavaScript') {
        filteredResult = filteredResult.filter(bp =>
          bp.frameworks.some(fw => jsFrameworks.includes(fw))
        );
      } else if (activeIconName === '.NET') {
        filteredResult = filteredResult.filter(bp =>
          bp.frameworks.some(fw => netFrameworks.includes(fw))
        );
      } else {
        // FIXED: Simple direct mapping with no special cases
        const frameworkId = nameToIdMap[activeIconName];
        console.log(`Framework ID for ${activeIconName}: ${frameworkId}`);
        
        if (frameworkId) {
          filteredResult = filteredResult.filter(bp => {
            return bp.frameworks.includes(frameworkId);
          });
        } else {
          filteredResult = [];
        }
      }
      
      console.log(`Found ${filteredResult.length} results for ${activeIconName}`);
    }

    // 2. Search filter
    if (searchTerm.trim() !== '') {
      const lowercasedTerm = searchTerm.toLowerCase();
      filteredResult = filteredResult.filter(blueprint =>
        blueprint.title.toLowerCase().includes(lowercasedTerm) ||
        blueprint.excerpt.toLowerCase().includes(lowercasedTerm)
      );
    }

    setVisibleBlueprints(filteredResult);
  }, [activeIconName, searchTerm]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.main
      className={styles.main}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        {/* RESTORED: Pass all required props to the header */}
        <SolutionsHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeIconName={activeIconName}
          onIconFilterClick={handleIconFilterClick}
        />
      </motion.div>

      {/* REMOVED: The separate FilterControls component is gone */}

      <motion.div variants={itemVariants}>
        <BlueprintGrid
          blueprints={visibleBlueprints}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>
    </motion.main>
  );
}