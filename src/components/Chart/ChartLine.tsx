/* eslint-disable react/require-default-props */
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart, ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Spinner, Center, Box, Text, Flex,
} from '@chakra-ui/react';

import useLineChartData, { LineChartData } from '@/hooks/useLineChartData';

interface ChartProps {
  symbol: string;
  height?: number | string;
  width?: string | number;
}

function formatDate(date: string): string {
  // eslint-disable-next-line no-unused-vars
  const [year, month, day] = date.split('-');
  const formattedMonth = String(Number(month)); // Remove leading zeros from month
  const formattedDay = String(Number(day)); // Remove leading zeros from day
  return `${formattedMonth}/${formattedDay}`;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<any, number>) {
  if (active && payload && payload.length) {
    return (
      <Box
        bg="black"
        border="1px solid"
        borderColor="cyan.300"
        p={3}
        borderRadius="md"
        fontFamily="Arial, sans-serif"
        fontSize="12px"
        color="white"
      >
        <Box mb={-4}>
          <Flex alignItems="center">
            <Text fontSize="2xl" color="cyan.300" marginRight={2}>
              {`${formatDate(label)}:`}
            </Text>
            <Text fontSize="2xl">
              {` $${payload[0].value.toFixed(2)}`}
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  }
  return null;
}

const lineChart = (chartData: LineChartData, minPrice: number, maxPrice: number) => (
  <LineChart
    data={chartData.priceData}
    margin={{
      top: 30, right: 10, left: 20, bottom: 10,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="date"
      tick={{ fontSize: '1rem' }}
      tickMargin={10}
      tickFormatter={(tickItem) => `${formatDate(tickItem)}`}
      stroke="white"
    />
    <YAxis
      domain={[minPrice, maxPrice]}
      tick={{ fontSize: '1rem' }}
      tickFormatter={(tickItem) => `$${tickItem.toFixed(2)}`}
      tickMargin={10}
      stroke="white"
    />
    <Tooltip content={<CustomTooltip />} />

    <Line
      type="monotone"
      dataKey="price"
      stroke="#76E4F7"
      strokeWidth={4}
      activeDot={{ r: 8 }}
    />
  </LineChart>
);

function ChartLine(props: ChartProps) {
  const {
    symbol, height, width,
  } = props;
  const { chartData, chartLoading } = useLineChartData(symbol);

  const minPrice = Math.min(...chartData.priceData.map((data) => data.price));
  const maxPrice = Math.max(...chartData.priceData.map((data) => data.price));

  return !chartLoading ? (
    <Box height={height ?? 400} width={width ?? '100%'}>
      <ResponsiveContainer>
        {lineChart(chartData, minPrice, maxPrice)}
      </ResponsiveContainer>
    </Box>

  ) : (
    <Center height={height ?? 400} width="100%">
      <Spinner size="lg" />
    </Center>
  );
}

export default ChartLine;
