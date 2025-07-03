// src/components/Hero.tsx
"use client";
import Link from 'next/link';
import BlueprintCard from './BlueprintCard';
import blueprints from '../data/blueprints.json';
import styles from './Hero.module.css';
import React from 'react';

export default function Hero() {
  // Feature the first, most important blueprint.
  const featuredBlueprint = blueprints[0];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Build
            <br />
            Better <span className={styles.gradientBlue}>Applications</span> <span className={styles.gradientPurple}>Faster</span>
          </h1>
          <p className={styles.subheadline}>
            Mescius gives you the UI controls, reporting, and data tools to accelerate enterprise app development, modernize legacy projects, and deliver outstanding user experiences—faster.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/solutions" className="btn btnPrimary">
              Explore Solutions
            </Link>
            <Link href="/products" className="btn btnSecondary">
              Browse Products
            </Link>
          </div>
        </div>
        {/* NEW: A spotlight visual for a single, featured card */}
        <div className={styles.visual}>
          <div className={styles.cardWrapper}>
            <BlueprintCard {...featuredBlueprint} />
          </div>
        </div>
      </div>
    </section>
  );
}