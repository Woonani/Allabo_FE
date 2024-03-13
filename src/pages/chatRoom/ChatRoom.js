import React, { useState } from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";

const BasicContainer = styled.div`
  // 임시
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
  width: calc(100% - 70px);
  height: calc(100% - 60px);
  min-width: 950px;
  min-height: 700px; //650px;
  background-color: lightgoldenrodyellow;
`;

const ChatRoom = () => {
  return (
    <BasicFrame>
      <BasicContainer>
        <br />
        <br />
        준비중입니다.
        <br />
      </BasicContainer>
    </BasicFrame>
  );
};

export default ChatRoom;
