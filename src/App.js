import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import TopBar from "./components/layout/TopBar";
import SideMenu from "./components/layout/SideMenu";
// import Footer from "./components/layout/Footer";
import UserHome from "./pages/userHome/UserHome";
import TeamSide from "./components/layout/TeamSide";

import "./App.scss";
import TeamHome from "./pages/teamHome/TeamHome";
import TaskBoard from "./pages/taskBoard/TaskBoard";
import ChatRoom from "./pages/chatRoom/ChatRoom";
import ScheduleBoard from "./pages/scheduleBoard/ScheduleBoard";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const handleSideMenu = () => {
    console.log("딸깍");
    return setIsSideOpen(!isSideOpen);
  };

  return (
    <Router>
      <TopBar
        onClick={handleSideMenu}
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
      />
      <SideMenu isSideOpen={isSideOpen} />
      <TeamSide>
        <Link to="/team1" className="link-style">
          팀1
        </Link>
        <Link to="/team2" className="link-style">
          팀2
        </Link>
      </TeamSide>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<UserHome />}></Route>
        <Route path="/team" element={<TeamHome />}></Route>
        <Route path="/schedule" element={<ScheduleBoard />}></Route>
        <Route path="/board" element={<TaskBoard />}></Route>
        <Route path="/chat" element={<ChatRoom />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
