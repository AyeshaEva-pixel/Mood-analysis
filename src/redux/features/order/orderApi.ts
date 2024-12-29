import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/order",
          method: "GET",
          params,
        };
      },
      providesTags: ["order"],
    }),

    addOrder: builder.mutation({
      query: (data) => {
        console.log("adding order", data);
        return {
          url: "/order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => {
        return {
          url: `/order/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["order"],
    }),

    updateOrder: builder.mutation({
      query: (args) => {
        return {
          url: `/order/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrderQuery,
  useUpdateOrderMutation,
} = orderApi;
