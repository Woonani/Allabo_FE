import React from "react";
import styled from "styled-components";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import HamBtnImgF from "../../assets/img/common/HamburgerBtnF.png";
import { useNavigate } from "react-router-dom";
import { useIsLoginState } from "../../context/IsLoginContext";
import ProfileContainer from "../common/ProfileContainer";
import useLoginform from "../../hooks/useLoginform";
import SimpleButton from "../common/SimpleButton";

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0; // 상단고정
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  background-color: var(--color-background-blue);
  box-shadow: 1px 1px 5px 0.2px grey;
  box-border: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3; /* 높은 우선순위를 지정 */
`;
const HamburgerBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  // border: 1px solid grey;
  box-shadow: ${(props) => props.$boxShadow || "none"};
  background-color: transparent;
  background-image: url(${HamBtnImgF});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  cursor: pointer;
  opacity: 100%;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 2px 2px 5px 0px grey;
  }
`;

const TopBar = ({ onClick, isSideOpen, setIsSideOpen }) => {
  const isLogin = useIsLoginState();
  // console.log(isLogin);
  const navigate = useNavigate();
  const { handleLogout } = useLoginform();

  const handleLogoClick = () => {
    navigate("/");
    isSideOpen ? setIsSideOpen(!isSideOpen) : setIsSideOpen(isSideOpen);
  };

  return (
    <>
      {isLogin ? (
        <StyledTopBar>
          {isSideOpen ? (
            <HamburgerBtn onClick={onClick} $boxShadow="2px 2px 5px 0px grey" />
          ) : (
            <HamburgerBtn onClick={onClick} />
          )}
          {/* <HamburgerBtn onClick={onClick} /> */}
          <LogoBoxHorizon
            logoImgSize="40px"
            fontSize="35px"
            fontColor="white"
            space="1.5px"
            onClick={handleLogoClick}
          />

          {/* 프로필 자리 */}
          {/* <ProfileContainer /> */}
          <SimpleButton btnText={"Logout"} onClick={handleLogout} />
        </StyledTopBar>
      ) : (
        ""
      )}
    </>
  );
};

export default TopBar;
