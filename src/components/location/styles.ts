import styled from 'styled-components';
import { colors } from '../../../styles';

export const Location = styled.div`
    height: 480px;
    padding: 48px 24px;
    text-align: center;

  .container {
    height: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }
`;

export const LocationTitle = styled.h2`
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

export const LocationDescription = styled.p`
    max-width: 600px;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.text};
    margin: 0 auto 32px auto;
`;

export const LocationInfo = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;