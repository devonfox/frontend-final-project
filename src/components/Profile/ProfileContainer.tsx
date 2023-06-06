import React, { useState } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import ProfileSearch from '@/components/Profile/ProfileSearch';
import ProfileGridDisplay from '@/components/Profile/ProfileGridDisplay';

interface ProfileContainerProps {
  bgColor: string;
}

function ProfileContainer(props: ProfileContainerProps) {
  const { bgColor } = props;

  const [symbol, setSymbol] = useState<string>('AAPL');
  const [init, setInit] = useState<boolean>(true);

  return (
    <Box backgroundColor={bgColor} color="white" paddingTop={10}>

      <ProfileSearch setSymbol={setSymbol} setInit={setInit}/>
      {!init && <ProfileGridDisplay symbol={symbol} />}
    </Box>
  );
}

export default ProfileContainer;
