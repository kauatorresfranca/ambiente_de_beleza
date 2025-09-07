import styled from 'styled-components';
import { colors } from '../../../styles';

export const Footer = styled.div`
    padding: 24px;
    border-top: 1px solid ${colors.primary};

    .container {
        display: flex;
        justify-content: space-between;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
        width: 80px;
    }

    p {
        font-size: 14px;
        color: ${colors.text};
    }

`

export const FooterSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    i {
        padding: 8px;
        font-size: 20px;
        color: ${colors.darkPrimary};
        background-color: ${colors.lightPrimary};
        border-radius: 50%;
    }
`