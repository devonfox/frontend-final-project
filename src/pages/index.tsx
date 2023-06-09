import GraphCard from '@/components/GraphCard/GraphCard';
import {
  chartListType, tickerBoxType,
} from '@/types';
import GraphGrid from '@/components/ContentGrid/ContentGrid';
import { Grid, GridItem } from '@chakra-ui/react';
import TickerSection from '@/components/TickerBoard/TickerSection';
import SP500Tickers from '@/utils/tickerSymbolData';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  // TOGGLE CARD CREATION START
  const gridCards = () => {
    const tickers = SP500Tickers.slice(0, 50);
    const stockCharts = [];
    for (let index = 0; index < 50; index += 1) {
      stockCharts.push({ id: index, chart: <GraphCard symbol={tickers[index]} /> });
    }
    return stockCharts;
  };
  // TOGGLE CARD CREATION END

  const darkGray = 'rgb(20,20,25)';
  const sectionBgColor = 'rgb(0,0,0)';
  const pageBgColor = darkGray;
  const borderWidth = '2px';
  const tickersLeft = SP500Tickers.slice(0, 10);
  const tickersRight = SP500Tickers.slice(10, 20);

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
      <Head>
        <title>Dashboard</title>
      </Head>
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
