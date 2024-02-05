import React from "react";
import styled from "styled-components";

// ui통일용 BasicFrame : 사이드 메뉴의 페이지에서 사용
const BasicFrame = styled.div`
  margin: 0px;
  box-sizing: border-box;
  font: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  justify-content: flex-start;
  position: fixed; // nav 바 밑으로 들어가지 않도록 고정
  top: 60px; //80px; //
  left: 70px; //80px; //
  // width: 100vw;
  // width: 100%;
  width: calc(100% - 70px);
  height: calc(100% - 60px);
  min-width: 950px;
  min-height: 700px; //650px;
  // background-color: pink; // 레이아웃 확인용
  overflow-y: auto;
  overflow-x: auto;
`;

export default BasicFrame;
