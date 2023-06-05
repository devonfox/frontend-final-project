export const GetLastTradingDay = () => {
  const BANK_HOLIDAYS = ['2023-05-29', '2023-12-25', '2023-12-26', '2023-01-01'];
  const today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  let formattedDate = date.toISOString().split('T')[0];
  while (BANK_HOLIDAYS.includes(formattedDate) || date.getDay() === 6 || date.getDay() === 0) {
    date.setDate(date.getDate() - 1);
    [formattedDate] = [date.toISOString().split('T')[0]];
  }
  return formattedDate;
};

export const GetLastTradingDayFromDate = (yourDate: Date) => {
  const date = yourDate;
  // https://www.nyse.com/markets/hours-calendars
  const NYSE_HOLIDAYS_2023 = ['2023-05-29', '2023-06-19', '2023-07-04', '2023-09-04', '2023-11-23', '2023-12-25'];
  let formattedDate = date.toISOString().split('T')[0];
  while (NYSE_HOLIDAYS_2023.includes(formattedDate) || date.getDay() === 6 || date.getDay() === 0) {
    date.setDate(date.getDate() - 1);
    [formattedDate] = [date.toISOString().split('T')[0]];
  }
  return formattedDate;
};
