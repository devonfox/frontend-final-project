import React, { useState } from 'react';
import { PieChart, ShowChart } from '@mui/icons-material';
import { toggleCardType } from '@/types';
import { Box, ScaleFade } from '@chakra-ui/react';

function GraphCard({ myCharts }: { myCharts: toggleCardType }) {
  const [cardSwap, setCardSwap] = useState(false);

  const handleClick = () => {
    setCardSwap(!cardSwap);
  };

  const { lineChart } = myCharts;
  const { pieChart } = myCharts;
  const iconWidthHeight = '40px';
  const iconDisplay = 'flex';
  const iconAlignItems = 'center';
  const iconJustifyContent = 'center';
  const iconBackgroundColor = 'rgb(100,180,220)';
  const iconBorderRadius = '5px';

  const lineIcon = (
    <Box
      width={iconWidthHeight}
      height={iconWidthHeight}
      display={iconDisplay}
      alignItems={iconAlignItems}
      justifyContent={iconJustifyContent}
      onClick={handleClick}
      backgroundColor={iconBackgroundColor}
      borderRadius={iconBorderRadius}
    >
      <ShowChart />
    </Box>
  );
  const pieIcon = (
    <Box
      width={iconWidthHeight}
      height={iconWidthHeight}
      display={iconDisplay}
      alignItems={iconAlignItems}
      justifyContent={iconJustifyContent}
      onClick={handleClick}
      backgroundColor={iconBackgroundColor}
      borderRadius={iconBorderRadius}
    >
      <PieChart />
    </Box>
  );

  return (
    <Box
      color="white"
      position="relative"
      w="fit-content"
      h="fit-content"
    >
      <ScaleFade in={cardSwap} initialScale={0.9}>
        {cardSwap && pieChart}
      </ScaleFade>
      <ScaleFade in={!cardSwap} initialScale={0.9}>
        {!cardSwap && lineChart}
      </ScaleFade>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        display="flex"
        alignItems="center"
      >
        {cardSwap && lineIcon}
        {!cardSwap && pieIcon}
      </Box>
    </Box>
  );
}

export default GraphCard;
