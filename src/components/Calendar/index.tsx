import React, { useEffect, useState } from "react";
import calendar, {
  CALENDAR_MONTHS,
  isDate,
  isSameDay,
  isSameMonth,
} from "../../utils/calendar";
import * as S from "./styles";
import { WEEK_DAYS } from "./../../utils/calendar";
import { Sd } from "@styled-icons/material";

interface ICalendar {
  date: Date;
  onChangeDate: (date: Date) => void;
}

interface IDateState {
  current: Date;
  month: number;
  year: number;
}

const Calendar = ({ date, onChangeDate }: ICalendar) => {
  const [today, setToday] = useState(new Date());
  const [dateState, setDateState] = useState<IDateState>({
    current: new Date(),
    month: 0,
    year: 0,
  });

  useEffect(() => {
    addDateToState(date);
  }, []);

  const addDateToState = (date: Date) => {
    const isDateObject = isDate(date);
    const newDate = isDateObject ? date : new Date();

    setDateState({
      current: isDateObject ? date : new Date(),
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
    });
  };

  const getCalendarDates = () => {
    const { current, month, year } = dateState;

    const calendarMonth = month || +current?.getMonth() + 1;
    const calendarYear = year || current?.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  const renderMonthAndYear = () => {
    const { month, year } = dateState;
    const monthName =
      Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month, 11))];

    return (
      <S.Header>
        <S.ArrowLeft
          onMouseDown={() => console.log("moouse down")}
          onMouseUp={() => console.log("mouse up")}
          title="Previous month"
        />

        <S.Month>
          {monthName} {year}
        </S.Month>

        <S.ArrowRight
          onMouseDown={() => console.log("moouse down")}
          onMouseUp={() => console.log("mouse up")}
          title="Next month"
        />
      </S.Header>
    );
  };

  const renderDayLabel = (day: string, index: number) => {
    const dayLabel = Object.keys(WEEK_DAYS)[index];

    return (
      <S.Day key={dayLabel} index={index}>
        {dayLabel}
      </S.Day>
    );
  };

  const renderCalendarDate = (date: any, index: number) => {
    const { current, month, year } = dateState;
    const newDate = new Date(date.join("-"));
    const isToday = isSameDay(newDate, today);
    const isCurrent = isSameDay(newDate, current);
    const inMonth =
      month &&
      year &&
      isSameMonth(newDate, new Date([year, month, 1].join("-")));

    const onClick = () => {
      // goToDate(newDate);
    };
    const highlightCell = isCurrent
      ? "highlighted"
      : isToday
      ? "today"
      : "default";

    const props = { index, inMonth, onClick, title: newDate.toDateString() };

    return (
      <S.Date highlight={highlightCell} {...props}>
        {newDate.getDate()}
      </S.Date>
    );
  };

  return (
    <S.Container>
      {renderMonthAndYear()}
      <S.CalendarGrid>
        {
          <>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</>
          /*<>{getCalendarDates().map(renderCalendarDate)}</> */
        }
      </S.CalendarGrid>
    </S.Container>
  );
};

export default Calendar;
