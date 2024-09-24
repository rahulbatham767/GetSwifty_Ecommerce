import React from "react";
import {
  Box,
   
  Heading,
  Flex,
  
  Spacer,
  Card,
  HStack,
  Stack,
} from "@chakra-ui/react";
import StatisticsChart from "./StatisticsChart";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  

  return (
    <>
      <div style={{ marginLeft: "36rem" }}>
        <h2>Dashboard</h2>
        <Flex marginTop="3rem">
          <Card title="Total Sales" value="$22,678" />
          <Spacer />
          <Card title="Total Orders" value="50" />
          <Spacer />
          <Card title="Users Online" value="20" />
          <Spacer />
        </Flex>
        <Box textAlign="center" marginTop="2rem">
          <StatisticsChart />
        </Box>
      </div>
      <Box justifyContent={"space-around"} display={"flex"}>
        <Card justifyContent={"space-around"}>
          <Stack>
            <HStack justifyContent={"space-between"}>
              <Heading size="md">Best Sellers</Heading>
              <NavLink to={"/product"} style={{ fontSize: "2.2rem" }}>
                All products
              </NavLink>
            </HStack>
          </Stack>
        </Card>{" "}
      </Box>
    </>
  );
};
export default Dashboard;
