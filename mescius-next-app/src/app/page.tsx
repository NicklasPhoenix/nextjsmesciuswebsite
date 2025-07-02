// src/app/page.tsx
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import CoreTechnologies from '@/components/CoreTechnologies';
import FadeInOnScroll from '@/components/FadeInOnScroll';

export default function Home() {
  return (
    <>
      <Hero />
      
      <FadeInOnScroll>
        <LogoStrip />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <FeaturedSolutions />
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <CoreTechnologies />
      </FadeInOnScroll>
    </>
  );
}