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
import { IsLoginProvider } from "./context/IsLoginContext";
import PrivateRoute from "./utils/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";
import { TeamListProvider } from "./context/teamListContext";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const handleSideMenu = (order) => {
    if (order == "open") {
      return setIsSideOpen(true);
    } else if (order == "close") {
      return setIsSideOpen(false);
    } else {
      return setIsSideOpen(!isSideOpen);
    }
  };

  return (
    <Router>
      <IsLoginProvider>
        <TopBar
          onClick={handleSideMenu}
          isSideOpen={isSideOpen}
          setIsSideOpen={setIsSideOpen}
        />
        <SideMenu isSideOpen={isSideOpen} />

        <TeamListProvider>
          <TeamSide></TeamSide>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* 로그인이 필요한 라우트들을 PrivateRoute 안에 묶기 */}
            <Route
              path="/"
              element={<PrivateRoute handleSideMenu={handleSideMenu} />}
            >
              {/* 경로/ 로그인상태이면 <MainPage/>에서 <UserHome/>보여주도록 변경 */}
              {/* <Route path="/home" element={<UserHome />}></Route> */}
              <Route path="/team" element={<TeamHome />}></Route>
              <Route path="/schedule" element={<ScheduleBoard />}></Route>
              <Route path="/board" element={<TaskBoard />}></Route>
              <Route path="/chat" element={<ChatRoom />}></Route>
              <Route path="/*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </TeamListProvider>
      </IsLoginProvider>
      {/* path="/"에서 MainPage에서 isLoginState를 사용하기 때문에 Provider가 여기까지 내려옴.  */}
    </Router>
  );
}

export default App;
