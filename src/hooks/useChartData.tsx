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

export function useChartData(symbol: string) {
  const [tickerData, setTickerData] = useState<TickerChart>(INIT_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");

  const dates: string[] = getLastFiveDays();

  useEffect(() => {
    const fetchData = async () => {
      const priceData: TickerChartData[] = [];
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
          }
        } catch (error) {
          console.error(error);
        }
      }
      try {
        const response = await fetch(`/api/polygonDetail?symbol=${symbol}`);
        if (response.ok) {
          const data = await response.json();
          setName(data.results["name"]);
        } else {
          console.error(`Failed to fetch name data for ${symbol}`);
        }
      } catch (error) {
        console.error(error);
      }
      setTickerData({ name, priceData });
      setLoading(false);
    };

    fetchData();
  }, [name, dates, symbol]);

  return tickerData;
}

const BANK_HOLIDAYS = ["2023-05-29", "2023-12-25", "2023-12-26", "2023-01-01"]; // Add more dates as needed

const getLastFiveDays = () => {
  const today = new Date();
  const lastFiveDays = [];
  let i = 0;

  while (lastFiveDays.length < 5) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i,
    );

    const formattedDate = date.toISOString().split("T")[0];

    // Check if the date is not a weekend and not a bank holiday
    if (
      date.getDay() !== 6 &&
      date.getDay() !== 0 &&
      !BANK_HOLIDAYS.includes(formattedDate)
    ) {
      lastFiveDays.push(formattedDate);
    }
    i++;
  }

  return lastFiveDays;
};
