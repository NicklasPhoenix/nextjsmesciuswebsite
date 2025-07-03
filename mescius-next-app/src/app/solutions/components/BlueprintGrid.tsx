import React from 'react';
import BlueprintCard from '@/components/BlueprintCard';
import styles from '../solutions.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
}

const BlueprintGrid = ({ blueprints }: BlueprintGridProps) => {
  return (
    <div className={styles.grid}>
      <AnimatePresence>
        {blueprints.length > 0 ? (
          blueprints.map(blueprint => (
            <motion.div
              key={blueprint.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <BlueprintCard blueprint={blueprint} />
            </motion.div>
          ))
        ) : (
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
    </div>
  );
};

export default BlueprintGrid;