import React from 'react';
import { tickerBoxType } from '@/types';
import { Box } from '@chakra-ui/react';
import TickerTable from './TickerTable';

function TickerSection({ myTickers }: { myTickers: tickerBoxType }) {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'column', lg: 'row' }}
      width="100%"
      gap="15px"
    >
      <Box
        flex={myTickers?.leftPercent}
        bg={myTickers.bg}
        minWidth={0}
        borderWidth={myTickers.borderWidth}
        borderRadius={myTickers.borderRadius}
        borderColor="black"
        paddingY={myTickers.paddingY}
        paddingX={myTickers.paddingX}
      >
        <TickerTable symbols={myTickers?.leftTicker} />

      </Box>
      <Box
        flex={myTickers?.rightPercent}
        bg={myTickers.bg}
        minWidth={0}
        borderWidth={myTickers.borderWidth}
        borderRadius={myTickers.borderRadius}
        borderColor="black"
        paddingY={myTickers.paddingY}
        paddingX={myTickers.paddingX}
      >
        <TickerTable symbols={myTickers?.rightTicker} />
      </Box>
    </Box>
  );
}

export default TickerSection;
