import usePieChartData from '@/hooks/usePieChartData';
import React from 'react';
import {
  Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import {
  Center, Spinner, Box,
} from '@chakra-ui/react';
import ChartTooltip from '@/components/Chart/ChartTooltip';

interface PieChartProps {
  symbol: string;
  height?: number | string;
  width?: number | string;
  isProfile?: boolean;
}

function ChartPie(props: PieChartProps) {
  const {
    symbol, height, width, isProfile,
  } = props;
  const { chartData, chartLoading } = usePieChartData(symbol);

  const profilePie = !chartLoading && isProfile ? (
    <Box height={height ?? 400} width={width ?? '100%'}>
      <ResponsiveContainer>
        <PieChart
          margin={{
            top: 10, right: 30, left: 30, bottom: 10,
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
          <Tooltip content={<ChartTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  ) : (
    <Center height={height ?? 400} width={width}>
      <Spinner size="lg" />
    </Center>
  );

  return !chartLoading && !isProfile ? (
    <Box height={height ?? 400} width={width ?? '100%'}>
      <ResponsiveContainer>
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
          <Tooltip content={<ChartTooltip />} />
          <Legend
            align="right"
            verticalAlign="middle"
            layout="vertical"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  ) : profilePie;
}

ChartPie.defaultProps = {
  height: 400,
  width: 400,
  isProfile: false,

};

export default ChartPie;
