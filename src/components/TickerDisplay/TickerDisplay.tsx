import React from 'react';
import { tickerObjectType } from '@/types';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

function TickerDisplay({ tickerData }: { tickerData: tickerObjectType[] }) {
  const tickers: any = [];
  tickerData.forEach((element) => {
    tickers.push(
      <Tr key={element.id}>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.ticker}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.price}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.percent_change}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.market_cap}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.volume}
        </Td>
        <Td fontStyle="italic" fontWeight="semibold">
          {element.data.dividend_yield}
        </Td>
      </Tr>,
    );
  });

  return (
    <TableContainer bg="none" color="skyblue">
      <Table size="sm" variant="unstyled">
        <Thead>
          <Tr>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              Symbol
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              Price
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              Change
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              MC
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              Vol
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
              textDecorationLine="underline"
            >
              DY
            </Th>
          </Tr>
        </Thead>
        <Tbody>{tickers}</Tbody>
      </Table>
    </TableContainer>
  );
}
export default TickerDisplay;
