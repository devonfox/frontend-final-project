import React, { useRef, useState, useEffect } from 'react';
import {chartListType, chartType} from '@/types';
import { Box, Flex} from '@chakra-ui/react'

const ContentGrid = ({myCharts}: {myCharts: chartListType}) => {
  return (
      <Flex
            gap={myCharts.gap}
            flexWrap={'wrap'}
            flexDirection={'row'}
            borderStyle={'dotted'}
            borderWidth={'2px'}
            borderColor={'red'}
            justify={'center'}>
                  {myCharts.stockCharts.map((stockChart: chartType) => (
                        <Box w={'fit-content'} h={'fit-content'} key={stockChart.id}>
                              {stockChart.chart}
                        </Box>
                  ))}
      </Flex>
  );
};

export default ContentGrid;
