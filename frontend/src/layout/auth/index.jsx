import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "../../components/Header";

function AuthLayout() {
  return (
    <Box bg="#f7fafc" minH="100vh">
      <Header />
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
