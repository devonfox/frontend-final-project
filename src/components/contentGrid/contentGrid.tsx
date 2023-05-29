import { chartListType, chartType } from "@/types";
import { Box, Grid } from "@chakra-ui/react";

const ContentGrid = ({ myCharts }: { myCharts: chartListType }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
      autoRows={myCharts.verticalSpacing}
      width="100%"
      placeItems="center"
      margin="auto"
      gridGap={myCharts.gap}
    >
      {myCharts.stockCharts.map((stockChart: chartType) => (
        <Box key={stockChart.id}>{stockChart.chart}</Box>
      ))}
    </Grid>
  );
};

export default ContentGrid;
