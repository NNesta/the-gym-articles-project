import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const today = new Date();

const KEY = process.env.REACT_APP_KEY;
const URL = process.env.REACT_APP_URL;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (category) =>
        `everything?q=${category}&to=${today.toISOString()}&sortBy=publishedAt&apiKey=${KEY}`,
    }),
    getAllTrendingNews: builder.query({
      query: (category) =>
        `top-headlines?q=${category}&to=${today.toISOString()}&sortBy=publishedAt&apiKey=${KEY}`,
    }),
  }),
});
export const { useGetAllNewsQuery, useGetAllTrendingNewsQuery } = newsApi;
