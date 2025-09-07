import styled from 'styled-components';
import { colors } from '../../../styles';
import Button from '../button';

export const ProfessionalItem = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.1);
    transition: .3s ease;
    border: 1px solid ${colors.primary}40;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
        border: 1px solid ${colors.primary}70;
        transform: translateY(-2px) scale(1.04);
    }
`;

export const ProfessionalImage = styled.img`
    object-fit: cover;
    object-position: center 20%;
    height: 280px;
    width: 100%;
    border-radius: 10px 10px 0 0;
`

export const ProfessionalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    gap: 8px;
    padding: 24px 16px;
    border: 1px solid ${colors.primary}40;
    border-radius: 0 0 10px 10px;
`

export const ProfessionalName = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.title};
`

export const ProfessionalPosition = styled.h4`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.primary};
`

export const ProfessionalDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.text};
    text-align: left;
`

export const ProfessionalAdicionals = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    i {
        color: ${colors.primary};
    }
`

export const ProfessionalAdicionalsItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    i {
        font-size: 14px;
        color: ${colors.primary};
    }

    p {
        font-size: 14px;
        color: ${colors.text};
    }
`

export const ProfessionalSpecialties = styled.div`
    

    h4 {
        font-size: 14px;
        color: ${colors.primary};
        text-align: left;
        margin-bottom: 8px;
    }
`

export const ProfessionalSpecialtiesList = styled.ul`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    list-style: none;

    li {
        color: ${colors.darkPrimary};
        padding: 4px 6px;
        font-size: 12px;
        background-color: ${colors.lightPrimary};
        border-radius: 10px;
    }
`

export const ProfessionalButton = styled(Button)`
    display: flex;
    justify-content: center;
    width: 100%;
`