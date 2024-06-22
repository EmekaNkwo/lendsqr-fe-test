/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 20,
  tagTypes: ["Users", "UserInfo"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    getUserInfo: builder.query({
      query: (id: string) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["UserInfo"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserInfoQuery } = userApi;
