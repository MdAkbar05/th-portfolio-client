import React from "react";
import { Navigate } from "react-router-dom";

const ADMIN_EMAIL = "tonmoy2b@gmail.com";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if user is logged in and has the correct admin email
  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
