import { url } from "inspector";
import { tagTypes } from "../tags-types";
import { baseApi } from "./baseApi";

const adminUrl = "/admins";

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
      query: () => ({
        url: adminUrl,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddAdminMutation } = adminApi;
