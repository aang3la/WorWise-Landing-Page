import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
  PricingPackages,
  Content,
  PricingHeading,
  PricingInfo,
  Table,
  TableHeadings,
  TableData,
  TableData1,
  TableBody,
  PricingDownPart,
  PlanButton,
  Paragraph,
} from './pricing.styled';
import { tableData } from '../../content';
import checkImg from '../../lp-images/check.png';
import xImg from '../../lp-images/close.png';
import { LandingPageProps } from '../../landing-page';

const renderTableIcons = (content: string) => {
  if (content === 'checkImg') {
    return <img src={checkImg} alt="Check" />;
  }
  if (content === 'xImg') {
    return <img src={xImg} alt="X" />;
  }

  return content;
};

export const PricingList: React.FC<LandingPageProps> = forwardRef<
  HTMLDivElement,
  LandingPageProps
>((props, ref) => {
  return (
    <PricingPackages id="pricing" ref={ref}>
      <Content>
        <PricingHeading>
          Choose pricing plan which suits your needs
        </PricingHeading>
        <PricingInfo>
          Choose a Worwise plan that fits your budget and meets your team’s
          needs. Whether you’re a budding startup or an established enterprise,
          our scalable solutions are designed for you.
        </PricingInfo>
      </Content>

      <Table>
        <thead>
          <tr>
            <TableHeadings>PRICE PLANS</TableHeadings>
            <TableHeadings>$49/month Basic Pack</TableHeadings>
            <TableHeadings>$99/month Standard Pack</TableHeadings>
            <TableHeadings>$399/month Premium Pack</TableHeadings>
          </tr>
        </thead>
        <TableBody>
          {tableData.map((row, i) => (
            <tr key={i}>
              <TableData1>{row.feature}</TableData1>
              <TableData>{renderTableIcons(row.basic)}</TableData>
              <TableData>{renderTableIcons(row.standard)}</TableData>
              <TableData>{renderTableIcons(row.premium)}</TableData>
            </tr>
          ))}
        </TableBody>
      </Table>

      <PricingDownPart>
        <Link to="/register-company" target="blank">
          <PlanButton>Choose Your Plan</PlanButton>
        </Link>
        <Paragraph>
          Or Contact us for a custom plan. No hidden charges!
        </Paragraph>
      </PricingDownPart>
    </PricingPackages>
  );
});

PricingList.displayName = 'PricingList';
