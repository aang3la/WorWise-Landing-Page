import React, { useState, useEffect } from 'react';
import logo from '../../lp-images/logo_team.png';
import menu from '../../lp-images/menu.png';
import {
  TopMenu,
  Logo,
  HamburgerMenu,
  NavbarList,
  NavItem,
  NavLink,
  ContactBtn,
} from './navigation.styled';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  const navItems = ['home', 'features', 'about', 'pricing'];
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(`#${activeSection}`);
  }, [activeSection]);

  const handleNavLinkClick = (href: string): void => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <TopMenu>
      <Logo className="logo-image" src={logo} alt="logo-image" />
      <HamburgerMenu onClick={toggleMobileMenu}>
        <img src={menu} alt="hamburger menu" width={23} />
      </HamburgerMenu>
      <NavbarList isMobileMenuOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <NavItem
            key={item}
            className={activeLink === `#${item}` ? 'active' : ''}
          >
            <NavLink
              href={`#${item}`}
              onClick={() => handleNavLinkClick(`#${item}`)}
              active={activeLink === `#${item}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </NavItem>
        ))}
        <Link to="mailto:info@moxelle.com">
          <ContactBtn>Contact</ContactBtn>
        </Link>
      </NavbarList>
    </TopMenu>
  );
};
