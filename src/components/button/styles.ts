import styled from 'styled-components';
import { colors } from '../../../styles';

type ButtonProps = {
    primary?: boolean
    secundary?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.primary ? colors.primary : 'transparent'};
    height: 40px;
    width: max-content;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.primary ? colors.white : colors.primary};
    border: ${(props) => props.secundary ? `1px solid ${colors.primary}` : '1px solid transparent'};
    padding: 8px 12px;
    border-radius: 8px;
    transition: .3s ease;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.primary ? `${colors.primary}90` : colors.primary};
        color: ${colors.white};
        transform: scale(1.05);
    }
`;