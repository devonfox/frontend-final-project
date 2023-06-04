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
      paddingX={{ base: '10px', md: '20px' }}
      paddingY={{ base: '0px', md: '5px' }}
      width={{ base: '100%', md: '60px' }}
      height={{ base: '60px', md: '100%' }}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          fontSize="2rem"
          color="skyblue"
          marginRight={{ base: '0px', lg: '20px' }}
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
