import { Box } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  const menuColor = "grey";
  const hoverColor = { bg: "white", color: "black" };
  const textColor = "lightgrey";

  return (
    <Box
      bg={"grey"}
      display={"flex"}
      justifyContent={"flex-end"}
      paddingX={"10px"}
      paddingY={"5px"}
    >
      <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="ghost"
            fontSize="2rem"
          />
        <MenuList bg={menuColor}>

          <Link href="/tests/graphtoggle">
          <MenuItem
            as="a"
            bg={"inherit"}
            _hover={hoverColor}
            color={textColor}

          >
            Graph Toggle
          </MenuItem>
          </Link>

          <Link href="/tests/grid">
            <MenuItem
              as="a"
              bg={"inherit"}
              _hover={hoverColor}
              color={textColor}
            >
              Grid
            </MenuItem>
          </Link>

          <Link href="/tests/home">
            <MenuItem
              as="a"
              bg={"inherit"}
              _hover={hoverColor}
              color={textColor}
              href="/tests/home"
            >
              HomePage Test
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavBar;
