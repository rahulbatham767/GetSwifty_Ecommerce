import React from "react";
import AdminNavbar from "./AdminNavbar";
import Login from "../components/account/Login";
import { Box } from "@chakra-ui/react";

const Myadmin = () => {
  return (
    <Box mt={"5rem"}>
      <Login />
    </Box>
  );
};

export default Myadmin;
