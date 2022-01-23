import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Headers = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": import.meta.env.VITE_API_HOST_NEWS,
  "x-rapidapi-key": import.meta.env.VITE_API_HEADERS_KEY_NEWS,
};

const baseURL = import.meta.env.VITE_APP_BASE_URL_NEWS;
const crateRequest = (url) => ({ url, headers: Headers });

export const cryptoNewsApi = createApi({
  reduccerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        crateRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
