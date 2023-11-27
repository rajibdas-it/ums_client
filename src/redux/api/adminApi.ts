import { url } from "inspector";
import { tagTypes } from "../tags-types";
import { baseApi } from "./baseApi";
import { IAdmin, IMeta } from "@/types";

const ADMIN_URL = "/admins";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdmin: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    getAdmins: build.query({
      query: (arg) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin, meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAddAdminMutation, useGetAdminsQuery } = adminApi;
