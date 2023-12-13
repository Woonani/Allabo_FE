import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useIsLoginState } from "../../context/IsLoginContext";

// Keyframes 정의
const slideOut = keyframes`
  from {
    transform: translateX(-180px); //250px-180px=70px
  }
  to {
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  from {
    width: 250px;
    transform: translateX(0px);
  }
  to {
    transform: translateX(-18px);
    width: 70px;
  }
`;

const StyledSideOpened = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  width: 250px;
  height: 100%;
  animation: ${slideOut} 0.5s ease;
  color: red;
  padding: 20px 20px 20px 90px;
`;

const StyledSideClosed = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  height: 100%;
  animation: ${slideIn} 0.7s ease;
`;

const SideMenu = ({ isSideOpen }) => {
  const isLogin = useIsLoginState();

  return (
    <>
      {isLogin ? (
        isSideOpen ? (
          <StyledSideOpened>
            <Link to="/team" className="link-style">
              {" "}
              메인보드
            </Link>
            <br />
            <br />
            <Link to="/schedule" className="link-style">
              {" "}
              일정관리
            </Link>
            <br />
            <br />
            <Link to="/board" className="link-style">
              {" "}
              회의록
            </Link>
            <br />
            <br />
            <Link to="/chat" className="link-style">
              {" "}
              대화
            </Link>
          </StyledSideOpened>
        ) : (
          <StyledSideClosed></StyledSideClosed>
        )
      ) : (
        ""
      )}
    </>
  );
};
export default SideMenu;
