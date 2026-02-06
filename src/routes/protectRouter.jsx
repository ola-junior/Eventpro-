import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectRouter = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("eventpro_auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectRouter;
