import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import useBarChartData from '@/hooks/useBarChartData';
import {
  Center, Spinner, useBreakpointValue,
} from '@chakra-ui/react';
import ChartTooltip from '@/components/Chart/ChartTooltip';

interface ChartBarProps {
  symbol: string;
}

const convertToMillions = (value: number) => {
  let formattedAmount = '';
  if (value >= 1000000000) {
    formattedAmount = `$${(value / 1000000000).toFixed(0)}B`;
  } else if (value >= 1000000) {
    formattedAmount = `$${(value / 1000000).toFixed(0)}M`;
  } else {
    formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(value);
  }
  return formattedAmount;
};

function ChartBar(props: ChartBarProps) {
  const { symbol } = props;
  const variant = useBreakpointValue(
    {
      base: 400,
      md: '99%',
    },
    {
      // from ChakraUI Documentation: https://chakra-ui.com/docs/features/responsive-styles#using-objects
      fallback: 'md',
    },
  );

  const { chartData, chartLoading } = useBarChartData(symbol);

  return !chartLoading ? (
    <ResponsiveContainer width="99%" height={variant}>
      <BarChart
        data={chartData.barChartData}
        margin={{
          top: 5,
          right: 40,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: '1rem' }}
        />
        <YAxis tickFormatter={(tickItem) => `${convertToMillions(tickItem)}`} tick={{ fontSize: '1rem' }} />
        <Tooltip content={<ChartTooltip />} />
        <Bar dataKey="value" fill="#76E4F7" />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <Center height={400} width="100%">
      <Spinner size="lg" />
    </Center>
  );
}

export default ChartBar;
