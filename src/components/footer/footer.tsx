import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../lp-images/white_logo.png';
import email from '../../lp-images/mail.png';
import location from '../../lp-images/location.png';
import facebookLogo from '../../lp-images/facebook.png';
import instagramLogo from '../../lp-images/instagram.png';
import {
  FooterContainer,
  Logo,
  FooterLeft,
  FooterLists,
  ListItem,
  Links,
  ListItemLeft,
  EmailLink,
  ListTitle,
  FooterRight,
  FollowLinks,
  SocialMediaLinks,
} from './footer.styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLists>
          <Logo src={logo} alt="logo" />
          <ListItemLeft>
            <b>Get in touch</b>
          </ListItemLeft>
          <ListItemLeft>
            <img src={email} alt="email icon" />
            <EmailLink href="mailto:info@moxelle.com">
              info@moxelle.com
            </EmailLink>
          </ListItemLeft>
          <ListItemLeft>
            <img src={location} alt="location icon" />
            St. Majakovski 44/5, Skopje
          </ListItemLeft>
        </FooterLists>
      </FooterLeft>

      <FooterRight>
        <FooterLists>
          <ListTitle>Navigation</ListTitle>
          <ListItem>
            <Links href="#home">Home</Links>
          </ListItem>
          <ListItem>
            <Links href="#features">Features</Links>
          </ListItem>
          <ListItem>
            <Links href="#about">About</Links>
          </ListItem>
          <ListItem>
            <Links href="#pricing">Pricing</Links>
          </ListItem>
          <ListItem>
            <Links href="#faq">FAQ</Links>
          </ListItem>
        </FooterLists>

        <FollowLinks>
          <ListTitle>Follow us</ListTitle>
          <SocialMediaLinks>
            <Link to="https://www.facebook.com/profile.php?id=61564151662235">
              <img src={facebookLogo} alt="facebook logo" />
            </Link>

            <Link to="https://www.instagram.com/worwise_/">
              <img src={instagramLogo} alt="instagram logo" />
            </Link>
          </SocialMediaLinks>
        </FollowLinks>
      </FooterRight>
    </FooterContainer>
  );
};
