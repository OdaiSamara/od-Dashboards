import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Line from "./Line";
import Header from "../../component/Header"

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;
