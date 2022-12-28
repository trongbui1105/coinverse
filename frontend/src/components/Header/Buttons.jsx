import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Button, Link } from "@chakra-ui/react";
import {
  MenuItem,
  Select,
} from "@material-ui/core";
import { CryptoState } from "components/CryptoContext";

function Buttons() {
  const { currency, setCurrency } = CryptoState();
  return (
    <Flex align="center" display={{ base: "none", md: "flex" }}>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 30, marginRight: "10px" }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
      <Link as={ReactRouterLink} to="/learn">
        <Button variant="primary">Get Started</Button>
      </Link>
    </Flex>
  );
}

export default Buttons;
