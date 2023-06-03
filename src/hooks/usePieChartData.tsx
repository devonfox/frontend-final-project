import { useState, useEffect } from "react";

interface PieChart {
  assets: {
    currency: string;
    value: number;
  };
  equities: number;
  liabilities: number;
}

const INIT_DATA: PieChart = {
  assets: {
    currency: "",
    value: 0,
  },
  equities: 0,
  liabilities: 0,
};

export function usePieChartData(symbol: string) {
  const [chartData, setChartData] = useState<PieChart>(INIT_DATA);
  const [chartLoading, setChartLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      let value = 0;
      let equities = 0;
      let liabilities = 0;

      try {
        const response = await fetch(`/api/polygonFinancials?symbol=${symbol}`);
        if (response.ok) {
          const data = await response.json();
          value =
            data["results"][0].financials.balance_sheet.current_assets.value;
          equities = data["results"]["equities"];
          liabilities = data["results"]["liabilities"];
          setChartData({
            assets: {
              currency: "USD",
              value: value,
            },
            equities,
            liabilities,
          });
        } else {
          console.error(`Failed to fetch data`);
          return;
        }
      } catch (error) {
        console.error(error);
        return;
      }
    };
    fetchData().finally(() => setChartLoading(false));
  }, [symbol]);

  return { chartData: chartData, chartLoading: chartLoading };
}
