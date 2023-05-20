
import React from 'react';
import GraphCard from '@/components/graphCard/graphCard';
import {chartListType, toggleCardType} from '@/types';
import ChartGrid from '@/components/contentGrid/contentGrid';
import { Grid, GridItem, Box } from '@chakra-ui/react'



export function generateTickers(gap: string, width: string, height: string, quantity: number) {

  const chartTestStyle: React.CSSProperties = {
    width: width,
    height: height,
    backgroundColor: 'black',
  };

  const tickers = <div style={chartTestStyle}></div>

  const gridCards = () => {
    let stockCharts = [];
    for (let index = 0; index < quantity; index++) {
      stockCharts.push(
        { id: index, chart: tickers }
      )
    }
    return stockCharts;
  }

  const tickerPack: chartListType = {
    gap: gap,
    stockCharts: gridCards()
  }
  return tickerPack;
}

