import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const TestimonialsSection = styled.section`
  padding: 64px 16px;
  text-align: center;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;

  span {
    color: ${colors.primary};
  }
`;

export const TestimonialsDescription = styled.p`
  font-size: 16px;
  color: ${colors.text};
  margin-bottom: 32px;
`;

export const DesktopList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  padding: 8px;
`;

export const Card = styled.article`
  max-width: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  min-height: 300px; /* garante consistência */
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
  -webkit-line-clamp: 4; /* máximo de 4 linhas no desktop */
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
  background: #fff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  padding: 6px;
  cursor: pointer;
  z-index: 2; /* abaixo do header (que é 3) */
`;

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 8px;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 6px;

  button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: #ccc;
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
  z-index: 999; /* acima de tudo */

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
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
  }
`;
