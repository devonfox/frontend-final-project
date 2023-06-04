/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { GetDate, GetYesterday } from '@/utils/getDate';

interface tickerDataType {
    ticker: string,
    price: string,
    percentChange: string,
    marketCap: string,
    volume: string,
    dividendYield: string
}

const INIT_DATA: tickerDataType = {
  ticker: '',
  price: '',
  percentChange: '',
  marketCap: '',
  volume: '',
  dividendYield: '',
};

const toUSD = (num: number) => {
  const mynum = num;
  return mynum.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export default function useTickerTableData(symbol: string) {
  const [tickerData, setTickerData] = useState<tickerDataType>(INIT_DATA);
  const [tickerLoading, setTickerLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = GetDate();
        console.log(today);
        console.log(`/api/polygonTickerRef?symbol=${symbol}&date=${today}`);
        const response = await fetch(`/api/polygonTickerRef?symbol=${symbol}&date=${today}`);
        if (response.ok) {
          const data = await response.json();
          const { results } = data;
          const marketCap = results.market_cap;

          const priceResponse = await fetch(`/api/polygonPreviousClose?symbol=${symbol}`);
          const priceData = await priceResponse.json();
          const priceResults = priceData.results[0];
          const price = priceResults.vw;

          const yesterday = GetYesterday();
          const openCloseResponse = await fetch(`/api/polygonDailyOpenClose?symbol=${symbol}&date=${yesterday}`);
          const openCloseData = await openCloseResponse.json();
          const openPrice = openCloseData.open;
          const closePrice = openCloseData.close;
          const prevVolume = openCloseData.volume;
          const percentChange = ((openPrice - closePrice) / closePrice) * 100;

          const dividendResponse = await fetch(`/api/polygonDividends?symbol=${symbol}`);
          const dividendData = await dividendResponse.json();
          const dividendResults = dividendData.results[0];
          const cashAmount = dividendResults.cash_amount;
          const yieldFrequency = dividendResults.frequency;
          const dividendYield = ((cashAmount * yieldFrequency) / price) * 100;
          console.log(dividendYield);

          setTickerData({
            ticker: symbol,
            marketCap: `$${Number((marketCap / 1000000000).toFixed(2))}B`,
            price: toUSD(price),
            percentChange: `${Number(percentChange.toFixed(2))}%`,
            volume: `$${Number((prevVolume / 1000000).toFixed(2))}M`,
            dividendYield: `${Number(dividendYield.toFixed(2))}%`,
          });
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().finally(() => setTickerLoading(false));
  }, [symbol]);

  return { tickerData, tickerLoading };
}
