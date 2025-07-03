import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

import styles from './SolutionsHeader.module.css';
import techIconGroups, { TechIconGroup, TechIconItem } from '@/data/solutionsPageData';

interface SolutionsHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeIconName: string | null;
  onIconFilterClick: (groupId: string, name: string) => void;
}

// MODIFIED: Wrap component in React.forwardRef to accept motion props
const SolutionsHeader = React.forwardRef<HTMLElement, SolutionsHeaderProps>(
  ({ searchTerm, onSearchChange, activeIconName, onIconFilterClick }, ref) => {
    
    // Variants for the icon grid container to stagger children
    const iconGridVariants: Variants = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05, // A slight delay between each icon
        },
      },
    };

    // Variants for each individual icon
    const iconItemVariants: Variants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 500, damping: 30 },
      },
    };

    return (
      <header className={styles.header} ref={ref}>
        <div className={styles.headerContent}>
          <h1>Solution Blueprints</h1>
          <p>Find practical guides and patterns to solve your development challenges.</p>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search by name, technology, or keyword..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
        
        <div className={styles.headerVisual}>
          {/* MODIFIED: Apply container variants to the grid */}
          <motion.div
            className={styles.techIconGrid}
            variants={iconGridVariants}
            initial="hidden"
            animate="visible"
          >
            {techIconGroups.map((group: TechIconGroup, groupIndex) => (
              <div key={groupIndex} className={styles.iconGroup}>
                <div className={styles.iconRow}>
                  {group.icons.map((item: TechIconItem, itemIndex) => (
                    // MODIFIED: Wrap each icon in a motion.div for animation
                    <motion.div
                      key={itemIndex}
                      className={`${styles.techIcon} ${activeIconName === item.name ? styles.active : ''}`}
                      onClick={() => onIconFilterClick(item.filterGroupId, item.name)}
                      variants={iconItemVariants} // Apply item animation
                      whileHover={{ scale: 1.2, zIndex: 1 }} // Add hover effect
                      whileTap={{ scale: 0.9 }} // Add tap effect
                    >
                      {item.icon}
                      <span className={styles.tooltipText}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>
    );
  }
);

SolutionsHeader.displayName = 'SolutionsHeader';
export default SolutionsHeader;