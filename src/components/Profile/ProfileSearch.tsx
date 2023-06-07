import React, { useState } from 'react';
import {
  Box, Button, Flex, Heading, Input,
} from '@chakra-ui/react';

interface ProfileSearchProps {
  setSymbol: React.Dispatch<React.SetStateAction<string>>;
  setInit: React.Dispatch<React.SetStateAction<boolean>>
}

function ProfileSearch(props: ProfileSearchProps) {
  const { setSymbol, setInit } = props;

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSymbol(inputValue);
    setInit(false);
  };

  return (
    <Box>
      <Heading as="h1" mb={10}>Stock Profiles</Heading>
      <Flex mb={10}>
        <Input
          placeholder="Search"
          size="lg"
          value={inputValue}
          onChange={handleInputChange}
          marginRight={5}
          aria-label="Search"
        />
        <Button size="lg" onClick={handleButtonClick} variant="outline">
          Search
        </Button>
      </Flex>
    </Box>

  );
}

export default ProfileSearch;
