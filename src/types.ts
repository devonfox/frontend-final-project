export type chartType = {
    id: any;
    chart: any;
}

export type chartListType= {
    gap: string;
    stockCharts: Array<chartType>;
    verticalSpacing: string;
};

export type tickerType = {
    id: any;
    ticker: any;
}

export type tickerListType = {
    stockTickers: Array<tickerType>;
};


export type graphType = {
    id: any;
    chart: any;
}

export type toggleCardType = {
    lineChart: any;
    pieChart: any;
}