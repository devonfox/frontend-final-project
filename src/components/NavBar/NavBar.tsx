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
          <Link href="/" style={{ textDecoration: "none" }}>
            <MenuItem bg={"inherit"} _hover={hoverColor} color={textColor}>
              Home
            </MenuItem>
          </Link>

          <Link href="/index-funds" style={{ textDecoration: "none" }}>
            <MenuItem bg={"inherit"} _hover={hoverColor} color={textColor}>
              Index Funds
            </MenuItem>
          </Link>

          <Link href="/tests/" style={{ textDecoration: "none" }}>
            <MenuItem bg={"inherit"} _hover={hoverColor} color={textColor}>
              Dev Tests
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavBar;
