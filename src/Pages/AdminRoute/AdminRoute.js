import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div style={{ minHeight: "600px" }}>
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }
  return user.email && admin ? (
    children
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default AdminRoute;
