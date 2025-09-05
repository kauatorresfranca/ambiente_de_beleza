import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

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
`;

export const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 12px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderNavigationMobile = styled.nav`
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
  }
`

export const HeaderLink = styled.a`
  margin: 0 12px;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 0;
  border-bottom: 3px solid transparent;
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
