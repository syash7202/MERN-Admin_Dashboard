import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { Box, useTheme } from "@mui/material";
import { useRadarChartQuery } from "state/api";

const RadarChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useRadarChartQuery();
  const theme = useTheme();

  if (!data || isLoading) return "Loading...";

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  console.log(data);

  return (
    <Box
      height={isDashboard ? "380px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsiveRadar
        data={data}
        keys={["articles"]}
        indexBy="region"
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
        colors={{ scheme: "nivo" }}
        margin={
          isDashboard
            ? { top: 20, right: 50, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        valueFormat=">-.2f"
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        fillOpacity={1}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            translateX: -60,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default RadarChart;
