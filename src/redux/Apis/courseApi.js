import { apiSlice } from "./apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/Course/all",
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "Course", id })),
              { type: "Course", id: "LIST" },
            ]
          : [{ type: "Course", id: "LIST" }],
    }),

    getCourseById: builder.query({
      query: (id) => `/Course/get/${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),

    createCourse: builder.mutation({
      query: (courseData) => ({
        url: "/Course/create",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: [{ type: "Course", id: "LIST" }],
    }),

    updateCourse: builder.mutation({
      query: ({ id, ...courseData }) => ({
        url: `/Course/update/${id}`,
        method: "PATCH",
        body: courseData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Course", id },
        { type: "Course", id: "LIST" },
      ],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: "/Course/delete",
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Course", id },
        { type: "Course", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCoursesQuery,
  useLazyGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useLazyGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
