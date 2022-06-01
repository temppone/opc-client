import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  .react-datepicker-popper {
    width: 100%;
    padding: 0 4rem;
  }

  .react-datepicker__month-container {
    background-color: ${({ theme }) => theme.colors.background.main};
    width: 100%;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
  }

  .react-datepicker__week {
    justify-content: space-between;
    display: flex;
  }

  .react-datepicker__day--selected {
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => css`
      background-color: ${theme.colors.primary.main};
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    `}

    border-radius: 50%;
  }

  .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacings.medium};
    height: ${({ theme }) => theme.spacings.medium};
  }
`;

export const Calendar = styled.div`
  width: 290px;
  border-radius: ${({ theme }) => theme.border.radius.small};
  overflow: hidden;
  border: none;
`;
