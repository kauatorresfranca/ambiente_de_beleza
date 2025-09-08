import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  text-align: center;
  background: ${colors.background};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0px;
  }
`

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

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 24px;
    padding-left: 24px;
  }
`

export const TestimonialsDescription = styled.p`
  max-width: 600px;
  font-size: 16px;
  color: ${colors.text};
  margin: 0 auto 32px auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 24px;
    padding-left: 24px;
  }
`

/* Grid desktop */
export const DesktopList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

/* Slider mobile */
export const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: none;
  padding: 0 16px; /* Added padding to ensure content doesn't touch edges */
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`

export const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 0 8px; /* Added padding to prevent content from touching edges */
  box-sizing: border-box;
`

export const Card = styled.article`
  max-width: 100%; /* Changed from fixed max-width to prevent overflow */
  width: 100%;
  border-radius: 16px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.title};
    text-align: left;
  }
`

export const Rating = styled.div`
  display: flex;
  gap: 2px;

  svg {
    height: 16px;
    width: 16px;
    color: ${colors.primary};
  }
`

export const Text = styled.p`
  color: ${colors.text};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
  text-align: left;
`

export const ResultThumb = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`

/* Arrows e Indicators só no mobile */
export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 8px; /* Adjusted to sit closer to the edge */
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 10; /* Ensures arrows are above the card */

  svg {
    height: 22px;
    width: 22px;
  }

  &:hover {
    background: ${colors.primary};
    color: white;
  }
`

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 8px; /* Adjusted to sit closer to the edge */
`

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
`