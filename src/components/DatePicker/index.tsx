import { CalendarAlt } from "@styled-icons/fa-regular";
import br from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../Input";
import { mainTheme } from "./../../styles/theme";
import * as S from "./styles";
registerLocale("br", br);

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.Container>
      <DatePicker
        wrapperClassName="date-picker"
        calendarContainer={S.Calendar}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        locale="br"
        customInput={
          <Input icon={<CalendarAlt color={mainTheme.colors.primary.main} />} />
        }
      />
    </S.Container>
  );
};

export default CalendarPicker;
