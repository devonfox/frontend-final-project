import { usePieChartData } from "@/hooks/usePieChartData";

interface PieChartProps {
  symbol: string;
}

const ChartPie = (props: PieChartProps) => {
  const { symbol } = props;
  const { chartData, chartLoading } = usePieChartData(symbol);

  return !chartLoading ? (
    <div>
      <h1>Assets: ${chartData.assets.value}</h1>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ChartPie;
