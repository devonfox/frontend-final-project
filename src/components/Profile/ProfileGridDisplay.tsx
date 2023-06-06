import React from 'react';
import {
  Box, Center, Flex, Heading, Text,
} from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import ChartPie from '@/components/Chart/ChartPie';

interface ProfileGridDisplayProps {
  symbol: string;
}

function ProfileGridDisplay(props: ProfileGridDisplayProps) {
  const { symbol } = props;
  return (
    <Box>
      <Heading as="h2" mb={10}>
        {`${symbol} Profile`}
      </Heading>
      <Center ml={{ base: -5, md: -10 }}>
        <ChartLine symbol={symbol} height={400} width="90%" />
      </Center>
      <Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box mx={10} width={{ base: '100%', md: '50%' }}><ChartPie symbol={symbol} width="100%" /></Box>
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
  );
}

export default ProfileGridDisplay;
