import React, { useEffect, useState } from 'react';
import sp500Tickers from '@/utils/tickerSymbolData';
import { faker } from '@faker-js/faker';
import shuffle from 'just-shuffle';
import { tickerObjectType } from '@/types';
import TickerDisplay from '@/components/TickerDisplay/TickerDisplay';

const GenerateTickerData = (num: number): tickerObjectType[] => {
  const testData: tickerObjectType[] = [];
  let stockData = sp500Tickers;
  stockData = shuffle(stockData, { shuffleAll: true });
  for (let index = 0; index < num; index += 1) {
    const tickerline = {
      ticker: stockData[index],
      price: `$ ${faker.finance.amount()}`,
      percent_change: faker.finance.amount(),
      market_cap: faker.finance.amount(),
      volume: faker.finance.amount(),
      dividend_yield: faker.finance.amount(),
    };
    testData.push(
      { id: index, data: tickerline },
    );
  }
  return testData;
};

function ChartsPage() {
  const [tickersLeft, setTickersLeft] = useState<tickerObjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const leftData = await GenerateTickerData(50);
      setTickersLeft(leftData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TickerDisplay tickerData={tickersLeft} />
    </div>
  );
}

export default ChartsPage;
