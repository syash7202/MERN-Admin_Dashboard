import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useLineChartQuery } from "state/api";

const BarChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useLineChartQuery();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();

  if (!data || isLoading) return "Loading...";

  const intensityCount = data.reduce((acc, { intensity }) => {
    if (!acc[intensity]) {
      acc[intensity] = 0;
    }
    acc[intensity]++;
    return acc;
  }, {});

  const formattedData = Object.entries(intensityCount).map(
    ([intensity, count], i) => {
      return { id: intensity, value: count };
    }
  );

  //   console.log(formattedData);

  return (
    <Box
      height={isDashboard ? "355px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "300px" : undefined}
      minWidth={isDashboard ? "300px" : undefined}
      position="relative"
    >
      <ResponsiveBar
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[100],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        layout={isNonMediumScreens ? "horizontal" : "vertical"}
        indexBy="value"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        margin={
          isDashboard
            ? { top: 10, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of articles",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Intensity",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "colors",
          modifiers: [["darker", 1.6]],
        }}
        borderRadius={10}
        borderColor={{ theme: "background" }}
        legends={[
          {
            dataFrom: "formattedData",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[100]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      ></Box>
    </Box>
  );
};

export default BarChart;
