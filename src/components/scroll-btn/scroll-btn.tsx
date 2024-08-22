import React, { useState, useEffect } from 'react';
import { Button } from './scroll-btn.styled';
import upArrow from '../../lp-images/up.png';

export const ScrollToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const homeComponentHeight =
      document.getElementById('home')?.offsetHeight || 0;
    if (window.scrollY > homeComponentHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <Button onClick={scrollToTop}>
      <img src={upArrow} alt="arrow-up" />
    </Button>
  ) : null;
};
