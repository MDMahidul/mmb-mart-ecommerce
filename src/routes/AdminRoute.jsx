import { Navigate, useLocation } from "react-router-dom";import Loader from "../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopProvider";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(ShopContext);
  const location = useLocation();
  const [ userData ] = useRole();

  if (loading) {
    return <Loader height={"h-screen"} />;
  }

  if (user && userData.role === "admin") {
    return children;
  } else {
    // Display toast message when user is not authenticated and redirected to login page
    toast.error("Unathorized access!!!");
  }

  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default AdminRoute;
