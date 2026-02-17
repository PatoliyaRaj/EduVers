import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:5000";

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Base query wrapper with automatic token refresh
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("Token expired, attempting refresh...");

    const refreshResult = await baseQuery(
      {
        url: "/Auth/refresh-token",
        method: "POST",
      },
      api,
      extraOptions,
    );

    if (refreshResult?.data?.success) {
      const newToken = refreshResult.data.data.accessToken;

      api.dispatch({
        type: "auth/setCredentials",
        payload: { accessToken: newToken },
      });

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch({ type: "auth/logout" });
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Course", "Contact"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
