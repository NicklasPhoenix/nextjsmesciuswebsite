import React from 'react';
import styles from '../solutions.module.css';

// MODIFIED: Simplified interface, no longer includes technologies.
interface SolutionGroup {
  id: string;
  label: string;
}

// MODIFIED: Simplified props, no longer includes icon filter state.
interface FilterControlsProps {
  solutionGroups: SolutionGroup[];
  currentFilter: string;
  onFilterClick: (groupId: string) => void;
}

export default function FilterControls({ 
  solutionGroups, 
  currentFilter, 
  onFilterClick,
}: FilterControlsProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.mainFilters}>
        {solutionGroups.map(group => (
          <button
            key={group.id}
            // MODIFIED: Simplified active state logic.
            className={currentFilter === group.id ? styles.active : ''}
            onClick={() => onFilterClick(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>
      {/* REMOVED: The entire secondary icon filter section is gone. */}
    </div>
  );
}