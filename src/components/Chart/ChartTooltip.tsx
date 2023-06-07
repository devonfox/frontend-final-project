import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function ChartTooltip({ active, payload }: any) {
  let color: string = '';
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    color = data.color;
    let formattedAmount: string = '';

    if (data.value >= 1000000000) {
      formattedAmount = `$${(data.value / 1000000000).toFixed(0)} billion`;
    } else if (data.value >= 1000000) {
      formattedAmount = `$${(data.value / 1000000).toFixed(0)} million`;
    } else {
      formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(data.value);
    }
    return (
      <Box
        bg="black"
        border="1px solid"
        borderColor="cyan.300"
        p={3}
        borderRadius="md"
        fontFamily="Arial, sans-serif"
        fontSize="12px"
        color="white"
      >
        <Text color={color} fontWeight="bold" fontSize="xl" mb={-1}>{data.name}</Text>
        <Text fontSize="xl" mb={1}>
          {formattedAmount}
        </Text>
      </Box>
    );
  }
  return null;
}

export default ChartTooltip;
