import sp500Tickers from '@/utils/tickerSymbolData';
import TickerTable from '@/components/TickerBoard/TickerTable';
import React from 'react';

function ChartsPage() {
  const stockData = sp500Tickers.slice(0, 10);

  return (
    <div>
      <TickerTable symbols={stockData} />
    </div>
  );
}

export default ChartsPage;
