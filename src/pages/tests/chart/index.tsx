import { Box } from "@chakra-ui/react";
import Chart, { ChartType } from "@/components/Chart/Chart";

const chartPage = () => {
  return (
    <Box m={5}>
      <Chart symbol={"AAPL"} />
    </Box>
  );
};
export default chartPage;
