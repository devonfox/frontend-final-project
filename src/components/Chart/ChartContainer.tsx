import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import ChartPie from '@/components/Chart/ChartPie';

interface ChartContainerProps {
  symbol: string;
  switchCard: boolean;

}

const displayChart = (symbol: string, switchCard: boolean) => (switchCard ? (
  <ChartLine symbol={symbol} height={400} width={400} />
) : (
  <ChartPie symbol={symbol} height={400} width={400} />
));

function ChartContainer(props: ChartContainerProps) {
  const { symbol, switchCard } = props;
  const [symbolName, setSymbolName] = React.useState<string>(`${symbol}`);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [noData, setNoData] = React.useState<boolean>(false);

  useEffect(() => {
    const fetchName = async () => {
      const nameResponse = await fetch(`/api/polygonDetail?symbol=${symbol}`);
      if (!nameResponse.ok) {
        console.error(`Failed to fetch name data for ${symbol}`);
        throw new Error('Failed to fetch name data');
      }
      const nameData = await nameResponse.json();
      const { name } = nameData.results;
      setSymbolName(name);
    };
    fetchName().catch(() => setNoData(true)).finally(() => { setLoading(false); });
  }, [symbol]);

  if (noData && !loading) {
    return (
      <Box height={400} width={400}>
        {`${symbolName}: No data available`}
      </Box>
    );
  }

  return !loading ? (
    <Box height={400} width={400}>
      <Text>{symbolName}</Text>
      {displayChart(symbol, switchCard)}
    </Box>
  ) : (
    <Box height={400} width={400}>
      Loading...
    </Box>
  );
}

export default ChartContainer;
