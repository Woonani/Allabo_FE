import React from "react";
import styled from "styled-components";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import HamBtnImgF from "../../assets/img/common/HamburgerBtnF.png";
import { useNavigate } from "react-router-dom";

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
  border: none; /* 기본적인 테두리 제거 등 */
  box-shadow: 0.1px 0.1px 5px 0.2px grey;
  background-color: transparent;
  background-image: url(${HamBtnImgF});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  cursor: pointer;
  opacity: ${(opacity) => opacity || "100%"};
`;

const TopBar = ({ onClick, isSideOpen }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <StyledTopBar>
      {isSideOpen ? (
        <HamburgerBtn onClick={onClick} opacity={"50%"} />
      ) : (
        <HamburgerBtn onClick={onClick} />
      )}
      <LogoBoxHorizon
        logoImgSize="40px"
        fontSize="35px"
        fontColor="white"
        space="1.5px"
        onClick={handleLogoClick}
      />
      <div>프로필 자리</div>
    </StyledTopBar>
  );
};

export default TopBar;
