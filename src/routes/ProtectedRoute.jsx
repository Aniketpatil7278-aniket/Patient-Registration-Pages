import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";

const ProtectedRoute = ({ children, requiredStep }) => {
  const { activeStep } = useContext(ProfileContext);

  if (activeStep < requiredStep) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
