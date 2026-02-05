import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectAccessToken,
  logout as logoutAction,
} from "./../slice/authSlice";
import { useLogoutMutation } from "../Apis/authApi";
import { getAuth } from "../../utils/users";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = getAuth().user;
  const isAuthenticated = getAuth().isAuthenticated;
  const accessToken = getAuth().accessToken;
  
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  const logout = async () => {
    try {
      await logoutMutation({ email: user?.email }).unwrap();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      dispatch(logoutAction());
      navigate("/login");
    }
  };

  const hasRole = (role) => {
    return user?.userType?.toUpperCase() === role.toUpperCase();
  };

  const isTeacher = () => hasRole("TEACHER");

  const isStudent = () => hasRole("STUDENT");

  return {
    user,
    isAuthenticated,
    accessToken,
    isLoggingOut,
    logout,
    hasRole,
    isTeacher,
    isStudent,
  };
};

export default useAuth;
