import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridCustomToolbar } from "components/DataGridCustomToolbar.jsx";
import { useGetCountryQuery } from "state/api.js";
import Header from "components/Header.jsx";
const Country = () => {
  const theme = useTheme();

  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetCountryQuery({
    search,
  });
  console.log(data);

  const columns = [
    {
      field: "relevance",
      headerName: "Relevance",
      flex: 0.2,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.3,
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
      <Header
        title="Country-wise"
        subtitle="Search through the entire list of countries"
      />
      <Box
        height="80vh"
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
          rows={(data && data.country) || []}
          columns={columns}
          pagination
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Country;
