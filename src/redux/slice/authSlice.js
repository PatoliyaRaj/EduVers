import { createSlice } from "@reduxjs/toolkit";

// Helper to safely parse JSON from localStorage
const getStoredUser = () => {
  try {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem("authUser");
    return null;
  }
};

// Get initial state from localStorage - ONLY uses authUser
const getInitialState = () => {
  const storedUser = getStoredUser();

  return {
    user: storedUser?.user || null,
    accessToken: storedUser?.accessToken || null,
    refreshToken: storedUser?.refreshToken || null,
    isAuthenticated: !!storedUser?.user,
    isLoading: false,
  };
};

// Helper to persist auth state
const persistAuth = (user, accessToken, refreshToken) => {
  if (user) {
    localStorage.setItem("authUser", JSON.stringify({ user, accessToken, refreshToken }));
  } else {
    localStorage.removeItem("authUser");
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload;
      
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
      
      if (accessToken) {
        state.accessToken = accessToken;
      }
      
      if (refreshToken) {
        state.refreshToken = refreshToken;
      }

      persistAuth(state.user, state.accessToken, state.refreshToken);
    },

    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
      persistAuth(state.user, state.accessToken, state.refreshToken);
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      
      localStorage.removeItem("authUser");
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        persistAuth(state.user, state.accessToken, state.refreshToken);
      }
    },
  },
});

export const {
  setCredentials,
  updateAccessToken,
  logout,
  setLoading,
  updateUserProfile,
} = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsLoading = (state) => state.auth.isLoading;

export default authSlice.reducer;
