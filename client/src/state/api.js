import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  reducerPath: "adminApi",
  tagTypes: ["Data", "Sector"],
  endpoints: (build) => ({
    getData: build.query({
      query: (id) => `general/data/${id}`,
      providesTags: ["Data"],
    }),
    getSector: build.query({
      query: () => `filter/sectors/`,
      providesTags: ["Sector"],
    }),
  }),
});

export const { useGetDataQuery, useGetSectorQuery } = api; // use and query additional and getData is endpoint
