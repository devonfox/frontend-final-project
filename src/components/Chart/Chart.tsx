import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTickerData } from "@/hooks/useTickerData";

export enum ChartType {
  LineChart = "LineChart",
  PieChart = "PieChart",
}

interface ChartProps {
  symbol: string;
  type?: ChartType;
}

const Chart = (props: ChartProps) => {
  const { symbol } = props;
  const tickerData = useTickerData(symbol);

  return (
    <div>
      Apple
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={tickerData.priceData}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
