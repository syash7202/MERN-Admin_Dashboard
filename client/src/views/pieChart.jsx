import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import PieChart from "components/PieChart";

const Pie_Chart = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Pie Chart" subtitle="End year wise distribution" />
      <Box mt="40px" height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie_Chart;
