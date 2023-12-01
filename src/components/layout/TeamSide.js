import React from "react";
import styled, { keyframes } from "styled-components";

const StyledFixedSide = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 70px;
  height: 100%;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px black;
  z-index: 2; /* 높은 우선순위를 지정 */
  color: white;
  padding: 20px;
`;

export default StyledFixedSide;
