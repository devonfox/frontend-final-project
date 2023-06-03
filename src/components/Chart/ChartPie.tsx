import usePieChartData from '@/hooks/usePieChartData';
import React from 'react';

interface PieChartProps {
  symbol: string;
}

function ChartPie(props: PieChartProps) {
  const { symbol } = props;
  const { chartData, chartLoading } = usePieChartData(symbol);

  return !chartLoading ? (
    <div>
      <h1>
        Assets: $
        {chartData.assets.value}
      </h1>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default ChartPie;
