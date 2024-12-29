/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserInfo } from "../../utils/localStorageAuthManagemet";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://okobiscuit-beckend.vercel.app/api/v1",
  baseUrl: "http://localhost:4000/api/v1",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getUserInfo();

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["meta", "user", "order"],
  refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
});
