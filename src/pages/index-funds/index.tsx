import React from "react";
import GraphCard from "@/components/GraphCard/GraphCard";
import { chartListType, tickerBoxType, tickerDataType, toggleCardType } from "@/types";
import GraphGrid from "@/components/ContentGrid/ContentGrid";
import { Grid, GridItem} from "@chakra-ui/react";
import TickerBoard from "@/components/TickerBoard/TickerBoard";
import { useEffect, useState } from "react";
import { tickerObjectType } from "@/types";
import { generateTickerData } from "./contentGenerator";

export default function Home() {
  const [tickersLeft, setTickersLeft] = useState<tickerObjectType[]>([]);
  const [tickersRight, setTickersRight] = useState<tickerObjectType[]>([]);

  // TOGGLE CARD CREATION START
  const chartTestStyle: React.CSSProperties = {
    width: "400px",
    height: "400px",
    backgroundColor: "grey",
    padding: "0px",
    margin: "0px",
  };

  const chartTestStyle2: React.CSSProperties = {
    width: "400px",
    height: "400px",
    backgroundColor: "black",
    padding: "0px",
    margin: "0px",
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
  // TOGGLE CARD CREATION END

  const lightGray = "rgb(221,221,221)";
  const darkGray = "rgb(68,68,68)";
  const sectionBgColor = lightGray;
  const pageBgColor = darkGray;
  const borderWidth = "2px";

  useEffect(() => {
    const fetchData = async () => {
      const leftData = await generateTickerData(50);
      const rightData = await generateTickerData(25);
      setTickersLeft(leftData);
      setTickersRight(rightData);
    };
    fetchData();
  }, []);

  // Usage:
  const exampleCharts: chartListType = {
    gap: ".5em",
    stockCharts: gridCards(),
    verticalSpacing: "30rem",
    templateColumns: "repeat(auto-fit, minmax(26rem, 1fr))",
  };

  const tickerBoard: tickerBoxType = {
    leftTicker: tickersLeft,
    rightTicker: tickersRight,
    leftPercent: "60%",
    rightPercent: "40%",
    bg: sectionBgColor,
    borderWidth: borderWidth,
    borderRadius: "10px",
    borderColor: "black",
    paddingY: "15px",
    paddingX: "0px"
  };

  return (
    <>
      <main>
        <Grid
          templateAreas={`
                        "tickers tickers"
                        "graphs graphs"`}
          gridTemplateRows="auto auto 1fr 1fr"
          gridTemplateColumns="5fr 3fr"
          gap="3"
          color="blackAlpha.700"
          fontWeight="bold"
          height="100%"
          paddingX={{ sm: "20px", md: "30px" }}
          paddingTop={"15px"}
          backgroundColor={pageBgColor}
        >
          <GridItem pl="2" area="tickers" padding="0px">
            <TickerBoard myTickers={tickerBoard}></TickerBoard>
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
    </>
  );
}
