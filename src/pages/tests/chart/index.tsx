import { Box } from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import React from 'react';

const chartPage = () => (
  <Box m={5}>
    <ChartLine symbol="AAPL" />
  </Box>
);
export default chartPage;
