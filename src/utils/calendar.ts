export const THIS_YEAR = +new Date().getFullYear();

export const THIS_MONTH = +new Date().getMonth() + 1;

export const WEEK_DAYS = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

export const CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

export const CALENDAR_WEEKS = 6;

export const zeroPad = (value: number, length: number) => {
  return `${value}`.padStart(length, "0");
};

export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];

  const leapYear = year % 4 === 0;

  if (month === 2) {
    return leapYear ? 29 : 28;
  }

  if (months30.includes(month)) {
    return 30;
  } else {
    return 31;
  }
};

export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1);
};

export const isDate = (date: any) => {
  return date instanceof Date;
};

export const isSameMonth = (date: Date, baseDate = new Date()) => {
  if (!(isDate(Date) && isDate(baseDate))) return false;

  const baseDateMonth = +(baseDate.getMonth() + 1);
  const baseDateYear = +baseDate.getFullYear();

  const dateMonth = +(date.getMonth() + 1);
  const dateYear = +date.getFullYear();

  return +baseDateMonth === +dateMonth && +baseDateYear === +dateYear;
};

export const isSameDay = (date: Date, baseDate = new Date()) => {
  if (!(isDate(date) && isDate(baseDate))) return false;

  const baseDateDate = +baseDate.getDate();
  const baseDateMonth = +baseDate.getMonth() + 1;
  const baseDateYear = +baseDate.getFullYear();

  const dateDate = +date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = +date.getFullYear();

  return (
    +baseDateDate === +dateDate &&
    +baseDateMonth === +dateMonth &&
    +baseDateYear === +dateYear
  );
};

export const getDateISO = (date: Date) => {
  if (!isDate(date)) return null;

  return [
    date.getFullYear(),
    zeroPad(date.getMonth() + 1, 2),
    zeroPad(date.getDate(), 2),
  ].join("-");
};

export const getPreviousMonth = (month: number, year: number) => {
  const previousMonth = month > 1 ? month - 1 : 12;
  const previousMonthYear = month > 1 ? year : year - 1;

  return {
    month: previousMonth,
    year: previousMonthYear,
  };
};

export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;

  return {
    month: nextMonth,
    year: nextMonthYear,
  };
};

export default (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  const daysFromPreviousMonth = monthFirstDay - 1;
  const daysFromNextMonth =
    7 - CALENDAR_WEEKS * 7 - (daysFromPreviousMonth + monthDays);

  const { month: previousMonth, year: previousMonthYear } = getPreviousMonth(
    month,
    year
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

  const previousMonthDays = getMonthDays(previousMonth, previousMonthYear);

  const prevMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + (previousMonthDays - daysFromNextMonth) + 1;
    return [previousMonthYear, zeroPad(previousMonth, 2), zeroPad(day, 2)];
  });

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  return [...prevMonthDates, ...thisMonthDates, nextMonthDates];
};
