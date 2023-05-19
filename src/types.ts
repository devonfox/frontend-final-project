export type chartType = {
    id: any;
    chart: any;
}

export type chartListType= {
    gap: string;
    stockCharts: Array<chartType>;
};

export type tickerType = {
    id: any;
    ticker: any;
}

export type tickerListType = {
    stockTickers: Array<tickerType>;
};
