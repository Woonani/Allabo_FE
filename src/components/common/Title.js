import React from "react";
import styled from "styled-components";

const StyledFont = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: center;
  //   margin: 20px;
  font-size: ${(props) => props.$fontSize || "30px"};
  font-family: ${(props) => props.$fontFamily || "NanumSquareRound Regular"};
  color: ${(props) => props.$color || "black"};
  font-weight: bold;
  letter-spacing: ${(props) => props.$space || "0"};
`;

const Title = ({ text, ...props }) => {
  return (
    <StyledFont
      $justifyContent={props.justifyContent}
      $fontSize={props.fontSize}
      $fontFamily={props.fontFamily}
      $color={props.color}
      $space={props.space}
    >
      {text}
    </StyledFont>
  );
};

export default Title;
