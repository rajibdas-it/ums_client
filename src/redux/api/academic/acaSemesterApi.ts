import { METHOD } from "@/enum/method";
import { baseApi } from "../baseApi";
import { url } from "inspector";
import { IAcademicSemester, IMeta } from "@/types";
import { tagTypes } from "@/redux/tags-types";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";

const acaSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: METHOD.POST,
        data,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    getSemesters: build.query({
      query: (arg) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: METHOD.GET,
        params: arg,
      }),
      transformResponse: (response: IAcademicSemester, meta: IMeta) => {
        return {
          academicSemester: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicSemester],
    }),
  }),
});

export const { useAddSemesterMutation, useGetSemestersQuery } = acaSemesterApi;
