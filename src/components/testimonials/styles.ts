import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px 32px 24px;
  text-align: center;
  background: ${colors.background};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0px;
  }
`;

export const TestimonialsTitle = styled.h2`
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

export const TestimonialsDescription = styled.p`
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.text};
  margin: 0 auto 32px auto;
`;

export const DesktopList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

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

export const Card = styled.article`
  max-width: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 2px;

  i {
    color: ${colors.primary};
  }
`;

export const Text = styled.p`
  color: ${colors.text};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.tablet}) {
    -webkit-line-clamp: unset;
    overflow: visible;
  }
`;

export const ResultThumb = styled.div`
  margin-top: 12px;

  img {
    width: 100%;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
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

export const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;