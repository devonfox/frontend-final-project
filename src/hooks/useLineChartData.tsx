import { useState, useEffect } from 'react';

interface TickerChartData {
  date: string;
  price: number;
}
interface TickerChart {
  name: string;

  priceData: TickerChartData[];
}

const DAY_RANGE: number = 5;

const INIT_DATA: TickerChart = {
  name: 'init',
  priceData: [],
};

const BANK_HOLIDAYS = ['2023-05-29', '2023-12-25', '2023-12-26', '2023-01-01'];
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
  const [chartData, setChartData] = useState<TickerChart>(INIT_DATA);
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

        const nameResponse = await fetch(`/api/polygonDetail?symbol=${symbol}`);
        if (!nameResponse.ok) {
          console.error(`Failed to fetch name data for ${symbol}`);
          throw new Error('Failed to fetch name data');
        }
        const nameData = await nameResponse.json();
        const { name } = nameData.results;

        const priceData = await Promise.all(pricePromises);

        setChartData({ name, priceData });
      } catch (error) {
        console.error(error);
      } finally {
        setChartLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  return { chartData, chartLoading };
}

export default useLineChartData;
