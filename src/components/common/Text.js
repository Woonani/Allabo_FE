import React from "react";
import styled from "styled-components";

const StyledFont = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "left"};
  align-items: center;
  width: ${(props) => props.$width || null};
  height: ${(props) => props.$height || null};
  margin: ${(props) => props.$margin || "0px"};
  font-size: ${(props) => props.$fontSize || "20px"};
  font-family: ${(props) => props.$fontFamily || "NanumSquareRound Light"};
  color: ${(props) => props.$color || "black"};
  font-weight: bold;
  letter-spacing: ${(props) => props.$space || "0"};
  cursor: ${(props) => props.$cursor || "none"};
  white-space: pre-line; // 줄바꿈
  &:hover {
    text-decoration: ${(props) => props.$textDecoration || "none"};
    color: ${(props) => props.$hoverColor || props.$color || "black"};
  }
`;

const Text = ({ text, onClick, ...props }) => {
  return (
    <StyledFont
      $justifyContent={props.justifyContent}
      $fontSize={props.fontSize}
      $fontFamily={props.fontFamily}
      $color={props.color}
      $hoverColor={props.hoverColor}
      $space={props.space}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      $textDecoration={props.textDecoration}
      $cursor={props.cursor}
      onClick={onClick}
    >
      {text}
    </StyledFont>
  );
};

export default Text;
