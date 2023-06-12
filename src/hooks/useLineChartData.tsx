import { useState, useEffect } from 'react';

interface LineChartDataElement {
  date: string;
  price: number;
}
export interface LineChartData {
  name?: string;

  priceData: LineChartDataElement[];
}

const DAY_RANGE: number = 5;

const INIT_DATA: LineChartData = {
  name: '',
  priceData: [],
};

const BANK_HOLIDAYS = ['2023-06-12', '2023-05-29', '2023-12-25', '2023-12-26', '2023-01-01'];
const getLastNthDays = (days: number) => {
  const today = new Date();
  const lastNthDays = [];
  let i = 0;

  while (lastNthDays.length < days) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i,
    );

    const formattedDate = date.toISOString().split('T')[0];

    if (
      date.getDay() !== 6
      && date.getDay() !== 0
      && !BANK_HOLIDAYS.includes(formattedDate)
      && (i > 0 || today.getHours() >= 17)
    ) {
      lastNthDays.push(formattedDate);
    }
    i += 1;
  }

  return lastNthDays;
};

function useLineChartData(symbol: string) {
  const [chartData, setChartData] = useState<LineChartData>(INIT_DATA);
  const [chartLoading, setChartLoading] = useState<boolean>(true);

  const dates: string[] = getLastNthDays(DAY_RANGE).reverse();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pricePromises = dates.map(async (date) => {
          const response = await fetch(
            `/api/polygonClosePrice?symbol=${symbol}&date=${date}`,
          );
          if (response.ok) {
            const data = await response.json();
            const price = data.close;
            return { date, price };
          }
          console.error(`Failed to fetch price data for ${date}`);
          throw new Error('Failed to fetch price data');
        });

        const priceData = await Promise.all(pricePromises);

        setChartData({ priceData });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData().catch((e) => { console.error(e); })
      .finally(() => { setChartLoading(false); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  return { chartData, chartLoading };
}

export default useLineChartData;
