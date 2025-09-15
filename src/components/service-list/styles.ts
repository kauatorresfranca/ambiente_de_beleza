import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Services = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px 0 24px;
    text-align: center;
    background: ${colors.background};
`;

export const ServicesTitle = styled.h2`
    font-size: 38px;
    color: ${colors.title};
    margin-bottom: 16px;

    span {
        color: ${colors.primary};
    }

    &::before {
        display: block;
        content: "";
        width: 70px;
        height: 4px;
        border-radius: 10px;
        background-color: ${colors.primary};
        margin: 0 auto 16px auto;
    }
`;

export const ServicesDescription = styled.p`
    max-width: 600px;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.text};
    margin: 0 auto 32px auto;
`

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* desktop por padrão */
  gap: 24px;

  /* mobile: 1 coluna */
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  /* entre mobile e tablet: 2 colunas */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  /* opcional: tablet exato até laptop */
  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`;
