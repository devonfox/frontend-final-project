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
  return (
    <TableContainer bg="none" color="skyblue">
      <Table size="sm" variant="unstyled">
        <Thead>
          <Tr>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              Symbol
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              Price
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              Change
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              MC
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              Vol
            </Th>
            <Th
              fontWeight="extrabold"
              color="white"
            >
              DY
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...symbols]
            .map((ticker: string) => <TickerLine key={ticker} symbol={ticker} />)
            .filter((component) => component !== null)}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default TickerTable;
