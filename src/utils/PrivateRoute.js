import React from "react";
import { getCookie } from "./Cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = getCookie("token");
  //토큰 검증로직 추가
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
