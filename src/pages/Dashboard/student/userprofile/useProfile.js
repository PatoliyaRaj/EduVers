import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.js";

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
/* 
 Vite uses a technology called Fast Refresh to update your browser instantly when you save a file without losing your scroll position or form data.

 two rules 
 A jsx file should ideally only export React Components.

*/