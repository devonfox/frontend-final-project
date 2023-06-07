import { useState, useEffect } from 'react';

interface BarChartElement {
  name: string;
  value: number;
  color: string;
}

interface BarChartData {
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
  barChartData: BarChartElement[];
}

const colors = [
  '#ff7f0e', // orange
  '#b574fe', // purple
  '#17becf', // cyan
];

const INIT_DATA: BarChartData = {
  assets: { currency: 'USD', label: 'Assets' },
  liabilities: { currency: 'USD', label: 'Liabilities' },
  equities: { currency: 'USD', label: 'Equities' },
  barChartData: [],
};

function useBarChartData(symbol: string) {
  const [chartData, setChartData] = useState<BarChartData>(INIT_DATA);
  const [chartLoading, setChartLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const barChartData: BarChartElement[] = [];

      try {
        const response = await fetch(`/api/polygonFinancials?symbol=${symbol}`);
        if (response.ok) {
          const data = await response.json();

          const {
            unit: assetUnit,
            value: assetValue,
            label: assetLabel,
          } = data.results[0].financials.balance_sheet.current_assets;
          barChartData.push({
            name: assetLabel.split(' ')[1],
            value: assetValue,
            color: colors[0],
          });
          const {
            unit: liabilityUnit,
            value: liabilityValue,
            label: liabilityLabel,
          } = data.results[0].financials.balance_sheet.current_liabilities;
          barChartData.push({
            name: liabilityLabel.split(' ')[1],
            value: liabilityValue,
            color: colors[1],
          });
          const {
            unit: equityUnit,
            value: equityValue,
            label: equityLabel,
          } = data.results[0].financials.balance_sheet.equity;
          barChartData.push({
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
            barChartData,
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

export default useBarChartData;
