import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseUrl = import.meta.env.VITE_BASE_URL;
export const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});
