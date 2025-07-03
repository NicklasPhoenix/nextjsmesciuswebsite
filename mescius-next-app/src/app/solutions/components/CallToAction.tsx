import React from 'react';
import styles from './CallToAction.module.css';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <h2>Can't Find the Blueprint You Need?</h2>
      <p>Our library is always growing. Let us know what you're looking for, or contact our experts for a personalized solution.</p>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>Request a Blueprint</button>
        <button className={styles.secondaryButton}>Contact Sales</button>
      </div>
    </div>
  );
};

export default CallToAction;