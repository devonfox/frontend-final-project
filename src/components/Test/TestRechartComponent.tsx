import { Button, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "First",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Second",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Third",
    uv: 37000,
    pv: 18,
    amt: 2210,
  },
];

const TestRechartComponent = () => {
  const [switcher, setSwitcher] = useState(false);
  const [chartValue, setChartValue] = useState("uv");

  const handleClick = () => {
    setSwitcher(!switcher);
  };

  useEffect(() => {
    setChartValue(switcher ? "uv" : "pv");
  }, [switcher]);

  return (
    <Center w="100%" h="100%" mt={10}>
      <SimpleGrid columns={1} spacing={10}>
        <LineChart
          width={600}
          height={300}
          data={data}
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
            dataKey={chartValue}
            stroke="#8884d8"
            activeDot={{ r: 4 }}
          />
        </LineChart>
        <Button colorScheme="teal" size="lg" onClick={handleClick} ml={"7"}>
          Switch Chart
        </Button>
      </SimpleGrid>
    </Center>
  );
};

export default TestRechartComponent;
