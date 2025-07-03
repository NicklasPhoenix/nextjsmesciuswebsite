import React from 'react';
import styles from './CallToAction.module.css';
// MODIFIED: Import the required hooks from framer-motion
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  // Create a motion value to track hover progress (0 = not hovered, 1 = hovered)
  const hoverProgress = useMotionValue(0);

  // MODIFIED: The hover colors are now much closer to the initial colors for a more subtle, "glow" effect.
  const gradientColor1 = useTransform(hoverProgress, [0, 1], ["#6a11cb", "#6e1ad4"]);
  const gradientColor2 = useTransform(hoverProgress, [0, 1], ["#2575fc", "#2978fb"]);

  // Combine the transformed colors into a single motion value for the background
  const background = useTransform(
    [gradientColor1, gradientColor2],
    ([latestColor1, latestColor2]) => {
      return `linear-gradient(140deg, ${latestColor1} 0%, ${latestColor2} 80%)`;
    }
  );

  return (
    <motion.div
      className={styles.wrapper}
      // MODIFIED: Apply the animated background using the style prop
      style={{ background }}
      // MODIFIED: Add mouse events to update the hoverProgress motion value
      onMouseEnter={() => hoverProgress.set(1)}
      onMouseLeave={() => hoverProgress.set(0)}
      // Animate the y-position separately for the jump effect
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={styles.content}>
        <h2>Can't Find the Blueprint You Need?</h2>
        <p>Our library is always growing. Let us know what you're looking for, or contact our experts for a personalized solution.</p>
      </div>
      <div className={styles.actions}>
        <Link href="/request-a-blueprint" className={styles.primaryButton}>
          Request a Blueprint
        </Link>
        <Link href="/contact-sales" className={styles.secondaryButton}>
          Contact Sales
        </Link>
      </div>
    </motion.div>
  );
};

export default CallToAction;