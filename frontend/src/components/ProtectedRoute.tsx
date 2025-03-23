import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../api/auth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
