import React from 'react';
import BlueprintCard from '@/components/BlueprintCard';
import styles from '../solutions.module.css';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion components

interface Blueprint {
  id: string;
  href: string;
  product: string;
  title: string;
  excerpt: string;
  frameworks: string[];
}

interface BlueprintGridProps {
  blueprints: Blueprint[];
  // The gridRef is no longer needed for this animation approach, so we can remove it.
}

export default function BlueprintGrid({ blueprints }: BlueprintGridProps) {
  return (
    <motion.div layout className={styles.blueprintsGrid}>
      {/* MODIFIED: Add mode="popLayout" to handle layout changes more smoothly */}
      <AnimatePresence mode="popLayout">
        {blueprints.length > 0 ? (
          blueprints.map(bp => (
            <motion.div
              key={bp.id}
              // MODIFIED: Change layout to "position" to only animate the element's transform
              layout="position"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BlueprintCard {...bp} />
            </motion.div>
          ))
        ) : (
          // We can also animate the "empty state" message
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.emptyState}
          >
            <h3>No Blueprints Found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}