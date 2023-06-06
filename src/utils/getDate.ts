const GetLastTradingDayFromDate = (yourDate: Date): string => {
  const date = new Date(yourDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  if (date.getHours() < 17) {
    date.setDate(date.getDate() - 1);
  } else {
    date.setDate(date.getDate());
  }
  // https://www.nyse.com/markets/hours-calendars
  const NYSE_HOLIDAYS_2023 = ['2023-05-29', '2023-06-19', '2023-07-04', '2023-09-04', '2023-11-23', '2023-12-25'];
  let i = 1;
  while (NYSE_HOLIDAYS_2023.includes(date.toISOString().split('T')[0]) || date.getDay() === 6 || date.getDay() === 0) {
    date.setDate(date.getDate() - i);
    i += 1;
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};
export default GetLastTradingDayFromDate;
