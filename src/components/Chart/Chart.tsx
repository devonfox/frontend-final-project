import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { Text, Spinner, Center } from "@chakra-ui/react";
import { useChartData } from "@/hooks/useChartData";
export enum ChartType {
  LineChart = "LineChart",
  PieChart = "PieChart",
}

interface ChartProps {
  symbol: string;
  type?: ChartType;
  height?: number;
  width?: string | number;
}

const Chart = (props: ChartProps) => {
  const { symbol, height, width } = props;
  const { chartData, chartLoading } = useChartData(symbol);

  const minPrice = Math.min(...chartData.priceData.map((data) => data.price));
  const maxPrice = Math.max(...chartData.priceData.map((data) => data.price));

  return !chartLoading ? (
    <div>
      <Text fontWeight={"bold"} align={"center"} fontSize={"1.2rem"}>
        {chartData.name}
      </Text>
      <ResponsiveContainer width={width ?? "100%"} height={height ?? 300}>
        <LineChart
          data={chartData.priceData}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: "1rem" }}
            tickMargin={10}
            tickFormatter={(tickItem) => `${formatDate(tickItem)}`}
          />
          <YAxis
            domain={[minPrice, maxPrice]}
            tick={{ fontSize: "1rem" }}
            tickFormatter={(tickItem) => `$${tickItem.toFixed(2)}`}
            tickMargin={10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ bottom: 0, paddingLeft: 20, paddingRight: 20 }}
          />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <Center height={height ?? 300} width="100%">
      <Spinner size="lg" />
    </Center>
  );
};

function formatDate(dateStr: string): string {
  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const suffixes: { [key: number]: string } = {
    1: "st",
    2: "nd",
    3: "rd",
    21: "st",
    22: "nd",
    23: "rd",
    31: "st",
  };

  const date: Date = new Date(dateStr);

  const monthIndex: number = date.getMonth();
  const monthName: string = monthNames[monthIndex];

  const day: number = date.getDate();
  const daySuffix: string = suffixes[day] || "th";

  return `${monthName} ${day}${daySuffix}`;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<any, number>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${formatDate(
          label,
        )} : $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default Chart;
