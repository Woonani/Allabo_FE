import React from "react";
import styled from "styled-components";

const StyledSideClosed = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: black;
  width: 80px;
  height: 100%;
`;

const StyledSideOpened = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: white;
  width: 400px;
  height: 100%;
`;

const SideMenu = ({ isSideOpen }) => {
  return (
    <>
      {isSideOpen == true ? (
        <StyledSideOpened></StyledSideOpened>
      ) : (
        <StyledSideClosed>사이드 바를 만들 예정</StyledSideClosed>
      )}
      ;
    </>
  );
};
export default SideMenu;
