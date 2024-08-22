import React, { forwardRef } from 'react';
import mobile from '../../lp-images/mobile.png';
import check from '../../lp-images/check-icon.png';
import {
  AboutContainer,
  AboutBox,
  AboutInfo,
  ImageContainer,
  Image,
  Heading,
  AboutParagraphs,
} from './about.styled';
import { LandingPageProps } from '../../landing-page';

export const About: React.FC<LandingPageProps> = forwardRef<
  HTMLDivElement,
  LandingPageProps
>((props, ref) => {
  return (
    <>
      <AboutContainer id="about" ref={ref}>
        <AboutBox>
          <ImageContainer>
            <Image src={mobile} alt="screen-job-offers" />
          </ImageContainer>
          <AboutInfo>
            <Heading>
              Powerful tool for innovative workforce management solutions
            </Heading>

            <AboutParagraphs>
              Discover the game-changing features of WorWise, your ultimate
              recruitment ally:
            </AboutParagraphs>
            <AboutParagraphs>
              <img src={check} alt="check-icon" />
              <strong> Effortless Recruitment:</strong> Simplify hiring with a
              personalized careers page and intuitive dashboard.
            </AboutParagraphs>
            <AboutParagraphs>
              <img src={check} alt="check-icon" />
              <strong> Seamless Candidate Tracking: </strong> Manage
              applications smoothly from start to finish.
            </AboutParagraphs>
            <AboutParagraphs>
              <img src={check} alt="check-icon" />
              <strong> AI-Powered Matching: </strong> Quickly connect with top
              talent using advanced AI for smarter hiring decisions.
            </AboutParagraphs>
          </AboutInfo>
        </AboutBox>
      </AboutContainer>
    </>
  );
});

About.displayName = 'About';
