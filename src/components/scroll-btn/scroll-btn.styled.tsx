import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 40px;
  padding: 10px 15px;
  border: 2px solid #f9846f;
  background: transparent;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 10px;
    padding: 6px 10px;
    border: none;
    background-color: white;
  }
`;
