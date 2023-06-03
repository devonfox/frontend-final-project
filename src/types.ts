import { Key, ReactNode } from "react";

export type chartType = {
    id: Key | null | undefined;
    chart: ReactNode;
}

export type chartListType= {
    gap: string;
    stockCharts: { id: number; chart: React.JSX.Element; }[];
    verticalSpacing: string;
    templateColumns: string;
};

export type tickerType = {
    id: string | null | undefined;
    ticker: any;
}

export type tickerDataType = {
    ticker: string,
    price: string,
    percent_change: string,
    market_cap: string,
    volume: string,
    dividend_yield: string
};

export type tickerListType = {
    stockTickers: Array<tickerType>;
};

export type tickerObjectType  = {
    data: tickerDataType;
    id: number;
  }

export type toggleCardType = {
    lineChart: any;
    pieChart: any;
}

export type tickerBoxType = {
    leftTicker: any;
    rightTicker: any;
    leftPercent: string;
    rightPercent: string;
    bg: string;
    borderWidth: string;
    borderRadius: string;
    borderColor: string;
    paddingY:any;
    paddingX:any;
}