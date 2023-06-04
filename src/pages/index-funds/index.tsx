import React from 'react';
import GraphCard from '@/components/GraphCard/GraphCard';
import {
  chartListType, tickerBoxType, toggleCardType,
} from '@/types';
import GraphGrid from '@/components/ContentGrid/ContentGrid';
import { Grid, GridItem } from '@chakra-ui/react';
import SP500Tickers from '@/utils/tickerSymbolData';
import TickerSection from '@/components/TickerBoard/TickerSection';

export default function Home() {
  // TOGGLE CARD CREATION START
  const chartTestStyle: React.CSSProperties = {
    width: '400px',
    height: '400px',
    backgroundColor: 'grey',
    padding: '0px',
    margin: '0px',
  };

  const chartTestStyle2: React.CSSProperties = {
    width: '400px',
    height: '400px',
    backgroundColor: 'black',
    padding: '0px',
    margin: '0px',
  };

  const charts: toggleCardType = {
    lineChart: <div style={chartTestStyle} />,
    pieChart: <div style={chartTestStyle2} />,
  };

  const gridCards = () => {
    const stockCharts = [];
    for (let index = 0; index < 50; index += 1) {
      stockCharts.push({ id: index, chart: <GraphCard myCharts={charts} /> });
    }
    return stockCharts;
  };
  // TOGGLE CARD CREATION END

  const darkGray = 'rgb(20,20,25)';
  const sectionBgColor = 'rgb(0,0,0)';
  const pageBgColor = darkGray;
  const borderWidth = '2px';
  const tickersLeft = SP500Tickers.slice(0, 16);
  const tickersRight = SP500Tickers.slice(17, 24);

  // Usage:
  const exampleCharts: chartListType = {
    gap: '.5em',
    stockCharts: gridCards(),
    verticalSpacing: '30rem',
    templateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
  };

  const tickerBoard: tickerBoxType = {
    leftTicker: tickersLeft,
    rightTicker: tickersRight,
    leftPercent: '50%',
    rightPercent: '50%',
    bg: sectionBgColor,
    borderWidth,
    borderRadius: '10px',
    borderColor: 'black',
    paddingY: '15px',
    paddingX: '15px',
  };

  return (
    <main>
      <Grid
        templateAreas={`
                        'tickers tickers'
                        'graphs graphs'`}
        gridTemplateRows="auto auto 1fr 1fr"
        gridTemplateColumns="5fr 3fr"
        gap="3"
        color="blackAlpha.700"
        fontWeight="bold"
        height="100%"
        paddingX={{ sm: '20px', md: '30px' }}
        paddingTop="15px"
        backgroundColor={pageBgColor}
      >
        <GridItem pl="2" area="tickers" padding="0px">
          <TickerSection myTickers={tickerBoard} />
        </GridItem>

        <GridItem
          pl="2"
          area="graphs"
          padding="0px"
          borderWidth={borderWidth}
          borderRadius="10px"
          borderColor="black"
          bg={sectionBgColor}
        >
          <GraphGrid myCharts={exampleCharts} />
        </GridItem>
      </Grid>
    </main>
  );
}
