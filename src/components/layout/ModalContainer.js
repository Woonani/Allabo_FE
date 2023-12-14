import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed; // 모달창 가운데 고정 ~
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // ~ 모달창 가운데 고정
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
`;

export default ModalContainer;
