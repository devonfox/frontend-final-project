import React from "react";
import { chartListType } from "@/types";

export function generateTickers(
  gap: string,
  width: string,
  height: string,
  quantity: number,
  verticalSpacing: string,
) {
  const chartTestStyle: React.CSSProperties = {
    width: width,
    height: height,
    backgroundColor: "black",
  };

  const tickers = <div style={chartTestStyle}></div>;

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
  };
  return tickerPack;
}
