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
        {`Ticker: ${tickerData.ticker}`}
      </div>
      <div>
        {`MarketCap: ${tickerData.marketCap}`}
      </div>
      <div>
        {`Price: ${tickerData.price}`}
      </div>
      <div>
        {`PercentChange: ${tickerData.percentChange}`}
      </div>
      <div>
        {`Volume: ${tickerData.volume}`}
      </div>
      <div>
        {`Dividend Yield: ${tickerData.dividendYield}`}
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
