import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Card,
  CardBody,
  Td,
  Tbody,
  Tr,
  TableContainer, Table, Link, VStack,
} from '@chakra-ui/react';
import ChartLine from '@/components/Chart/ChartLine';
import useProfileData from '@/hooks/useProfileData';
import { WarningTwoIcon } from '@chakra-ui/icons';
import ChartBar from '@/components/Chart/ChartBar';

interface ProfileGridDisplayProps {
  symbol: string;
}

const convertCap = (cap: number): string => {
  const billions = cap / 1000000000;
  const millions = cap / 1000000;
  if (billions >= 1) {
    return `${billions.toFixed(2)} billion`;
  }
  if (millions >= 1) {
    return `${millions.toFixed(2)} million`;
  }
  return `${cap}`;
};

function ProfileGridDisplay(props: ProfileGridDisplayProps) {
  const { symbol } = props;

  const { profileData, loading, notFound } = useProfileData(symbol);

  if ((notFound && !loading) || symbol === '') {
    return (
      <Box>
        <Flex>
          <WarningTwoIcon mt={2} mr={2} color="red.200" />
          <Text fontSize="1.2rem">Symbol Not Found.</Text>
        </Flex>
      </Box>
    );
  }

  return !loading ? (
    <Box>
      <Heading as="h2" my={10}>
        {profileData.name}
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={5}
      >
        <GridItem colSpan={1}>
          <Card height="100%" width="100%" bgColor="black" borderRadius="lg">
            <CardBody>
              <Text fontSize="1.2rem" m={5} color="white">{profileData.description}</Text>
            </CardBody>
          </Card>

        </GridItem>
        <GridItem colSpan={1}>
          <Card height="100%" width="100%" bgColor="black" borderRadius="lg">
            <CardBody mt={5} ml={5}><ChartBar symbol={symbol} /></CardBody>
          </Card>
        </GridItem>
      </Grid>
      <Heading as="h2" my={10}>
        Stock Price
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={5}
      >
        <GridItem colSpan={2}>
          <Card height="100%" width="100%" bgColor="black" borderRadius="lg">
            <CardBody m={5}>
              <ChartLine symbol={symbol} height={400} />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={{ base: 20, md: 5 }}
      >
        <GridItem colSpan={1} mt={{ base: 10, md: 0 }}>
          <Heading as="h2" my={10}>
            Info
          </Heading>
          <Card height="100%" width="100%" bgColor="black" borderRadius="lg">
            <CardBody mt={10}>
              <TableContainer>
                <Table variant="unstyled" color="white">
                  <Tbody fontSize="2xl">
                    <Tr>
                      <Td>Symbol</Td>
                      <Td>{profileData.ticker}</Td>
                    </Tr>
                    <Tr>
                      <Td>Market Cap</Td>

                      <Td>{convertCap(profileData.marketCap)}</Td>
                    </Tr>
                    <Tr>
                      <Td>List Date</Td>

                      <Td>{profileData.listDate}</Td>
                    </Tr>
                    <Tr>
                      <Td>Total Employees</Td>

                      <Td isNumeric>{profileData.totalEmployees}</Td>
                    </Tr>
                    <Tr>
                      <Td>Link</Td>

                      <Td><Link href={profileData.url}>{profileData.url}</Link></Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={1} mt={{ base: 10, md: 0 }}>
          <Heading as="h2" my={10}>
            Address
          </Heading>
          <Card height="100%" width="100%" bgColor="black" borderRadius="lg">
            <CardBody>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <VStack alignItems="flex-start">
                  <Box color="white" fontSize="2xl">
                    <Box>
                      {`${profileData.address.street}`}
                    </Box>
                    {`${profileData.address.city}, ${profileData.address.state} ${profileData.address.code}`}
                  </Box>
                </VStack>
              </Box>

            </CardBody>
          </Card>
        </GridItem>
        <GridItem my={20} />
      </Grid>

    </Box>
  ) : <Box />;
}

export default ProfileGridDisplay;
