import { CalendarAlt } from "@styled-icons/fa-regular";
import br from "date-fns/locale/pt-BR";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { mainTheme } from "../../styles/theme";
import TextField from "../TextField";
import * as S from "./styles";
registerLocale("br", br);

interface ICalendarPicker {
  onChange: (
    date: Date | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
}

const CustomizedDatePicker = ({ onChange }: ICalendarPicker) => {
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

export default CustomizedDatePicker;
