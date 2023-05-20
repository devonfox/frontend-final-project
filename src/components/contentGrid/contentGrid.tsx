import {chartListType, chartType} from '@/types';
import { Box, Flex} from '@chakra-ui/react'

const ContentGrid = ({myCharts}: {myCharts: chartListType}) => {
  return (
      <Flex
            gap={myCharts.gap}
            flexWrap={'wrap'}
            flexDirection={'row'}
            justify={'center'}>
                  {myCharts.stockCharts.map((stockChart: chartType) => (
                        <Box m={0} padding={0} w={'fit-content'} h={'fit-content'} key={stockChart.id}>
                              {stockChart.chart}
                        </Box>
                  ))}
      </Flex>
  );
};

export default ContentGrid;
