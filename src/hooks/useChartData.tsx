import { useState, useEffect } from "react";

interface TickerChart {
  name: string;

  priceData: TickerChartData[];
}

interface TickerChartData {
  date: string;
  price: number;
}

export function useChartData(symbol: string) {
  const [tickerData, setTickerData] = useState(null);
  const [data, setData] = useState<any>(null);
  const [priceData, setPriceData] = useState<any>(null);
  const [price, setPrice] = useState(0);

  const dates: string[] = getLastFiveDays();

  useEffect(() => {
    const fetchPrices = () => {
      fetch(`/api/polygonClosePrice?symbol=${symbol}&date=${dates[0]}`)
        .then((response) => response.json())
        .then((data) => {
          setPriceData(data);
          setPrice(data.results[0].vw.toFixed(2));
        })
        .catch((error) => console.error(error));
    };
  }, []);

  const apiData: TickerChart = {
    name: "Apple Music",
    priceData: [
      {
        date: "May 27th",
        price: 91.2,
      },
      {
        date: "May 28th",
        price: 120,
      },
      {
        date: "May 29th",
        price: 120,
      },
      {
        date: "May 30th",
        price: 120,
      },
      {
        date: "May 31st",
        price: 100,
      },
    ],
  };

  return apiData;
}

const getLastFiveDays = () => {
  const today = new Date();
  const lastFiveDays = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i,
    );
    const formattedDate = date.toISOString().split("T")[0];
    lastFiveDays.push(formattedDate);
  }

  return lastFiveDays;
};
