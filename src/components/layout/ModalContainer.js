import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 670px;
  background-color: white;
  border-radius: 5px;
`;

export default ModalContainer;

/* 모달창 가운데 고정하는 다른 css
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 */
