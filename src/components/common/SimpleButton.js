import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: ${(props) => props.$width || "80px"};
  height: ${(props) => props.$height || "40px"};
  margin: ${(props) => props.$margin || "0px"};
  font-size: ${(props) => props.$fontSize || "18px"};
  color: var(--color-primary-violet);
  font-family: "NanumSquareRound Extra Bold";
  font-weight: bold;
  border: none; /* 기본적인 테두리 제거 */
  box-shadow: 0.1px 0.1px 2px 0.1px grey;
  background-color: ${(props) =>
    props.$btnColor || "var(--color-primary-white)"};
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    box-shadow: 2px 2px 5px 0px grey;
    background-color: ${(props) =>
      props.$hoverEvent || "var(--hover-color, var(--color-secondary-gray))"};
  }
  // &:hover {
  //   box-shadow: 2px 2px 5px 0px grey;
  //   background-color: var(--hover-color, var(--color-secondary-gray));
  // }
`;
const SimpleButton = ({ onClick, btnText, ...props }) => {
  return (
    <StyledBtn
      onClick={onClick}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      $fontSize={props.fontSize}
      $btnColor={props.btnColor}
      $hoverEvent={props.hoverEvent} // postDetail 추천버튼에서 사용
    >
      {btnText}
    </StyledBtn>
  );
};

export default SimpleButton;
