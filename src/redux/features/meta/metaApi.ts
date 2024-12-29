import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),

    getOrderData: builder.query({
      query: (duration) => {
        return {
          url: `/meta/order-chart?duration=${duration}`,
          method: "GET",
        };
      },
      providesTags: ["meta"],
    }),
  }),
});

export const { useGetMetaDataQuery, useGetOrderDataQuery } = metaApi;
