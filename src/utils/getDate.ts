const GetLastTradingDayFromDate = (yourDate: Date): string => {
  const date = new Date();
  date.setDate(yourDate.getDate());
  // https://www.nyse.com/markets/hours-calendars
  const NYSE_HOLIDAYS_2023 = ['2023-05-29', '2023-06-19', '2023-07-04', '2023-09-04', '2023-11-23', '2023-12-25'];

  let i = 1;
  while (NYSE_HOLIDAYS_2023.includes(date.toISOString().split('T')[0]) || date.getDay() === 6 || date.getDay() === 0) {
    date.setDate(date.getDate() - i);
    i += 1;
  }
  const myNewDate = new Date();
  myNewDate.setDate(date.getDate());
  return date.toISOString().split('T')[0];
};
export default GetLastTradingDayFromDate;
