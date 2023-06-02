import { Box } from "@chakra-ui/react";
import Chart from "@/components/Chart/Chart";

const chartPage = () => {
  return (
    <Box m={5}>
      <Chart symbol={"EBAY"} />
    </Box>
  );
};
export default chartPage;
