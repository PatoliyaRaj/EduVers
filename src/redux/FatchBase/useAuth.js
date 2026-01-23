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
      // Always clear local state regardless of API result
      dispatch(logoutAction());
      navigate("/login");
    }
  };

  /**
   * Check if user has a specific role
   */
  const hasRole = (role) => {
    return user?.userType?.toUpperCase() === role.toUpperCase();
  };

  /**
   * Check if user is a teacher
   */
  const isTeacher = () => hasRole("TEACHER");

  /**
   * Check if user is a student
   */
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
