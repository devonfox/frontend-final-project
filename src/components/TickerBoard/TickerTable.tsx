import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  // Td,
  TableContainer,
} from '@chakra-ui/react';
import TickerLine from './TickerLine';

interface tickerTableProps {
  symbols: string[];
}

function TickerTable({ symbols }: tickerTableProps) {
  const tickers = [...symbols]
    .map((ticker: string) => <TickerLine symbol={ticker} />)
    .filter((component) => component !== null);

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
export default TickerTable;
