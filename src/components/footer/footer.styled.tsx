import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #171718;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  padding-bottom: 15px;
`;

export const FooterLeft = styled.div`
  width: 30%;
  display: flex;
`;

export const FooterLists = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export const ListTitle = styled.li`
  font-weight: 600;
  font-size: 17px;
  padding-bottom: 15px;
  color: white;
`;

export const ListItemLeft = styled.li`
  padding-top: 10px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EmailLink = styled.a`
  color: white;
  text-decoration: underline;
`;

export const ListItem = styled.li`
  padding-top: 10px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: white;

  &:hover {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const Links = styled.a`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: white;
`;

export const FooterRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  list-style-type: none;

  @media (max-width: 768px) {
    gap: 50px;
  }
`;

export const FollowLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 10px;
`;
