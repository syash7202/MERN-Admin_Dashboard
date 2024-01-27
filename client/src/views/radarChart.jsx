import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import RadarChart from "components/RadarChart";

const Radar_Chart = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Radar Chart"
        subtitle="Region wise distribution of number of articles"
      />
      <Box mt="40px" height="75vh">
        <RadarChart />
      </Box>
    </Box>
  );
};

export default Radar_Chart;
