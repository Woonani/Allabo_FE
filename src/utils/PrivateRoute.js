import React, { useEffect } from "react";
import { getCookie } from "./Cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { setLocalStorage } from "./LocalStorage";

const PrivateRoute = ({ handleSideMenu }) => {
  const token = getCookie("token");
  const location = useLocation();

  useEffect(() => {
    // console.log(location);
    switch (location.pathname) {
      case "/team":
        setLocalStorage("now-page", 0);
        handleSideMenu("open");
        break;
      case "/schedule":
        setLocalStorage("now-page", 1);
        handleSideMenu("close");
        break;
      case "/board":
        setLocalStorage("now-page", 2);
        handleSideMenu("close");
        break;
      case "/chat":
        setLocalStorage("now-page", 3);
        handleSideMenu("close");
        break;
      default:
        setLocalStorage("now-page", -1);
    }
  }, [location]);

  //토큰 검증로직 추가
  return token ? <Outlet /> : <Navigate to="/" />;
  // <Outlet/> = "자식요소"
};

export default PrivateRoute;
