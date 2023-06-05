import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

function NavBar() {
  const menuColor = 'rgb(0,0,0)';
  const hoverColor = { bg: 'skyblue', color: 'black' };
  const textColor = 'lightgrey';

  return (
    <Box
      bg="rgb(0,0,0)"
      display="flex"
      justifyContent="flex-end"
      width="100%"
      height="100%"

    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          fontSize="2rem"
          color="skyblue"
          marginLeft={{ base: '0px', lg: '10px' }}
          marginRight={{ base: '20px', lg: '10px' }}
          marginTop={{ base: '0px', lg: '10px' }}
          _hover={hoverColor}
        />
        <MenuList bg={menuColor} borderColor="skyblue" padding="0px">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <MenuItem bg="inherit" _hover={hoverColor} color={textColor}>
              Home
            </MenuItem>
          </Link>

          <Link href="/index-funds" style={{ textDecoration: 'none' }}>
            <MenuItem bg="inherit" _hover={hoverColor} color={textColor}>
              Index Funds
            </MenuItem>
          </Link>

          <Link href="/tests/" style={{ textDecoration: 'none' }}>
            <MenuItem bg="inherit" _hover={hoverColor} color={textColor}>
              Dev Tests
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavBar;
