import styled from 'styled-components';

export const PricingPackages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const PricingHeading = styled.h2`
  font-size: 40px;
  text-align: center;
  text-decoration: underline 7px #f9846f29;
  text-underline-offset: 9px;

  @media (max-width: 768px) {
    font-size: 25px;
    text-underline-offset: 8px;
  }
`;

export const PricingInfo = styled.p`
  font-size: 15px;
  line-height: 25px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table = styled.table`
  width: 90%;
  max-width: 1100px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TableHeadings = styled.th`
  font-size: 19px;
  padding: 0 20px;
  height: 100px;
  background-color: #f9846fb6;
  color: white;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px;
  }
`;

export const TableData = styled.td`
  text-align: center;
  padding: 13px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const TableData1 = styled.td`
  padding-left: 25px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 12px;
    padding: 5px;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const PricingDownPart = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlanButton = styled.button`
  padding: 18px 60px;
  font-size: 18px;
  color: black;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #f9846fb6;
    color: white;
    border: 1px solid white;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin-top: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #383838;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 0 30px;
  }
`;
