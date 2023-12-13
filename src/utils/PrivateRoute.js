import React from "react";
import { getCookie } from "./Cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = getCookie("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
