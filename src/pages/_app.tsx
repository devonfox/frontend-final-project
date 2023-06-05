/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return (
    <ChakraProvider>
      <Box
        height="100%"
        display="flex"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Box>
          <NavBar />
        </Box>
        <Box
          flex="1"
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
