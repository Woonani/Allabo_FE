import React from "react";
import styled from "styled-components";

const BasicFrame = styled.div`
  margin: 0px;
  box-sizing: border-box;
  font: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed; // nav 바 밑으로 들어가지 않도록 고정
  top: 60px; //80px; //
  left: 70px; //80px; //
  width: 100vw;
  height: 100vh;
  min-width: 900px;
  min-height: 650px;
  // background-color: pink; // 영역 확인용
`;

export default BasicFrame;
