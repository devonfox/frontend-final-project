/* eslint-disable react/require-default-props */
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { Text, Spinner, Center, Box } from '@chakra-ui/react';
import useLineChartData from '@/hooks/useLineChartData';

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
      <div className="custom-tooltip">
        <p className="label">
          {`${formatDate(
            label,
          )} : $${payload[0].value.toFixed(2)}`}
        </p>
      </div>
    );
  }
  return null;
}

function ChartLine(props: ChartProps) {
  const { symbol, height, width } = props;
  const { chartData, chartLoading } = useLineChartData(symbol);

  const minPrice = Math.min(...chartData.priceData.map((data) => data.price));
  const maxPrice = Math.max(...chartData.priceData.map((data) => data.price));

  return !chartLoading ? (
    <Box height={400} width={400}>
      <ResponsiveContainer width={width ?? '100%'} height={height ?? 300}>
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
          />
          <YAxis
            domain={[minPrice, maxPrice]}
            tick={{ fontSize: '1rem' }}
            tickFormatter={(tickItem) => `$${tickItem.toFixed(2)}`}
            tickMargin={10}
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
      </ResponsiveContainer>
    </Box>
  ) : (
    <Center height={height ?? 300} width="100%">
      <Spinner size="lg" />
    </Center>
  );
}

export default ChartLine;
