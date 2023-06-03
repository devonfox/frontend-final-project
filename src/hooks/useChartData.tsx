import { useState, useEffect } from "react";

interface TickerChart {
  name: string;

  priceData: TickerChartData[];
}

interface TickerChartData {
  date: string;
  price: number;
}

const INIT_DATA: TickerChart = {
  name: "init",
  priceData: [],
};

const BANK_HOLIDAYS = ["2023-05-29", "2023-12-25", "2023-12-26", "2023-01-01"];
const getLastFiveDays = () => {
  const today = new Date();
  const lastFiveDays = [];
  let i = 0;

  while (lastFiveDays.length < 5) {
    const date = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - i
    );

    const formattedDate = date.toISOString().split("T")[0];

    if (
        (date.getDay() !== 6 && date.getDay() !== 0) &&
        !BANK_HOLIDAYS.includes(formattedDate) &&
        (i > 0 || today.getHours() >= 17)
    ) {
      lastFiveDays.push(formattedDate);
    }
    i++;
  }

  return lastFiveDays;
};


export function useChartData(symbol: string) {
  const [chartData, setChartData] = useState<TickerChart>(INIT_DATA);
  const [chartLoading, setChartLoading] = useState<boolean>(true);

  const dates: string[] = getLastFiveDays();

  useEffect(() => {
    const fetchData = async () => {
      const priceData: TickerChartData[] = [];
      let name: string = "";
      let nameFetchedSuccessfully: boolean = false;

      for (let i = 4; i >= 0; i--) {
        try {
          const response = await fetch(
            `/api/polygonClosePrice?symbol=${symbol}&date=${dates[i]}`,
          );
          if (response.ok) {
            const data = await response.json();
            const price = data["close"];
            const date = dates[i];
            priceData.push({ date: date, price: price });
          } else {
            console.error(`Failed to fetch price data for ${dates[i]}`);
            return;
          }
        } catch (error) {
          console.error(error);
          return;
        }
      }

      try {
        const response = await fetch(`/api/polygonDetail?symbol=${symbol}`);
        if (response.ok) {
          const data = await response.json();
          name = data.results["name"];
        } else {
          console.error(`Failed to fetch name data for ${symbol}`);
          return;
        }
      } catch (error) {
        console.error(error);
        return;
      }

      setChartData({ name, priceData });
    };

    fetchData().finally(() => setChartLoading(false));
  }, [symbol]);

  return { chartData: chartData, chartLoading: chartLoading };
}
