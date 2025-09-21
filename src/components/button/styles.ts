import styled from 'styled-components'
import { colors } from '../../../styles'

type ButtonProps = {
  $primary?: boolean
  $secondary?: boolean
  $disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ $primary }) => ($primary ? colors.primary : 'transparent')};
  height: 40px;
  width: max-content;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $primary }) => ($primary ? colors.white : colors.primary)};
  border: ${({ $secondary }) => ($secondary ? `1px solid ${colors.primary}` : '1px solid transparent')};
  padding: 8px 12px;
  border-radius: 8px;
  transition: 0.3s ease;

  ${({ $disabled }) =>
    $disabled &&
    `
    background-color: #d3d3d3 !important;
    color: #666 !important;
    border-color: #d3d3d3 !important;
    cursor: not-allowed !important;
    opacity: 0.6 !important;
    pointer-events: none !important;

    &:hover {
      background-color: #d3d3d3 !important;
      color: #666 !important;
      transform: none !important;
    }
  `}

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${({ $primary }) => ($primary ? `${colors.primary}90` : colors.primary)};
    color: ${colors.white};
    transform: scale(1.05);
  }
`