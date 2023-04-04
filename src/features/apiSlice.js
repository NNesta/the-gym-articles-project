import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const today = new Date();

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/api/" }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (category) =>
        `everything?q=${category}&to=${today.toISOString()}&sortBy=publishedAt&apiKey=9898f7aecfb84ac9b602ae868ddfa004`,
    }),
  }),
});
export const { useGetAllNewsQuery } = newsApi;
