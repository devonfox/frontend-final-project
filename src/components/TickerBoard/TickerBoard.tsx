import React from "react";
import { tickerBoxType } from "@/types";
import ContentGrid from "@/components/ContentGrid/ContentGrid";
import { Box } from "@chakra-ui/react";

const tickerBoard = ({ myTickers }: { myTickers: tickerBoxType }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm:"column", lg: "row" }}
      width="100%"
      gap="15px"
    >

      <Box flex={myTickers?.leftPercent} bg={myTickers.bg} minWidth={0} borderWidth={myTickers.borderWidth} borderRadius={myTickers.borderRadius} borderColor="black" paddingY={myTickers.paddingY}>
        <ContentGrid myCharts={myTickers?.leftTicker} />
      </Box>
      <Box flex={myTickers?.rightPercent} bg={myTickers.bg} minWidth={0} borderWidth={myTickers.borderWidth} borderRadius={myTickers.borderRadius} borderColor="black" paddingY={myTickers.paddingY}>
        <ContentGrid myCharts={myTickers.rightTicker} />
      </Box>
    </Box>
  );
};

export default tickerBoard;
