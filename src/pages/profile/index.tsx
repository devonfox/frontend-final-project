import React, { useState } from 'react';
import ProfileContainer from '@/components/Profile/ProfileContainer';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  const darkGray = 'rgb(20,20,25)';
  const pageBgColor = darkGray;

  return (
    <main style={{ backgroundColor: pageBgColor, minHeight: '100vh' }}>
      <Box mx={{ base: 10, md: 20 }} bgColor={pageBgColor}>
        <ProfileContainer bgColor={pageBgColor} />
      </Box>
    </main>
  );
}
