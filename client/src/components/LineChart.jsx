import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useLineChartQuery } from "state/api";

const LineChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  const { data, isLoading } = useLineChartQuery();
  //   console.log(data);

  const [totalTopicLine, totalIntensityLine] = useMemo(() => {
    // sales -> topic
    if (!data) return [];

    const totalTopicLine = {
      id: "totalTopic",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalIntensityLine = {
      id: "totalIntensity",
      color: theme.palette.secondary[600],
      data: [],
    };

    Object.values(data).reduce(
      (acc, { topic, end_year }) => {
        totalTopicLine.data = [
          ...totalTopicLine.data,
          { x: topic, y: end_year },
        ];
        totalIntensityLine.data = [
          ...totalIntensityLine.data,
          { x: topic, y: end_year },
        ];

        return { topic: 100, end_year: 100 };
      },
      { sales: 0, units: 0 }
    );

    return [[totalTopicLine], [totalIntensityLine]];
  }, [data]);
  return (
    <ResponsiveLine
      data={view === "topic" ? totalTopicLine : totalIntensityLine}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary[200],
            },
          },
          legend: {
            text: {
              fill: theme.palette.secondary[200],
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
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "topic" ? "topic" : "intensity"} for Year`,
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default LineChart;
