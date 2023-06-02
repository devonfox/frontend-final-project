import React from "react";
import { chartListType } from "@/types";
import { Box } from "@chakra-ui/react";

export function generateTickers(
  gap: string,
  width: string,
  height: string,
  quantity: number,
  verticalSpacing: string,
  templateColumns: string,
): chartListType {
  const tickers = (

      <Box width={width} height={height} bg="black" />

  );

  const gridCards = () => {
    let stockCharts = [];
    for (let index = 0; index < quantity; index++) {
      stockCharts.push({ id: index, chart: tickers });
    }
    return stockCharts;
  };

  const tickerPack: chartListType = {
    gap: gap,
    stockCharts: gridCards(),
    verticalSpacing: verticalSpacing,
    templateColumns: templateColumns
  };
  return tickerPack;
}
