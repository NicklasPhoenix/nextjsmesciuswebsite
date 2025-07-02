// src/components/Hero.tsx
import Link from 'next/link';
import styles from './Hero.module.css';
import BlueprintCard from './BlueprintCard'; // Import our actual card component

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
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Build Better
            <br />
            <span className="gradient-text">Data-Driven</span> Applications
          </h1>
          <p className={styles.subheadline}>
            From high-performance datagrids to automated reporting, leverage our components to build powerful, enterprise-grade applications, faster.
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
          {/* We now use our REAL BlueprintCard component here */}
          <BlueprintCard {...featuredBlueprint} />
        </div>
      </div>
    </section>
  );
}