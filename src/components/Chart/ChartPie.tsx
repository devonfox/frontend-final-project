import usePieChartData from '@/hooks/usePieChartData';
import React from 'react';
import {
  Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import { Center, Spinner } from '@chakra-ui/react';

interface PieChartProps {
  symbol: string;
  height?: number;
}

function ChartPie(props: PieChartProps) {
  const { symbol, height } = props;
  const { chartData, chartLoading } = usePieChartData(symbol);

  return !chartLoading ? (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={chartData.pieChartData}
          dataKey="value"
          outerRadius={70}
          fill="#8884d8"
        >
          {chartData.pieChartData.map((entry) => (
            <Cell key={`${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  ) : (
    <Center height={height ?? 300} width="100%">
      <Spinner size="lg" />
    </Center>
  );
}

ChartPie.defaultProps = {
  height: 300,
};

export default ChartPie;
