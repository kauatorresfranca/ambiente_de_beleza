import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Location = styled.div`
  padding: 48px 24px;
  text-align: center;

  .container {
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
      height: auto; /* mais flexível no mobile */
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

export const LocationInfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LocationInfo = styled.div`
  height: 50%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    margin-bottom: 8px;
    color: ${colors.title};

    i {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 14px;
    margin: 6px 0;
    color: ${colors.text};
    text-align: left;

    &.closed {
    color: red;
    font-weight: bold;
  }

    &.open {
      color: green;
      font-weight: bold;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: auto; /* deixa crescer conforme o conteúdo */
    padding: 1.5rem;
    text-align: center;
  }
`;

export const MapContainer = styled.div`
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px; /* altura responsiva para mobile */
  }
`;
