import React from "react";
import { tickerBoxType } from "@/types";
import ContentGrid from "@/components/ContentGrid/ContentGrid";
import { Box } from "@chakra-ui/react";
import TickerDisplay from "../TickerDisplay/TickerDisplay";

const tickerBoard = ({ myTickers }: { myTickers: tickerBoxType }) => {

  return (
    <Box
      display="flex"
      flexDirection={{ sm: "column", lg: "row" }}
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
        <TickerDisplay tickerData={myTickers?.leftTicker}></TickerDisplay>

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
        <TickerDisplay tickerData={myTickers?.rightTicker}></TickerDisplay>
      </Box>
    </Box>
  );
};

export default tickerBoard;
