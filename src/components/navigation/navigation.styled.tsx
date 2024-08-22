import styled from 'styled-components';

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #f8f9fa;
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 15px 0;
  }
`;

export const Logo = styled.img`
  width: 150px;

  @media (max-width: 768px) {
    margin-left: 20px;
    width: 120px;
  }
`;

export const NavbarList = styled.ul<{ isMobileMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f8f9fa;
    z-index: 1000;
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const NavLink = styled.a<{ active?: boolean }>`
  font-size: 18px;
  font-weight: ${(props) => (props.active ? 700 : 600)};
  color: ${(props) => (props.active ? '#f9836f' : '#666e82')} !important;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ContactBtn = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  color: #f9836f;
  font-weight: 700;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #f9836f;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;
