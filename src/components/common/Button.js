import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${(props) => props.$fontSize || "1.2em"};
  color: ${(props) => props.$fontColor || "white"};
  background-color: ${(props) =>
    props.$backgroundcolor || "var(--color-btn-blue)"};
  width: ${(props) => props.$width || "50%"};
  height: ${(props) => props.$height || "40px"};
  margin: ${(props) => props.$margin || "10px 0"};
  border: none;
  border-radius: ${(props) => props.$borderRadius || "5px"};
  font-family: "NanumSquareRound Bold", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-color, #78ff96);
  }
`;
//Button 컴포넌트를 사용할 때 해당 버튼의 스타일을 동적으로 설정할 수 있도록
// '$'를 사용하여 변수를 정의하고 prop로 받아오는 값이 있으면 사용 아니면 기본값 사용하도록 함.
// '$'를 사용하면 스타일과 관련된 props를 명시적으로 구분하여 가독성과 유지보수에 용이함.

const Button = ({ text, onClick, ...props }) => {
  return (
    <StyledButton
      $fontSize={props.fontSize}
      $backgroundcolor={props.backgroundcolor}
      $fontColor={props.fontColor}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
