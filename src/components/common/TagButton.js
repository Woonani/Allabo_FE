import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: center;
  align-items: baseline; //font : Inter일때
  width: ${(props) => props.$width || null};
  height: ${(props) => props.$height || null};
  border-radius: ${(props) => props.$borderRadius || "0%"};
  box-shadow: ${(props) => props.$boxShadow || "null"};
  margin: ${(props) => props.$margin || "0px"};
  padding: 2px 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
  }
`;
const TextContainer = styled.div`
  color: ${(props) => props.$color || "black"};
  font-family: Inter; //"NanumSquareRound Extra Bold";
  //   font-weight: bold;
`;

const StyledBtn = styled.button`
  width: ${(props) => props.$btnWidth || "10px"};
  height: ${(props) => props.$btnHeight || "10px"};
  background-color: transparent;
  background-image: url(${(props) => props.$imgUrl || null});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  cursor: pointer;
  opacity: ${(props) => props.$opacity || "100%"};
  transition: background-color 0.3s ease;
  color: black;
  border: none;
  box-shadow: ${(props) => props.$btnBoxShadow || "none"};
  &:active,
  &:hover,
  &:focus {
    // background: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
    // 같이 쓰는 다른 컴포넌트 때문에 비워둠
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
  }
`;

const TagButton = ({ text, btnText, onClick, disabled, ...props }) => {
  return (
    <Container
      $borderRadius={props.borderRadius}
      $width={props.width}
      $height={props.height}
      $boxShadow={props.boxShadow}
      $margin={props.margin}
    >
      <TextContainer $color={props.color}>{text}</TextContainer>
      &nbsp;
      <StyledBtn
        onClick={onClick}
        $btnWidth={props.btnWidth}
        $btnHeight={props.btnHeight}
        $imgUrl={props.imgUrl}
        $opacity={props.opacity}
        disabled={disabled}
        $btnBoxShadow={props.btnBoxShadow}
      >
        {btnText}
      </StyledBtn>
    </Container>
  );
};

export default TagButton;
