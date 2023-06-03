import {
  Box, Input, Button, Flex,
} from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import React, { useState } from 'react';
import ChartPie from '@/components/Chart/ChartPie';

function ChartPage() {
  const [symbol, setSymbol] = useState<string>('AAPL');
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSymbol(inputValue);
  };

  return (
    <Box m={5}>
      <Flex>
        <Input
          placeholder="Search"
          size="lg"
          value={inputValue}
          onChange={handleInputChange}
          marginRight={2}
          marginBottom={10}
        />
        <Button size="lg" onClick={handleButtonClick}>
          Search
        </Button>
      </Flex>
      <ChartLine symbol={symbol} />
      <ChartPie symbol={symbol} />
    </Box>
  );
}

export default ChartPage;
