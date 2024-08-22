import React from 'react';
import { Card, CardHeading, CardDesc, Image } from './feature.card.styled';

type FeatureProps = {
  img: string;
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <Card>
      <Image src={img} />
      <CardHeading>{title}</CardHeading>
      <CardDesc>{description}</CardDesc>
    </Card>
  );
};
