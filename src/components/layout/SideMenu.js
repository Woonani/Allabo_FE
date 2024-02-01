import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsLoginState } from "../../context/IsLoginContext";
import ProfileContainer from "../common/ProfileContainer";
import HomeImg from "../../assets/img/common/Home.png";
import SheduleImg from "../../assets/img/common/Shedule2.png";
import BoardImg from "../../assets/img/common/Board.png";
import ChatImg from "../../assets/img/common/Chat.png";
import { getLocalStorage } from "../../utils/LocalStorage";

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
  // background-color: black;
  background-color: var(--color-primary-lightGrey); // 사이드 스타일2
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  width: 250px;
  height: 100%;
  animation: ${slideOut} 0.5s ease;
  padding: 15px 10px 10px 80px;
  display: flex;
  flex-direction: column;
`;

const StyledSideClosed = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1;
  // background-color: black;
  background-color: var(--color-primary-lightGrey); // 사이드 스타일2
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  opacity: 70%;
  height: 100%;
  animation: ${slideIn} 0.7s ease;
`;

const SideMenu = ({ isSideOpen }) => {
  const isLogin = useIsLoginState();
  const nowPage = getLocalStorage("now-page");
  // console.log("side - ", nowPage);
  const menu = [
    { link: "/team", imgSrc: HomeImg, text: "메인보드", active: false },
    { link: "/schedule", imgSrc: SheduleImg, text: "일정관리", active: false },
    { link: "/board", imgSrc: BoardImg, text: "회의록", active: false },
    { link: "/chat", imgSrc: ChatImg, text: "대화", active: false },
  ];
  return (
    <>
      {isLogin ? (
        isSideOpen ? (
          <StyledSideOpened>
            {menu.map((item, idx) => {
              item.active = idx == nowPage ? true : false;
              return (
                <Link key={idx} to={item.link} className="link-style">
                  <ProfileContainer
                    // key={item.key}
                    justifyContent="flex-start"
                    backgroundColor="hsl(49.36deg 21.79% 90.45% / 15%)"
                    imgSrc={item.imgSrc}
                    imgAlt={item.text}
                    imgWidth="25px"
                    imgHeight="25px"
                    text={item.text}
                    padding="10px"
                    frontSpaceWidth="10px"
                    backSpaceWidth="0px"
                    active={item.active}
                    imgBorderRadius="0px"
                  />
                </Link>
              );
            })}
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
