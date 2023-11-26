import { IDepartments, IMeta } from "@/types";
import { tagTypes } from "../tags-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    getDepartments: build.query({
      query: () => ({
        url: DEPARTMENT_URL,
        method: "GET",
      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
  }),
});

export const { useAddDepartmentMutation, useGetDepartmentsQuery } =
  departmentApi;
