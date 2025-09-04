import styled from "styled-components";
import { colors } from "../../../styles";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 16px;
  background-color: #f8f8f8;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
`

export const HeaderLink = styled.a`
  margin: 0 12px;
  text-decoration: none;
  color: ${colors.title};
  transition: .3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    background-color: ${colors.primary}90;
    transform: scale(1.05);
  }
`;
