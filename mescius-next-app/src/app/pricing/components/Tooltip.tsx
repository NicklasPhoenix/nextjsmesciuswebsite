'use client';

import React from 'react';
import styles from '../Pricing.module.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  // Do not render the tooltip if there is no text to display.
  if (!text) {
    return <>{children}</>;
  }

  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div className={styles.tooltipText}>{text}</div>
    </div>
  );
};

export default Tooltip;