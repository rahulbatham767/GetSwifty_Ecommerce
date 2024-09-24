import React from "react";
import Chart from "react-apexcharts";

const MyChart = ({ seriesData }) => {
  const options = {
    series: [
      {
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices,
      },
    ],
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
    },
    subtitle: {
      text: "Price Movements",
      align: "left",
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <Chart options={options} series={options.series} type="area" height={350} />
  );
};

export default MyChart;
