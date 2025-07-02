// src/components/Hero.tsx
"use client";
import Link from 'next/link';
import { useRef, useEffect } from "react";
import BlueprintCard from './BlueprintCard';
import styles from './Hero.module.css';

// Sample data for the card we want to display
const featuredBlueprint = {
  id: "desktop-evolution",
  href: "/solutions/desktop-evolution",
  product: "net",
  title: "Desktop Evolution",
  excerpt: "Transform legacy WinForms & WPF applications into modern, high-performance powerhouses.",
  frameworks: ["winforms", "wpf"]
};

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleAnimationEnd = () => {
      card.classList.add(styles.settled);
      card.style.animation = "none";
    };
    card.addEventListener("animationend", handleAnimationEnd);
    return () => card.removeEventListener("animationend", handleAnimationEnd);
  }, []);

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
        <div className={styles.visual}>
          <div ref={cardRef}>
            {/* We now use our REAL BlueprintCard component here */}
            <BlueprintCard {...featuredBlueprint} />
          </div>
        </div>
      </div>
    </section>
  );
}