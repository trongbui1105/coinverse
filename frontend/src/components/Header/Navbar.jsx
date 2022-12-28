import React from "react";

import { Link as RouterLink } from "react-router-dom";

import { Flex, Text, Link } from "@chakra-ui/react";

import navbarData from "./navbarData";

function Navbar() {
  const renderText = (text) => {
    return (
      <Text
        variant="body1"
        as="span"
        display="flex"
        alignItems="center"
        height="100%"
        mx={{ base: "5px", lg: "18px" }}
        userSelect="none"
      >
        {text}
      </Text>
    );
  };
  return (
    <Flex display={{ base: "none", md: "flex", lg: "flex" }}>
      {navbarData.map((item) => {
        if (item.target.length > 0)
          return (
            <Link key={item.text} to={item.target} as={RouterLink}>
              {renderText(item.text)}
            </Link>
          );
        else
          return (
            <React.Fragment key={item.text}>
              {renderText(item.text)}
            </React.Fragment>
          );
      })}
    </Flex>
  );
}

export default Navbar;
