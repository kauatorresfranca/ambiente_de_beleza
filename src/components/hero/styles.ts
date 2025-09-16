import styled from "styled-components";
import HeroImage from "../../assets/images/hero.svg";
import { breakpoints, colors } from "../../../styles";

export const Hero = styled.section`
  position: relative;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 112px);
  padding: 40px 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-position: center;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  max-width: 630px;

  &::before {
    content: "";
    width: 70px;
    height: 4px;
    border-radius: 10px;
    background-color: ${colors.primary};
    margin-bottom: 16px;
`;


export const HeroTitle = styled.h2`
  font-size: 52px;
  color: ${colors.white};
  margin-bottom: 16px;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.h2`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  max-width: 540px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    max-width: 320px;
  }
`;
