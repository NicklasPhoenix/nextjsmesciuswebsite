import styles from '../solutions.module.css';

interface SolutionGroup {
  id: string;
  label: string;
}

interface FilterControlsProps {
  solutionGroups: SolutionGroup[];
  currentFilter: string;
  onFilterClick: (groupId: string) => void;
  isIconFilterActive: boolean;
}

export default function FilterControls({ 
  solutionGroups, 
  currentFilter, 
  onFilterClick,
  isIconFilterActive
}: FilterControlsProps) {
  return (
    <div className={styles.filters}>
      {solutionGroups.map(group => (
        <button
          key={group.id}
          className={currentFilter === group.id && !isIconFilterActive ? styles.active : ''}
          onClick={() => onFilterClick(group.id)}
        >
          {group.label}
        </button>
      ))}
    </div>
  );
}