import { CalendarAlt } from "@styled-icons/fa-regular";
import br from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "../TextField";
import { mainTheme } from "./../../styles/theme";
import * as S from "./styles";
registerLocale("br", br);

interface ICalendarPicker {
  onChange: any;
}

const CalendarPicker = ({ onChange }: ICalendarPicker) => {
  return (
    <S.Container>
      <DatePicker
        wrapperClassName="date-picker"
        calendarContainer={S.Calendar}
        onChange={onChange}
        locale="br"
        customInput={
          <TextField
            icon={<CalendarAlt color={mainTheme.colors.primary.main} />}
          />
        }
      />
    </S.Container>
  );
};

export default CalendarPicker;
