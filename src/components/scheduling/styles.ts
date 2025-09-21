import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles';
import Button from '../button';

export const Scheduling = styled.div`
  text-align: center;
  background: ${colors.background};
`;

export const SchedulingTitle = styled.h2`
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

export const SchedulingDescription = styled.p`
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.text};
  margin: 0 auto 32px auto;
`;

export const SchedulingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 65%;
  padding: 24px;
  margin: 0 auto;
  border: 1px solid ${colors.primary};
  border-radius: 10px;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${colors.title};

    i {
      color: ${colors.primary};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }
`;

export const SchedulingFormLine = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  a {
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    text-align: left;
    color: ${colors.primary};
    margin-bottom: 4px;
    font-weight: 500;
  }

  input,
  .date-picker {
    width: 100%;
    padding: 8px;
    border: 1px solid ${colors.primary};
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;

    &::placeholder {
      color: ${colors.text};
      opacity: 0.7;
    }

    &.error {
      border: 1px solid red;
    }
  }
`;

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomSelect = styled.div`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.primary};
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${colors.white};
  color: ${colors.text};

  &.error {
    border: 1px solid red;
  }

  &.disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }

  i {
    color: ${colors.primary};
  }
`;

export const CustomSelectOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const CustomSelectOption = styled.div`
  padding: 8px;
  font-size: 14px;
  color: ${colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary}80;
    color: ${colors.primary};
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
`;

export const SchedulinglButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ $primary }) =>
    $primary &&
    `
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;

    &:hover {
      background-color: ${colors.primary}80;
    }
  `}
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .react-datepicker {
    border: 1px solid ${colors.primary};
    border-radius: 6px;
    font-family: inherit;
    width: 100%;
    max-width: 300px;
    z-index: 1000;
  }

  .react-datepicker__header {
    background-color: ${colors.primary};
    color: ${colors.white};
    border-bottom: none;
  }

  .react-datepicker__current-month {
    color: ${colors.white};
  }

  .react-datepicker__day-name {
    color: ${colors.primary};
  }

  .react-datepicker__day {
    color: ${colors.text};

    &:hover {
      background-color: ${colors.primary}80;
      color: ${colors.primary};
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${colors.primary};
    color: ${colors.white};
  }

  .react-datepicker__day--disabled {
    color: gray;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .react-datepicker__triangle {
    border-bottom-color: ${colors.primary};
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${colors.white};
  }

  .react-datepicker__input-container {
    width: 100%;
    display: flex;
  }

  .react-datepicker__input-container input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid ${colors.primary};
    border-radius: 6px;
    font-size: 14px;

    &::placeholder {
      color: ${colors.text};
      opacity: 0.7;
    }
  }

  .date-picker-popper {
    z-index: 1000;
    max-width: 240px;
    width: 100%;
    overflow: hidden;
  }
`;