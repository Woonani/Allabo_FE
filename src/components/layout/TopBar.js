import React from "react";
import styled from "styled-components";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import HamBtnImgF from "../../assets/img/common/HamburgerBtnF.png";
import HamBtnImgT from "../../assets/img/common/HamburgerBtnT.png";

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0; // 상단고정
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HamburgerBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: url(${(isSideOpen) => {
    console.log(isSideOpen);
    return isSideOpen === true ? HamBtnImgT : HamBtnImgF;
  }});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-repeat: no-repeat;
  background-position: center; /* 이미지를 가운데로 정렬 */
  border: none; /* 기본적인 테두리 제거 등 */
  box-shadow: 0.1px 0.1px 5px 0.2px grey;

  cursor: pointer;
`;

// background-image: url(${(isSideOpen) =>
//   isSideOpen ? HamBtnImgT : HamBtnImgF});

const TopBar = ({ onClick, isSideOpen }) => {
  return (
    <StyledTopBar>
      <HamburgerBtn onClick={onClick}></HamburgerBtn>
      <LogoBoxHorizon />
      <div>프로필 자리</div>
    </StyledTopBar>
  );
};

export default TopBar;
