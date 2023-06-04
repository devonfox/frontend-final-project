import { Box } from '@chakra-ui/react';
import React from 'react';
import useTickerTableData from '@/hooks/useTickerTableData';

interface tickerFuncProps {
    symbol: string;
  }

function TickerTestFunc({ symbol }: tickerFuncProps) {
  const { tickerData, tickerLoading } = useTickerTableData(symbol);

  return !tickerLoading ? (
    <div>
      <div>
        Ticker:
        {' '}
        {tickerData.ticker}
      </div>
      <div>
        marketcap:
        {' '}
        {tickerData.marketCap}
      </div>
      <div>
        price:
        {' '}
        {tickerData.price}
      </div>
      <div>
        percentchange:
        {' '}
        {tickerData.percentChange}
      </div>
      <div>
        volume:
        {' '}
        {tickerData.volume}
      </div>
      <div>
        percentYield:
        {' '}
        {tickerData.dividendYield}
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
