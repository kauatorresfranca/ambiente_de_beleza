import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";
import Button from "../button";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  padding: 16px;
  background-color: ${colors.background};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-hamgurguer {
    position: absolute;
    display: none;
    font-size: 24px;
  }

  @media(max-width: ${breakpoints.tablet}) {
    .menu-hamgurguer {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    .menu-hamgurguer {
      display: block;
    }
  }
`;

export const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const HeaderNavigationMobile = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: ${colors.background};
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border-radius: 0 0 10px 10px;

  &.active {
    max-height: 300px;
    opacity: 1;
    visibility: visible;
  }

  a {
    padding: 8px 12px;
  }
`;

export const HeaderLink = styled.a`
  margin: 0 12px;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  color: ${colors.title};
  transition: .3s ease;

  &:hover {
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.primary};
  }

  &.active {
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.primary};
  }
`;

export const HeaderButton = styled(Button)`

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;