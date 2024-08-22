import styled from 'styled-components';
import shape from '../../lp-images/shape.png';

export const AboutContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 70px 130px;
  background: url(${shape});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    padding: 70px 0;
    background: none;
  }
`;

export const AboutBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 650px;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 60%;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const AboutInfo = styled.div`
  flex: 40%;
  color: #1c1c1c;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 38px;
  text-decoration: underline 5px #f9846f29;

  @media (max-width: 1200px) {
    font-size: 25px;
    margin: 20px;
  }
`;

export const AboutParagraphs = styled.p`
  color: #131313;
  font-weight: 500;
  line-height: 28px;
  font-size: 16px;

  @media (max-width: 1200px) {
    font-size: 14px;
    margin: 20px;
  }
`;
