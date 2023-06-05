import usePieChartData from '@/hooks/usePieChartData';
import React from 'react';
import {
  Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import {
  Center, Spinner, Box, Text,
} from '@chakra-ui/react';

interface PieChartProps {
  symbol: string;
  height?: number | string;
  width?: number | string;
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    let formattedAmount = '';

    if (data.value >= 1000000000) {
      formattedAmount = `$${(data.value / 1000000000).toFixed(0)} billion`;
    } else if (data.value >= 1000000) {
      formattedAmount = `$${(data.value / 1000000).toFixed(0)} million`;
    } else {
      formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(data.value);
    }
    return (
      <Box
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        p={4}
        borderRadius="md"
        fontFamily="Arial, sans-serif"
        fontSize="12px"
        color="gray.600"
      >
        <Text fontWeight="bold" fontSize="2xl">{data.name}</Text>
        <Text fontSize="2xl">
          {formattedAmount}
        </Text>
      </Box>
    );
  }
  return null;
}

function ChartPie(props: PieChartProps) {
  const { symbol, height, width } = props;
  const { chartData, chartLoading } = usePieChartData(symbol);

  return !chartLoading ? (
    <ResponsiveContainer width={width ?? '100%'} height={height}>
      <PieChart
        margin={{
          top: 10, right: 30, left: 20, bottom: 10,
        }}
      >
        <Pie
          data={chartData.pieChartData}
          dataKey="value"
          fill="#8884d8"

        >
          {chartData.pieChartData.map((entry) => (
            <Cell key={`${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  ) : (
    <Center height={height ?? 400} width={width}>
      <Spinner size="lg" />
    </Center>
  );
}

ChartPie.defaultProps = {
  height: 400,
  width: 400,

};

export default ChartPie;
