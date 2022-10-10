import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

const createRequest = (url: string) => ({
  url,
});
export const fetchUsers = createApi({
  reducerPath: "fetchUsers",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (count) => createRequest(`/users?limit=${count}`),
    }),
    getUserDetails: builder.query({
      query: (id) => createRequest(`/users/${id}`),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserDetailsQuery } = fetchUsers;
