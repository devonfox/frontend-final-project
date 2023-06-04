import { Tr, Td } from '@chakra-ui/react';
import React from 'react';
import useTickerTableData from '@/hooks/useTickerTableData';
import { tickerDataType } from '@/types';

interface tickerFuncProps {
    symbol: string;
}

function TickerLine({ symbol }: tickerFuncProps) {
  const ticker: { tickerData: tickerDataType,
      tickerLoading: boolean
      , dataUnavailable: boolean
  } = useTickerTableData(symbol);

  if (ticker.dataUnavailable) {
    return (
      <Tr key={symbol} fontStyle="italic" fontWeight="semibold">
        <Td fontStyle="italic" fontWeight="semibold" colSpan={6}>
          {`${symbol}: Data Unavailable for this Symbol...`}
        </Td>
      </Tr>
    );
  }
  if (!ticker.tickerLoading && ticker.tickerData && ticker.tickerData.price) {
    return (
      <Tr key={symbol}>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.ticker}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.price}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.percentChange}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.marketCap}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.volume}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {ticker.tickerData.dividendYield}
        </Td>
      </Tr>
    );
  }
  return (
    <Tr>
      <Td fontStyle="italic" fontWeight="semibold">
        {`${symbol}: Loading...`}
      </Td>
    </Tr>
  );
}

export default TickerLine;
