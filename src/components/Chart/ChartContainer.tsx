import React from 'react';
import { Box } from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import ChartPie from '@/components/Chart/ChartPie';

interface ChartContainerProps {
  symbol: string;
  switchCard: boolean;

}

function ChartContainer(props: ChartContainerProps) {
  const { symbol, switchCard } = props;

  return switchCard ? (
    <Box height={400} width={400}>
      <ChartLine symbol={symbol} height={400} width="100%" />
    </Box>
  ) : (
    <Box height={400} width={400}>
      <ChartPie symbol={symbol} height={400} width={400} />
    </Box>
  );
}

export default ChartContainer;
