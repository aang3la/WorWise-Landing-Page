import React, { useEffect, useRef, useState } from 'react';
import { NavigationBar } from './components/navigation/navigation';
import { HeroSection } from './components/hero/hero-section';
import { GeneralStyle } from './landing-page.styled';
import { Features } from './components/features/features';
import { About } from './components/about/about';
import { PricingList } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import { ScrollToTopBtn } from './components/scroll-btn/scroll-btn';

export type LandingPageProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement>;

export const LandingPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <GeneralStyle>
      <NavigationBar activeSection={activeSection} />
      <HeroSection
        ref={(el: HTMLDivElement | null) => (sectionRefs.current[0] = el)}
      />
      <Features
        ref={(el: HTMLDivElement | null) => (sectionRefs.current[1] = el)}
      />
      <About
        ref={(el: HTMLDivElement | null) => (sectionRefs.current[2] = el)}
      />
      <PricingList
        ref={(el: HTMLDivElement | null) => (sectionRefs.current[3] = el)}
      />
      <Faq />
      <Footer />
      <ScrollToTopBtn />
    </GeneralStyle>
  );
};
