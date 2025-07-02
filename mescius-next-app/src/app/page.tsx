// src/app/page.tsx
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import CoreTechnologies from '@/components/CoreTechnologies'; // Import the new component

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedSolutions />
      <CoreTechnologies /> {/* Place it at the end */}
    </>
  );
}