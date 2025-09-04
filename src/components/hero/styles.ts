import styled from "styled-components";
import HeroImage from "../../assets/hero.jpeg";
import { colors } from "../../../styles";

export const Hero = styled.section`
  position: relative;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 72px);
  padding: 40px 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 1;
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
`;

export const HeroSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  max-width: 540px;
`;

export const HeroButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px; 
}`;

export const HeroButton = styled.button<{ primary?: boolean; secondary?: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  `
