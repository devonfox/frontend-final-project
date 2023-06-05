/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import GetLastTradingDayFromDate from '@/utils/getDate';

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

const toUSD = (num: number) => num.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function useTickerTableData(symbol: string) {
  const [tickerData, setTickerData] = useState<tickerDataType>(INIT_DATA);
  const [tickerLoading, setTickerLoading] = useState<boolean>(true);
  const [dataUnavailable, setDataUnavailable] = useState<boolean>(false);

  useEffect(() => {
    const tradingDay = GetLastTradingDayFromDate(new Date());
    const fetchData = async () => {
      try {
        const [tickerRefResponse,
          priceResponse,
          openCloseResponse,
          dividendResponse] = await Promise.all([
          fetch(`/api/polygonTickerRef?symbol=${symbol}&date=${tradingDay}`),
          fetch(`/api/polygonPreviousClose?symbol=${symbol}`),
          fetch(`/api/polygonDailyOpenClose?symbol=${symbol}&date=${tradingDay}`),
          fetch(`/api/polygonDividends?symbol=${symbol}`),
        ]);

        if (tickerRefResponse.ok
            && priceResponse.ok
            && openCloseResponse.ok
            && dividendResponse.ok) {
          const tickerRefData = await tickerRefResponse.json();
          const priceData = await priceResponse.json();
          const openCloseData = await openCloseResponse.json();
          const dividendData = await dividendResponse.json();

          const { results } = tickerRefData;
          const marketCap = results.market_cap;

          const priceResults = priceData.results[0];
          const price = priceResults.vw;

          const openPrice = openCloseData.open;
          const closePrice = openCloseData.close;
          const prevVolume = openCloseData.volume;
          const percentChange = ((openPrice - closePrice) / closePrice) * 100;

          let dividendYield: number | string = '-------';
          if (dividendData.results.length !== 0) {
            const dividendResults = dividendData.results[0];
            const cashAmount = dividendResults.cash_amount;
            const yieldFrequency = dividendResults.frequency;
            dividendYield = ((cashAmount * yieldFrequency) / price) * 100;
            dividendYield = `${Number(dividendYield.toFixed(2))}%`;
          }

          setTickerData({
            ticker: symbol,
            marketCap: `$${Number((marketCap / 1000000000).toFixed(2))}B`,
            price: toUSD(price),
            percentChange: `${Number(percentChange.toFixed(2))}%`,
            volume: `$${Number((prevVolume / 1000000).toFixed(2))}M`,
            dividendYield,
          });
        } else {
          setDataUnavailable(true);
          console.error('Failed to fetch data');
        }
      } catch (error) {
        setDataUnavailable(true);
        console.log(error);
      } finally {
        setTickerLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  return { tickerData, tickerLoading, dataUnavailable };
}
