import { METHOD } from "@/enum/method";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tags-types";
import { url } from "inspector";
import { IFaculty, IMeta } from "@/types";

const FACULTY_URL = "/faculty";

const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFaculty: build.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: METHOD.POST,
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    getFaculties: build.query({
      query: (arg) => ({
        url: FACULTY_URL,
        method: METHOD.GET,
        params: arg,
      }),
      transformResponse: (response: IFaculty[], meta: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.faculty],
    }),
    getSingleFaculty: build.query({
      query: (id) => ({
        url: `${FACULTY_URL}/${id}`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.faculty],
    }),
  }),
});

export const {
  useAddFacultyMutation,
  useGetFacultiesQuery,
  useGetSingleFacultyQuery,
} = facultyApi;
