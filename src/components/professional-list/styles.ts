import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Professionals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px 0 24px;
    text-align: center;
    background: ${colors.background};

    @media (max-width: ${breakpoints.tablet}) {
        padding: 48px 0px;
    }
`;

export const ProfessionalsTitle = styled.h2`
    font-size: 38px;
    color: ${colors.title};
    margin-bottom: 16px;

    span {
        color: ${colors.primary};
    }

    &::before {
        display: block;
        content: '';
        width: 70px;
        height: 4px;
        border-radius: 10px;
        background-color: ${colors.primary};
        margin: 0 auto 16px auto;
    }
`;

export const ProfessionalsDescription = styled.p`
    max-width: 600px;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.text};
    margin: 0 auto 32px auto;
`;

export const ProfessionalList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

/* Slider mobile */
export const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: none;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 0 8px;
  box-sizing: border-box;
`;

export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;

  svg {
    height: 22px;
    width: 22px;
  }

  &:hover {
    background: ${colors.primary};
    color: white;
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 8px;
`;

export const Indicators = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;

  button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: #ddd;
    cursor: pointer;

    &.active {
      background: ${colors.primary};
    }
  }
`;