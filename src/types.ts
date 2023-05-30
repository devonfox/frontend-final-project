import { Key } from "react";

export type chartType = {
    id: Key | null | undefined;
    chart: any;
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

export type tickerListType = {
    stockTickers: Array<tickerType>;
};

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
}