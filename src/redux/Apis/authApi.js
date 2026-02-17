import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/Auth/Login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => response,
      invalidatesTags: ["User"],
    }),

    logout: builder.mutation({
      query: (data) => ({
        url: "/Auth/Logout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User", "Course"],
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: "/Auth/refresh-token",
        method: "POST",
      }),
    }),

    getCurrentUser: builder.query({
      query: () => "/Auth/me",
      providesTags: ["User"],
    }),

    signup: builder.mutation({
      query: (userData) => ({
        url: "/User/Signup",
        method: "POST",
        body: userData,
      }),
    }),

    getAllUsers: builder.query({
      query: () => "/User/AllUsers",
      providesTags: (result) =>
        result?.users
          ? [
              ...result.users.map(({ id }) => ({ type: "User", id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    getUserDetails: builder.query({
      query: (email) => `/User/Details/${email}`,
      providesTags: (result, error, email) => [{ type: "User", id: email }],
    }),

    updateUser: builder.mutation({
      query: ({ email, id, ...userData }) => ({
        url: `/User/Update/${id}`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: (result, error, { email }) => [
        { type: "User", id: email },
        "User",
      ],
    }),

    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/User/Delete`,
        method: "DELETE",
        params: { email },
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useSignupMutation,
  useGetAllUsersQuery,
  useGetUserDetailsQuery,
  useLazyGetUserDetailsQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = authApi;
