import React from 'react';
import ProfileContainer from '@/components/Profile/ProfileContainer';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const darkGray = 'rgb(20,20,25)';
  const pageBgColor = darkGray;

  return (
    <main style={{ backgroundColor: pageBgColor, minHeight: '100vh' }}>
      <Head>
        <title>Stock Profiles</title>
      </Head>
      <Box px={{ base: 10, md: 10 }} bgColor={pageBgColor}>
        <ProfileContainer bgColor={pageBgColor} />
      </Box>
    </main>
  );
}
