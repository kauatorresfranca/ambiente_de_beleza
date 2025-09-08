import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';
import Button from '../button';

export const ServiceButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
`;

export const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.3s ease;
  border: 1px solid ${colors.primary}40;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
    border: 1px solid ${colors.primary}70;
    transform: translateY(-2px) scale(1.04);

    svg {
      background-color: ${colors.primary};
      color: ${colors.white};
    }

    ${ServiceButton} {
        background-color: ${colors.primary};
        color: ${colors.white};
    }

  }

  a {
    width: 100%;
  }

    svg {
        min-width: 42px;
        min-height: 42px; 
        width: 48px;
        height: 48px; 
        background-color: ${colors.lightPrimary};
        color: ${colors.darkPrimary};
        padding: 12px;
        border-radius: 50%;
        transition: 0.3s ease;
        /* Força o SVG a respeitar o tamanho definido */
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`

export const ServiceTitle = styled.h3`
    font-size: 20px;
    color: ${colors.title};
    margin: 8px 0px;
    text-align: left;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }
`;

export const ServiceText = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    color: ${colors.text};
`;

export const ServicePrice = styled.p`
    font-size: 16px;
    color: ${colors.primary};
    font-weight: bold;
    margin: 8px 0px 16px 0px;
`;

export const ServiceJobList = styled.ul`
    padding-left: 20px;
    margin-bottom: 16px;
    color: ${colors.primary};
    font-size: 14px;
    text-align: left;
    font-weight: 400;
    overflow-y: auto;

    p {
        text-decoration: underline;

        &:hover {
        cursor: pointer;
        }
    }

    li {
        list-style-type: disc;
        color: ${colors.text};

        &::marker {
        color: ${colors.primary};
        }
    }
    `;