// Export store
export { store } from "./store/store";

// Export API slice and hooks
export { apiSlice } from "./Apis/apiSlice";

// Auth exports
export {
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
} from "./Apis/authApi";

// Course exports
export {
  useGetAllCoursesQuery,
  useLazyGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useLazyGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} from "./Apis/courseApi";

// Contact exports
export {
  useSubmitContactMutation,
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from "./Apis/contactApi";

// Auth slice exports
export {
  setCredentials,
  updateAccessToken,
  logout,
  setLoading,
  updateUserProfile,
  selectCurrentUser,
  selectAccessToken,
  selectIsAuthenticated,
  selectIsLoading,
} from "./slice/authSlice";

export { useAuth } from "./FatchBase/useAuth";
