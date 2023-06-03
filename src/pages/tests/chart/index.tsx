import { Box } from "@chakra-ui/react";
import ChartLine from "@/components/Chart/ChartLine";

const chartPage = () => {
  return (
    <Box m={5}>
      <ChartLine symbol={"AAPL"} />
    </Box>
  );
};
export default chartPage;
