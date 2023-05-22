import React from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { chartDataType } from "@/types";

enum ChartType {
  LineChart = "LineChart",
  PieChart = "PieChart",
}

interface ChartProps {
  chartType: ChartType
  label: string;
  legendName: string;
  timeData: chartDataType[];
}

const Chart = (props: ChartProps) => {

  const { chartType, label, legendName, timeData } = props;

  return (
    <Center w="100%" h="100%" mt={10}>
      <SimpleGrid columns={1} spacing={10}>
        <LineChart
          width={600}
          height={300}
          data={timeData}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={label}
            stroke="#8884d8"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </SimpleGrid>
    </Center>
  );
}

export default Chart;