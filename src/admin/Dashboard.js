import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Container,
  Spacer,
  Card,
  HStack,
  Stack,
} from "@chakra-ui/react";
import StatisticsChart from "./StatisticsChart";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const seriesData = {
    monthDataSeries1: {
      prices: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      dates: [
        "2022-01-01",
        "2022-01-02",
        "2022-01-03",
        "2022-01-04",
        "2022-01-05",
        "2022-01-06",
        "2022-01-07",
        "2022-01-08",
        "2022-01-09",
      ],
    },
  };

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
