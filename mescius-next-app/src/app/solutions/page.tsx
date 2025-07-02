// src/app/solutions/page.tsx
import SolutionsExplorer from './SolutionsExplorer';
import styles from './solutions.module.css';

export default function SolutionsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Solution Blueprints</h1>
        <p>Practical guides and implementation patterns for solving common development challenges with Mescius components.</p>
      </div>
      <SolutionsExplorer />
    </main>
  );
}