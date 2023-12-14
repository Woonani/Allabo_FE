import React from "react";
import styled from "styled-components";

const StyledFont = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "left"};
  align-items: center;
  font-size: ${(props) => props.$fontSize || "20px"};
  font-family: ${(props) => props.$fontFamily || "NanumSquareRound Light"};
  color: ${(props) => props.$color || "black"};
  font-weight: bold;
  letter-spacing: ${(props) => props.$space || "0"};
`;

const Text = ({ text, ...props }) => {
  return (
    <StyledFont
      // $justifyContent={props.justifyContent}
      // $fontSize={props.fontSize}
      // $fontFamily={props.fontFamily}
      // $color={props.color}
      // $space={props.space}
      {...props}
    >
      {text}
    </StyledFont>
  );
};

export default Text;
