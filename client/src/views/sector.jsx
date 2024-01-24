import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetSectorQuery } from "state/api.js";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
const Sector = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetSectorQuery();
  // console.log("data", data);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 0.25,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "insight",
      headerName: "Gist",
      flex: 1,
    },
    {
      field: "published",
      headerName: "Published",
      flex: 0.3,
    },
    {
      field: "url",
      headerName: "Link",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Sector" subtitle="List of Sector-wise search" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Sector;
