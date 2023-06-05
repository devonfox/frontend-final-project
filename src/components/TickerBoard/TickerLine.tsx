import { Tr, Td } from '@chakra-ui/react';
import React from 'react';
import useTickerTableData from '@/hooks/useTickerTableData';

interface tickerFuncProps {
    symbol: string;
}

function TickerLine({ symbol }: tickerFuncProps) {
  const { tickerData, tickerLoading, dataUnavailable } = useTickerTableData(symbol);

  if (dataUnavailable) {
    return (
      <Tr key={symbol} fontStyle="italic" fontWeight="semibold">
        <Td fontStyle="italic" fontWeight="semibold" colSpan={6}>
          {`${symbol}: Data Unavailable for this Symbol...`}
        </Td>
      </Tr>
    );
  }
  if (!tickerLoading && tickerData && tickerData.price) {
    return (
      <Tr key={symbol}>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.ticker}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.price}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.percentChange}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.marketCap}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.volume}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {tickerData.dividendYield}
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
