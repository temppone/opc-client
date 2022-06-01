import styled, { css } from "styled-components";

interface IDay {
  index: number;
}

interface IDate {
  inMonth: boolean | 0;
  index: number;
  highlight: "today" | "highlighted" | "default";
}

const cellDayModifiers = {
  today: () => css`
    background-color: tomato;
  `,

  highlighted: () => css`
    background-color: red;
  `,

  default: () => css`
    background-color: blue;
  `,
};

export const Arrow = styled.button`
  appearance: none;
  user-select: none;
  outline: none !important;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: none;
  border-top: 1.6em solid transparent;
  border-bottom: 1.6em solid transparent;
  transition: all 0.25s ease-out;
`;

export const Container = styled.div`
  font-size: 5px;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template: repeat(7, auto) / repeat(7, auto);
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowLeft = styled(Arrow)`
  border-right: 2.4em solid #ccc;
  left: 1.5rem;
  :hover {
    border-right-color: #06c;
  }
`;

export const ArrowRight = styled(Arrow)`
  border-left: 2.4em solid #ccc;
  right: 1.5rem;
  :hover {
    border-left-color: #06c;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Month = styled.div`
  font-weight: 500;
  font-size: 5em;
  color: #06c;
  text-align: center;
  padding: 0.5em 0.25em;
  word-spacing: 5px;
  user-select: none;
`;

export const Cell = styled.div<IDay>`
  text-align: center;
  align-self: center;
  letter-spacing: 0.1rem;
  padding: 0.6em 0.25em;
  user-select: none;
  grid-column: ${({ index }) => (index % 7) + 1} / span 1;
`;

export const Day = styled(Cell)`
  font-weight: 600;
  font-size: 2.25em;
  color: #06c;
  border-top: 2px solid #06c;
  border-bottom: 2px solid #06c;
  border-right: ${({ index }) =>
    (index % 7) + 1 === 7 ? `none` : `2px solid #06c`};
`;

export const Date = styled(Cell)<IDate>`
  font-size: 4em;
  cursor: pointer;
  transition: all 0.4s ease-out;

  ${({ inMonth, index, highlight }) => css`
    font-weight: ${inMonth ? 500 : 300};
    border-bottom: ${(index + 1) / 7 <= 5 ? `1px solid #ddd` : `none`};
    border-right: ${(index % 7) + 1 === 7 ? `none` : `1px solid #ddd`};
    color: ${inMonth ? `#333` : `#ddd`};
    grid-row: ${Math.floor(index / 7) + 2} / span 1;

    ${cellDayModifiers[highlight]}
  `}

  :hover {
    color: #06c;
    background: rgba(0, 102, 204, 0.075);
  }
`;
