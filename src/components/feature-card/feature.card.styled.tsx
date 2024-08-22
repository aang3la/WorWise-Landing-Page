import styled from 'styled-components';

export const Card = styled.div`
  width: 250px;
  height: 300px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 220px;
  }
`;

export const CardHeading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #131313;
`;

export const CardDesc = styled.p`
  font-size: 14px;
  color: #383838;
`;

export const Image = styled.img`
  width: 50px;
  padding-bottom: 20px;
`;
