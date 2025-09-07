import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';

export const Footer = styled.div`
    padding: 24px;
    border-top: 1px solid ${colors.primary};

    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1200px; /* Limita a largura máxima para melhor centralização */
        margin: 0 auto; /* Centraliza o container */
    }

    @media (max-width: ${breakpoints.tablet}) {
        .container {
            flex-direction: column;
            align-items: center; /* Centraliza os itens em mobile */
        }
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 30%; /* Mesma largura para todos os FooterSection em desktop */
    min-width: 200px; /* Evita que fiquem muito estreitos em telas menores */
    box-sizing: border-box; /* Inclui padding e borda na largura */

    img {
        width: 80px;
    }

    p, h4, h5 {
        font-size: 14px;
        color: ${colors.text};
        text-align: center;
    }

    h5 {
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 500;

        i {
            font-size: 16px;
            font-weight: 500;
            color: ${colors.primary};
        }
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 14px;
        color: ${colors.text};

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%; /* Ocupa toda a largura em mobile */
        align-items: center; /* Centraliza conteúdo em mobile */
        margin-bottom: 24px; /* Espaçamento entre seções em mobile */

        img {
            margin: 0 auto;
        }
    }
`;

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

    @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
    }
`;