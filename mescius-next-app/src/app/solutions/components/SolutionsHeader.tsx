import { FaSearch } from 'react-icons/fa';
import styles from './SolutionsHeader.module.css';
import techIconGroups, { TechIconGroup, TechIconItem } from './techIconGroupsData';

interface SolutionsHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeIconName: string | null;
  onIconFilterClick: (groupId: string, name: string) => void;
}

export default function SolutionsHeader({ 
  searchTerm, 
  onSearchChange, 
  activeIconName, 
  onIconFilterClick 
}: SolutionsHeaderProps) {
  return (
    <header className={styles.header}>
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
        <div className={styles.techGroupsContainer}>
          {techIconGroups.map((group: TechIconGroup) => (
            <div key={group.title} className={styles.techGroup}>
              {group.title && <h4 className={styles.techGroupTitle}>{group.title}</h4>}
              <div className={styles.techGroupIcons}>
                {group.icons.map((item: TechIconItem) => (
                  <div
                    key={item.name}
                    className={`${styles.techIcon} ${activeIconName === item.name ? styles.active : ''}`}
                    onClick={() => onIconFilterClick(item.filterGroupId, item.name)}
                  >
                    {item.icon}
                    <span className={styles.tooltipText}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}