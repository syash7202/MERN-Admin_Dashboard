import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  reducerPath: "adminApi",
  tagTypes: [
    "Data",
    "Topic",
    "End Year",
    "Sector",
    "Region",
    "PEST",
    "Source",
    "Country",
    "GeoMapping",
    "LineChart",
    "RadarChart",
  ],
  endpoints: (build) => ({
    //dev test api for connections and particular search
    // getData: build.query({
    //   query: (id) => `general/data/${id}`,
    //   providesTags: ["Data"],
    // }),
    getEndYear: build.query({
      query: ({ search }) => ({
        url: `filter/year/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["End Year"],
    }),
    getTopic: build.query({
      query: ({ search }) => ({
        url: `filter/topic/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["Topic"],
    }),
    getSector: build.query({
      query: () => `filter/sectors/`,
      providesTags: ["Sector"],
    }),
    getRegion: build.query({
      query: ({ search }) => ({
        url: `filter/regions/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["Region"],
    }),
    getPEST: build.query({
      query: ({ search }) => ({
        url: `filter/pestle/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["PEST"],
    }),
    getCountry: build.query({
      query: ({ search }) => ({
        url: `filter/country/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["Country"],
    }),
    getSource: build.query({
      query: ({ search }) => ({
        url: `filter/source/`,
        method: "GET",
        params: { search },
      }),
      providesTags: ["Source"],
    }),

    // visualization api mapping
    geoMap: build.query({
      query: () => `general/geoMap/`,
      providesTags: ["GeoMapping"],
    }),
    lineChart: build.query({
      query: () => `general/lineChart/`,
      providesTags: ["LineChart"],
    }),
    radarChart: build.query({
      query: () => `general/radarChart/`,
      providesTags: ["RadarChart"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetEndYearQuery,
  useGetTopicQuery,
  useGetSectorQuery,
  useGetRegionQuery,
  useGetPESTQuery,
  useGetSourceQuery,
  useGetCountryQuery,
  useGeoMapQuery,
  useLineChartQuery,
  useRadarChartQuery,
} = api; // use and query additional and getData is endpoint
