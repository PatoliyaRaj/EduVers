import { useSelector } from "react-redux";
import { selectCurrentUser, selectIsAuthenticated, selectAccessToken } from "../redux/slice/authSlice";
import { store } from "../redux/store/store";

// ============ CUSTOM HOOKS (Use in React Components) ============
// These are reactive - UI updates when state changes

export const useCurrentUser = () => useSelector(selectCurrentUser);
export const useIsAuthenticated = () => useSelector(selectIsAuthenticated);
export const useAccessToken = () => useSelector(selectAccessToken);
export const useAuth = () => ({
  user: useSelector(selectCurrentUser),
  isAuthenticated: useSelector(selectIsAuthenticated),
  accessToken: useSelector(selectAccessToken),
});


export const getCurrentUser = () => selectCurrentUser(store.getState());
export const getIsAuthenticated = () => selectIsAuthenticated(store.getState());
export const getAccessToken = () => selectAccessToken(store.getState());
export const getAuth = () => ({
  user: selectCurrentUser(store.getState()),
  isAuthenticated: selectIsAuthenticated(store.getState()),
  accessToken: selectAccessToken(store.getState()),
});