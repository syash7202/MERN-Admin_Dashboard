import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import LineChart from "components/LineChart";

const lineChart = () => {
  const [view, setView] = useState("topic");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Line Chart"
        subtitle="Line chart for the ocuurence of topics"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="topic">Topic</MenuItem> //sales
            <MenuItem value="intensity">Intensity</MenuItem> // units
          </Select>
        </FormControl>
        <LineChart view={view} />
      </Box>
    </Box>
  );
};

export default lineChart;
