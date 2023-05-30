export type chartType = {
    id: any;
    chart: any;
}

export type chartListType= {
    gap: string;
    stockCharts: Array<any>;
    verticalSpacing: string;
    templateColumns: string;
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