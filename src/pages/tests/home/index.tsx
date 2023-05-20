import React from 'react';
import GraphCard from '@/components/graphCard/graphCard';
import {chartListType, toggleCardType} from '@/types';
import ChartGrid from '@/components/contentGrid/contentGrid';
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { generateTickers } from './contentGenerator';




export default function Home() {

  // placeholders
  const chartTestStyle: React.CSSProperties = {
      width: '300px',
      height: '200px',
      backgroundColor: 'grey',
  };

  const chartTestStyle2: React.CSSProperties = {
      width: '300px',
      height: '200px',
      backgroundColor: 'black',
  };

  const charts: toggleCardType = {
      lineChart: <div style={chartTestStyle}></div>,
      pieChart: <div style={chartTestStyle2}></div>
  };

  const gridCards = () => {
    let stockCharts = [];
    for (let index = 0; index < 50; index++) {
      stockCharts.push(
        { id: index, chart: <GraphCard myCharts={charts} /> }
      )
    }
    return stockCharts;
  }

  const exampleCharts: chartListType = {
    gap: '.5em',
    stockCharts: gridCards()
  }


  const tickers = generateTickers('.5em', '200px', '50px', 20);



  return (
    <>
      <main>



      <Grid
        templateAreas={`"header header"
                        "nav nav"
                        "tickers tickers"
                        "graphs graphs"`}
        // gridTemplateRows={'1fr 1fr 1fr 3fr'}
        gridTemplateColumns={'150px 1fr'}
        // h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
        >
        <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'tickers'}>
        <ChartGrid myCharts={tickers} />
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'graphs'}>
            <ChartGrid myCharts={exampleCharts} />
        </GridItem>
    </Grid>










      </main>
    </>
  );
}







// <Grid
// templateAreas={`"header" header
// "nav nav"
// "main main"
// "section section"
// "graphs graphs`}
// gridTemplateRows={'500px 1fr 500px'}
// gridTemplateColumns={'150px 1fr'}
// //   h='200px'
// gap='1'

//   // templateRows='repeat(3, 1fr)'
//   // templateColumns='repeat(5, 1fr)'
//   >
//   <GridItem bg='tomato' area={'header'} />
//   <GridItem bg='papayawhip' area={'nav'} />
//   <GridItem bg='orange.300' area={'main'} />
//   <GridItem area={'section'}>
//   </GridItem>
//   <GridItem bg='pink.300' area={'graphs'} />
// </Grid>
