import { faker } from '@faker-js/faker';
import shuffle from 'just-shuffle';
import { tickerObjectType } from '@/types';
import sp500Tickers from './tickerSymbolData';

const GenerateTickerData = (num: number) => {
  const testData: tickerObjectType[] = [];
  let stockData = sp500Tickers;
  stockData = shuffle(stockData, { shuffleAll: true });
  for (let index = 0; index < num; index += 1) {
    const tickerline = {
      ticker: stockData[index],
      price: `$${faker.finance.amount()}`,
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

export default GenerateTickerData;
