import { metadata } from "./../../../app/layout";
import { METHOD } from "@/enum/method";
import { baseApi } from "../baseApi";
import { tagTypes } from "@/redux/tags-types";
import { IAcademicDepartment, IMeta } from "@/types";

const ACADEMIC_DEPARTMENT_URL = "/academic-departments";

const acaDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAcaDepartment: build.mutation({
      query: (data) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: METHOD.POST,
        data,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    getAcaDepartments: build.query({
      query: (arg) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: METHOD.GET,
        params: arg,
      }),
      transformResponse: (response: IAcademicDepartment[], meta: IMeta) => {
        return {
          academicDepartments: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicDepartment],
    }),
  }),
});

export const { useAddAcaDepartmentMutation, useGetAcaDepartmentsQuery } =
  acaDepartmentApi;
