import { Box } from "@chakra-ui/react";
import ChartLine from "@/components/Chart/ChartLine";

const chartPage = () => {
  return (
    <Box m={5}>
      <LineChart symbol={"EBAY"} />
    </Box>
  );
};
export default chartPage;
