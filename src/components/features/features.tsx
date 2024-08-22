import React, { forwardRef } from 'react';
import { featureList } from '../../content';
import { FeaturesContainer, Heading, Cards } from './features.styled';
import { FeatureCard } from '../feature-card/feature-card';
import { LandingPageProps } from '../../landing-page';

export const Features: React.FC<LandingPageProps> = forwardRef<
  HTMLDivElement,
  LandingPageProps
>((props, ref) => {
  return (
    <FeaturesContainer id="features" ref={ref}>
      <Heading>Awesome features for effortless hiring</Heading>
      <Cards>
        {featureList.map((feature, i) => (
          <FeatureCard
            key={i}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Cards>
    </FeaturesContainer>
  );
});

Features.displayName = 'Features';
