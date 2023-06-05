import { useState, useEffect } from 'react';

interface PieChartElement {
  name: string;
  value: number;
  color: string;
}

interface PieChartData {
  assets: {
    currency: string;
    label: string;
  };
  equities: {
    currency: string;
    label: string;
  };
  liabilities: {
    currency: string;
    label: string;
  };
  pieChartData: PieChartElement[];
}

const INIT_DATA: PieChartData = {
  assets: { currency: 'USD', label: 'Assets' },
  liabilities: { currency: 'USD', label: 'Liabilities' },
  equities: { currency: 'USD', label: 'Equities' },
  pieChartData: [],
};

const colors = [
  '#ff7f0e', // orange
  '#b574fe', // purple
  '#17becf', // cyan
];

function usePieChartData(symbol: string) {
  const [chartData, setChartData] = useState<PieChartData>(INIT_DATA);
  const [chartLoading, setChartLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const pieChartData: PieChartElement[] = [];

      try {
        const response = await fetch(`/api/polygonFinancials?symbol=${symbol}`);
        if (response.ok) {
          const data = await response.json();

          const {
            unit: assetUnit,
            value: assetValue,
            label: assetLabel,
          } = data.results[0].financials.balance_sheet.current_assets;
          pieChartData.push({
            name: assetLabel,
            value: assetValue,
            color: colors[0],
          });
          const {
            unit: liabilityUnit,
            value: liabilityValue,
            label: liabilityLabel,
          } = data.results[0].financials.balance_sheet.current_liabilities;
          pieChartData.push({
            name: liabilityLabel,
            value: liabilityValue,
            color: colors[1],
          });
          const {
            unit: equityUnit,
            value: equityValue,
            label: equityLabel,
          } = data.results[0].financials.balance_sheet.equity;
          pieChartData.push({
            name: equityLabel,
            value: equityValue,
            color: colors[2],
          });
          setChartData({
            assets: {
              currency: assetUnit,
              label: assetLabel,
            },
            equities: {
              currency: equityUnit,
              label: equityLabel,
            },
            liabilities: {
              currency: liabilityUnit,
              label: liabilityLabel,
            },
            pieChartData,
          });
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().finally(() => setChartLoading(false));
  }, [symbol]);

  return { chartData, chartLoading };
}

export default usePieChartData;
