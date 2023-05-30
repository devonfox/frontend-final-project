import React from "react";
import GraphCard from "@/components/GraphCard/GraphCard";
import { chartListType, toggleCardType } from "@/types";
import ContentGrid from "@/components/ContentGrid/ContentGrid";
import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import { generateTickers } from "./contentGenerator";

export default function Home() {
  // placeholders
  const chartTestStyle: React.CSSProperties = {
    width: "300px",
    height: "200px",
    backgroundColor: "grey",
  };

  const chartTestStyle2: React.CSSProperties = {
    width: "300px",
    height: "200px",
    backgroundColor: "black",
  };

  const charts: toggleCardType = {
    lineChart: <div style={chartTestStyle}></div>,
    pieChart: <div style={chartTestStyle2}></div>,
  };

  const gridCards = () => {
    let stockCharts = [];
    for (let index = 0; index < 50; index++) {
      stockCharts.push({ id: index, chart: <GraphCard myCharts={charts} /> });
    }
    return stockCharts;
  };

  const exampleCharts: chartListType = {
    gap: ".5em",
    stockCharts: gridCards(),
    verticalSpacing: "20rem",
  };

  const tickers = generateTickers(".5em", "200px", "50px", 20, "5rem");
  const tickersRight = generateTickers(".5em", "200px", "50px", 10, "5rem");

  return (
    <>
      <main>
        <Grid
          templateAreas={`"header header"
                        "nav nav"
                        "tickers tickersright"
                        "graphs graphs"`}
          gridTemplateRows="5rem 5rem auto auto 1fr 1fr"
          gridTemplateColumns="5fr 3fr"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
          height="100%"
          padding="0px"
        >
          <GridItem pl="2" bg="orange.300" area="header" padding="0px">
            Header
          </GridItem>
          <GridItem pl="2" bg="pink.300" area="nav" padding="0px">
            Nav
          </GridItem>

          <GridItem pl="2" bg="green.300" area="tickers" padding="0px">
            <ContentGrid myCharts={tickers} />
          </GridItem>
          <GridItem pl="2" bg="green.300" area="tickersright" padding="0px">
            <ContentGrid myCharts={tickersRight} />
          </GridItem>

          <GridItem pl="2" bg="blue.300" area="graphs" padding="0px">
            <ContentGrid myCharts={exampleCharts} />
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
