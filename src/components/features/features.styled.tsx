import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  padding: 40px 130px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  text-decoration: underline 8px #f9846f29;
  text-underline-offset: 9px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-decoration: underline 5px #f9846f29;
    text-underline-offset: 7px;
    min-width: 300px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    justify-items: center;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
