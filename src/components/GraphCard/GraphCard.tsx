import React, { useState } from 'react';
import { PieChart, ShowChart } from '@mui/icons-material';
import { Box, ScaleFade } from '@chakra-ui/react';

import ChartContainer from '@/components/Chart/ChartContainer';

interface GraphCardProps {
  symbol: string;
}

function GraphCard(props: GraphCardProps) {
  const { symbol } = props;
  const [cardSwap, setCardSwap] = useState(true);

  const handleClick = () => {
    setCardSwap(!cardSwap);
  };

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
      <ScaleFade in={cardSwap || !cardSwap} initialScale={0.9}>
        <ChartContainer symbol={symbol} switchCard={cardSwap} />
      </ScaleFade>

      <Box
        position="absolute"
        top="10px"
        right="10px"
        display="flex"
      >
        {cardSwap ? lineIcon : pieIcon}
      </Box>
    </Box>
  );
}

export default GraphCard;
