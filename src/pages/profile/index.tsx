import React, { useState } from 'react';
import ProfileContainer from '@/components/Profile/ProfileContainer';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  const darkGray = 'rgb(20,20,25)';
  const pageBgColor = darkGray;

  return (
    <main className="bg-black">
      <Box mx={{ base: 10, md: 20 }}>
        <Heading as="h1" mb={10}>Stock Profiles</Heading>
        <ProfileContainer bgColor={"black"} />
      </Box>
    </main>
  );
}
