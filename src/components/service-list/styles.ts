import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Services = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    text-align: center;
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`
