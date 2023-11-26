import { IDepartments, IMeta } from "@/types";
import { tagTypes } from "../tags-types";
import { baseApi } from "./baseApi";
import { url } from "inspector";

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
      query: (arg) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
    getDepartment: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
