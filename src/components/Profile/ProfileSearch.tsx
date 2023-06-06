import React, { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';

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
  );
}

export default ProfileSearch;
