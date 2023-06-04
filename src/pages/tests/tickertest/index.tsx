import { Box } from '@chakra-ui/react';
import React from 'react';
import useTickerTableData from '@/hooks/useTickerTableData';
import { tickerDataType } from '@/types';

interface tickerFuncProps {
    symbol: string;
  }

function TickerTestFunc({ symbol }: tickerFuncProps) {
  const ticker: { tickerData: tickerDataType,
      tickerLoading: Boolean,
      dataUnavailable: Boolean } = useTickerTableData(symbol);

  return !ticker.tickerLoading ? (
    <div>
      <div>
        Ticker:
        {' '}
        {ticker.tickerData.ticker}
      </div>
      <div>
        marketcap:
        {' '}
        {ticker.tickerData.marketCap}
      </div>
      <div>
        price:
        {' '}
        {ticker.tickerData.price}
      </div>
      <div>
        percentchange:
        {' '}
        {ticker.tickerData.percentChange}
      </div>
      <div>
        volume:
        {' '}
        {ticker.tickerData.volume}
      </div>
      <div>
        percentYield:
        {' '}
        {ticker.tickerData.dividendYield}
      </div>
    </div>
  ) : (
    <div>
      Loading...
    </div>
  );
}

const tickerTest = () => (
  <Box m={5}>
    <TickerTestFunc symbol="AAPL" />
  </Box>
);
export default tickerTest;
