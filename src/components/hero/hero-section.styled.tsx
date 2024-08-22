import styled from 'styled-components';
import bannerImg from '../../lp-images/banner.png';

export const HeroBox = styled.div`
  width: 100%;
  flex: 1;
  height: 750px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 40px;
  background: url(${bannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 750px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeroContent = styled.div`
  flex: 50%;
  padding-left: 180px;

  @media (max-width: 768px) {
    text-align: center;
    flex: 1;
    padding: 25px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    flex: 80%;
    padding-left: 50px;
  }
`;

export const HeroHeadline = styled.h1`
  font-size: 45px;
  font-weight: 800;
  line-height: 70px;
  color: #131313;
  text-decoration: underline 10px #f9846f29;
  text-underline-offset: 10px;

  @media (max-width: 768px) {
    font-size: 29px;
    line-height: 45px;
    text-decoration: underline 7px #f9846f29;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 35px;
    line-height: 55px;
  }
`;

export const HeroParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: #383838;
  padding: 25px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImgContainer = styled.div`
  flex: 70%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: 1;
    margin: 20px;
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    flex: 100%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: translateX(10%);

  @media (max-width: 768px) {
    transform: none;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    transform: none;
  }
`;

export const HeroBtn = styled.button`
  font-weight: 800;
  font-size: 17px;
  padding: 20px 50px;
  border: none;
  border-radius: 30px;
  color: white;
  background-color: #f9836f;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #5e6b8c;
  }

  @media (max-width: 768px) {
    padding: 15px 40px;
    font-size: 16px;
  }
`;

export const Linked = styled.a`
  scroll-behavior: smooth;
`;
