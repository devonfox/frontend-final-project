import React, { useState } from 'react';
import {
  Box, Button, Center, Flex, Heading, Input, Spacer, Text,
} from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import ChartPie from '@/components/Chart/ChartPie';

export default function Home() {
  const [symbol, setSymbol] = useState<string>('AAPL');
  const [inputValue, setInputValue] = useState<string>('');

  const darkGray = 'rgb(20,20,25)';
  const pageBgColor = darkGray;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSymbol(inputValue);
  };
  return (
    <main className="bg-black">
      <Box backgroundColor={pageBgColor} color="white" paddingTop={10}>
        <Box mx={{ base: 10, md: 20 }}>
          <Heading as="h1" mb={10}>Stock Profiles</Heading>

          <Flex mb={20}>
            <Input
              placeholder="Search"
              size="lg"
              value={inputValue}
              onChange={handleInputChange}
              marginRight={5}
              marginBottom={10}
              aria-label="Search"
            />
            <Button size="lg" onClick={handleButtonClick} variant="outline">
              Search
            </Button>
          </Flex>
          <Box>
            <Heading as="h2" mb={10}>
              {`${symbol} Profile`}
            </Heading>
            <Center ml={{ base: -10, md: -20 }}>
              <ChartLine symbol={symbol} height={400} width="90%" />
            </Center>
            <Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
              <Box mx={10} width={{ base: '100%', md: '50%' }}><ChartPie symbol={symbol} /></Box>
              <Box mx={10} my={20} width={{ base: '100%', md: '50%' }}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Id
                  donec ultrices tincidunt arcu non sodales neque sodales. Convallis
                  posuere morbi leo urna molestie at elementum eu. Nisi vitae suscipit
                  tellus mauris a. Placerat duis ultricies lacus sed turpis tincidunt id
                  aliquet. Quam nulla porttitor massa id neque aliquam vestibulum. Mauris
                  nunc congue nisi vitae suscipit tellus mauris a. Purus semper eget
                  duis at tellus at urna. Lorem ipsum dolor sit amet consectetur. Hac
                  habitasse platea dictumst vestibulum. Elementum curabitur vitae nunc sed
                  velit.

                  Euismod lacinia at quis risus. Tellus orci ac auctor augue. Ut etiam
                  amet nisl purus in mollis. Tempus urna et pharetra pharetra massa massa
                  ultricies. Nunc lobortis mattis aliquam faucibus purus in. Egestas sed tempus
                  urna et pharetra pharetra massa. Sem integer vitae justo eget magna fermentum
                  iaculis eu non. Sed lectus vestibulum mattis ullamcorper velit sed. Malesuada
                  fames ac turpis egestas. Facilisi cras fermentum odio eu feugiat pretium nibh
                  ipsum consequat. Porta non pulvinar neque laoreet suspendisse interdum consectetur
                  libero id. Consectetur a erat nam at lectus. Nulla pellentesque dignissim enim
                  sit amet venenatis urna cursus. Ullamcorper velit sed ullamcorper morbi
                  tincidunt ornare massa eget egestas. Bibendum est ultricies integer quis
                  auctor elit sed vulputate mi.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
