import { chartListType, chartType } from '@/types';
import { Box, Grid } from '@chakra-ui/react';

const ContentGrid = ({ myCharts }: { myCharts: chartListType }) => {
  return (
    <Grid
      templateColumns={myCharts.templateColumns}
      autoRows={myCharts.verticalSpacing}
      width="100%"
      placeItems="center"
      margin="auto"
      gridGap={myCharts.gap}
      paddingX={"20px"}
      >
      {myCharts.stockCharts.map((stockChart: chartType) => (
        <Box key={stockChart.id}>{stockChart.chart}</Box>
      ))}
    </Grid>
  );
};

export default ContentGrid;
