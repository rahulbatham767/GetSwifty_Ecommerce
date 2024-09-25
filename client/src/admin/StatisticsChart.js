import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Container, Heading } from "@chakra-ui/react";
import MyChart from "./MyChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [200, 400, 600, 800, 1000, 1200, 1400],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const data1 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const StatisticsChart = () => {
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
    <Container maxW="container.lg">
      <Box textAlign="center" marginTop="3rem">
        <Heading as="h2" mb="2">
          Statistics Chart
        </Heading>
      </Box>
      <Box mt="4" display="flex">
        <div style={{ height: "300px", width: "600px" }}>
          <MyChart seriesData={seriesData} />
        </div>
        <div style={{ height: "300px" }}>
          <Pie data={data1} />
        </div>
      </Box>
    </Container>
  );
};

export default StatisticsChart;
