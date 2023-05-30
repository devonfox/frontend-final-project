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

  const lineIcon = (
    <Box
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleClick}
      backgroundColor={"blue"}
      borderRadius={"5px"}>
      <ShowChart />
    </Box>
  );
  const pieIcon = (
    <Box
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleClick}
      backgroundColor={"blue"}
      borderRadius={"5px"}>
      <PieChart/>
    </Box>
  );

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
        position={"absolute"}
        top={"10px"}
        right={"10px"}
        display={"flex"}
        alignItems={"center"}
      >
        {cardSwap && lineIcon}
        {!cardSwap && pieIcon}
      </Box>
    </Box>
  );
};

export default GraphCard;
