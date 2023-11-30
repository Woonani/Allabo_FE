import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import TopBar from "./components/layout/TopBar";
import SideMenu from "./components/layout/SideMenu";
// import Footer from "./components/layout/Footer";

import "./App.scss";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const handleSideMenu = () => {
    console.log("딸깍");
    return setIsSideOpen(!isSideOpen);
  };

  return (
    <Router>
      <TopBar onClick={handleSideMenu} isSideOpen={isSideOpen} />
      <SideMenu isSideOpen={isSideOpen} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
