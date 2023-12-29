import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: ${(props) => props.$width || "80px"};
  height: ${(props) => props.$height || "40px"};
  margin: ${(props) => props.$margin || "8px"};
  padding: ${(props) => props.$padding || "16px"};
  background-color: white;
  font-family: ${(props) => props.$fontFamily || "NanumSquareRound Regular"};
  font-size: ${(props) => props.$fontSize || "20px"};
  justify-content: ${(props) => props.$justifyContent || "center"};
  color: ${(props) => props.$color || "black"};
`;

const NameCard = ({ text, ...props }) => {
  return (
    <Card
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      $padding={props.padding}
      $fontFamily={props.fontFamily}
      $fontSize={props.fontSize}
      $justifyContent={props.justifyContent}
      $color={props.color}
    >
      {text}
    </Card>
  );
};

export default NameCard;
