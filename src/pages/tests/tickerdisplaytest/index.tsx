import React from "react";
import { sp500Tickers } from "./tickerSymbolData";
import { faker } from "@faker-js/faker";
import shuffle from 'just-shuffle';
import { tickerObjectType } from "@/types";
import { useEffect, useState } from "react";
import TickerDisplay from "@/components/TickerDisplay/TickerDIsplay";

async function generateTickerData( num: number) {
    const testData: tickerObjectType[] = [];
    let stockData = sp500Tickers;
    stockData = shuffle(stockData, {shuffleAll: true});
    for (let index = 0; index < num; index++) {
        const tickerline =
        {
          ticker: stockData[index],
          price: `$ ${faker.finance.amount()}`,
          percent_change: faker.finance.amount(),
          market_cap: faker.finance.amount(),
          volume: faker.finance.amount(),
          dividend_yield: faker.finance.amount(),
        }
        testData.push(
          { id: index, data: tickerline })
        }
    return testData
  }

const ChartsPage = () => {
    const [tickersLeft, setTickersLeft] = useState<tickerObjectType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const leftData = await generateTickerData(50);
          setTickersLeft(leftData);
        };
        fetchData();
      }, []);

  return (
    <div>
      <TickerDisplay tickerData={tickersLeft}></TickerDisplay>
    </div>
  );
};

export default ChartsPage;