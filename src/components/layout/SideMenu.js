import React from "react";
import styled, { keyframes } from "styled-components";

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

const StyledFixedSide = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: black; //var(--color-secondary-grey);
  width: 70px;
  height: 100%;
  z-index: 2; /* 높은 우선순위를 지정 */
  color: white;
  padding: 20px;
`;

const StyledSideOpened = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: var(--color-secondary-grey); //black;
  width: 250px;
  height: 100%;
  animation: ${slideOut} 0.5s ease; /* 애니메이션 적용 */
  // z-index: 1; /* 낮은 우선순위를 지정*/
  color: red;
  padding: 20px 20px 20px 90px;
`;

const StyledSideClosed = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: var(--color-secondary-grey); //black;
  height: 100%;
  animation: ${slideIn} 0.7s ease; /* 애니메이션 적용 */
  // z-index: 1; /* 낮은 우선순위를 지정*/
`;

const SideMenu = ({ isSideOpen }) => {
  return (
    <>
      {" "}
      <StyledFixedSide>
        <div>팀1</div>
        <div>팀2</div>
        <div>팀3</div>
      </StyledFixedSide>
      {isSideOpen ? (
        <StyledSideOpened>
          <div>메뉴1</div>
          <div>메뉴2</div>
          <div>메뉴3</div>
        </StyledSideOpened>
      ) : (
        <StyledSideClosed></StyledSideClosed>
      )}
    </>
  );
};
export default SideMenu;
