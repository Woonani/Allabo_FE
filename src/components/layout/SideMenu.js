import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useIsLoginState } from "../../context/IsLoginContext";
import ProfileContainer from "../common/ProfileContainer";
import HomeImg from "../../assets/img/common/Home.png";
import SheduleImg from "../../assets/img/common/Shedule2.png";
import BoardImg from "../../assets/img/common/Board.png";
import ChatImg from "../../assets/img/common/Chat.png";

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
  z-index: 1;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  width: 250px;
  height: 100%;
  animation: ${slideOut} 0.5s ease;
  color: red;
  padding: 15px 10px 10px 80px;
  display: flex;
  flex-direction: column;
`;

const StyledSideClosed = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  height: 100%;
  animation: ${slideIn} 0.7s ease;
`;

const SideMenu = ({ isSideOpen }) => {
  const isLogin = useIsLoginState();
  const navigate = useNavigate();
  return (
    <>
      {isLogin ? (
        isSideOpen ? (
          <StyledSideOpened>
            <Link to="/team" className="link-style">
              <ProfileContainer
                justifyContent="flex-start"
                backgroundColor="hsl(49.36deg 21.79% 90.45% / 15%)"
                imgSrc={HomeImg}
                imgAlt="공지"
                imgWidth="25px"
                imgHeight="25px"
                text="메인보드"
                frontSpaceWidth="10px"
                backSpaceWidth="0px"
              />
            </Link>
            <Link to="/schedule" className="link-style">
              <ProfileContainer
                justifyContent="flex-start"
                backgroundColor="hsl(49.36deg 21.79% 90.45% / 15%)"
                imgSrc={SheduleImg}
                imgAlt="일정관리"
                imgWidth="25px"
                imgHeight="25px"
                text="일정관리"
                frontSpaceWidth="10px"
                backSpaceWidth="0px"
              />
            </Link>
            <Link to="/board" className="link-style">
              <ProfileContainer
                justifyContent="flex-start"
                backgroundColor="hsl(49.36deg 21.79% 90.45% / 15%)"
                imgSrc={BoardImg}
                imgAlt="회의록"
                imgWidth="25px"
                imgHeight="25px"
                text="회의록"
                frontSpaceWidth="10px"
                backSpaceWidth="0px"
              />
            </Link>
            <Link to="/chat" className="link-style">
              <ProfileContainer
                justifyContent="flex-start"
                backgroundColor="hsl(49.36deg 21.79% 90.45% / 15%)"
                imgSrc={ChatImg}
                imgAlt="대화"
                imgWidth="25px"
                imgHeight="25px"
                text="대화"
                frontSpaceWidth="10px"
                backSpaceWidth="0px"
              />
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
