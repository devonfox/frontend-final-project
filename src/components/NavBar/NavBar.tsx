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
          marginLeft={{ base: '0px', md: '10px', lg: '10px' }}
          marginRight={{ base: '20px', md: '10px', lg: '10px' }}
          marginTop={{ base: '0px', md: '10px', lg: '10px' }}
          _hover={hoverColor}
        />
        <MenuList bg={menuColor} borderColor="skyblue" padding="0px">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <MenuItem bg="inherit" _hover={hoverColor} color={textColor}>
              Dashboard
            </MenuItem>
          </Link>

          <Link href="/profile" style={{ textDecoration: 'none' }}>
            <MenuItem bg="inherit" _hover={hoverColor} color={textColor}>
              Stock Profiles
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavBar;
