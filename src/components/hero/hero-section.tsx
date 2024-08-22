import React, { forwardRef } from 'react';
import heroImg from '../../lp-images/heroImg.png';
import {
  HeroBox,
  HeroContent,
  HeroHeadline,
  HeroParagraph,
  ImgContainer,
  HeroImg,
  HeroBtn,
  Linked,
} from './hero-section.styled';
import { LandingPageProps } from '../../landing-page';

export const HeroSection: React.FC<LandingPageProps> = forwardRef<
  HTMLDivElement,
  LandingPageProps
>((props, ref) => {
  return (
    <HeroBox id="home" ref={ref}>
      <HeroContent>
        <HeroHeadline>
          Transform Your Hiring Process With Our Cutting-Edge SAAS Platform!
        </HeroHeadline>
        <HeroParagraph>
          Revamp your hiring process with our AI-powered SaaS platform! Enjoy a
          personalized job dashboard and AI-driven candidate suggestions for
          seamless recruitment.
        </HeroParagraph>
        <Linked href="#pricing">
          <HeroBtn>Get Started</HeroBtn>
        </Linked>
      </HeroContent>
      <ImgContainer>
        <HeroImg src={heroImg} alt="hero-image" />
      </ImgContainer>
    </HeroBox>
  );
});

HeroSection.displayName = 'HeroSection';
