import React, { useState } from "react";
import { PieChart, ShowChart } from "@mui/icons-material";
import { toggleCardType } from "@/types";
import { Box, ScaleFade } from "@chakra-ui/react";

const GraphCard = ({ myCharts }: { myCharts: toggleCardType }) => {
  const [cardSwap, setCardSwap] = useState(false);

  const handleClick = () => {
    setCardSwap(!cardSwap);
  };

  const lineChart = myCharts.lineChart;
  const pieChart = myCharts.pieChart;
  const lineIcon = <ShowChart onClick={handleClick}></ShowChart>;
  const pieIcon = <PieChart onClick={handleClick}></PieChart>;

  return (
    <Box
      color={"white"}
      position={"relative"}
      w={"fit-content"}
      h={"fit-content"}
    >
      <ScaleFade in={cardSwap} initialScale={0.9}>
        {cardSwap && pieChart}
      </ScaleFade>
      <ScaleFade in={!cardSwap} initialScale={0.9}>
        {!cardSwap && lineChart}
      </ScaleFade>
      <Box
        as="button"
        color={"white"}
        backgroundColor={"blue"}
        position={"absolute"}
        top={"10px"}
        right={"10px"}
        display={"flex"}
        alignItems={"center"}
        padding={"10px"}
        borderRadius={"5px"}
        border={"none"}
      >
        {cardSwap && lineIcon}
        {!cardSwap && pieIcon}
      </Box>
    </Box>
  );
};

export default GraphCard;
