import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;