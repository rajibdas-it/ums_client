import { tagTypes } from "@/redux/tags-types";
import { baseApi } from "../baseApi";
import { IAcademicFaculty, IMeta } from "@/types";

const ACADEMIC_FACULTY_URL = "/academic-faculties";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAcaFaculty: build.mutation({
      query: (data) => ({
        url: ACADEMIC_FACULTY_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicFaculty],
    }),
    getAcaFaculties: build.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      transformResponse: (response: IAcademicFaculty, meta: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicFaculty],
    }),
    getSingleAcaFaculty: build.query({
      query: (id) => ({
        url: `${ACADEMIC_FACULTY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicFaculty],
    }),
  }),
});

export const {
  useAddAcaFacultyMutation,
  useGetAcaFacultiesQuery,
  useGetSingleAcaFacultyQuery,
} = academicFacultyApi;
