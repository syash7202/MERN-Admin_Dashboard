import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import BarChart from "components/BarChart";

const Bar_Chart = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Bar Chart" subtitle="Topic wise distribution" />
      <Box mt="40px" height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar_Chart;
