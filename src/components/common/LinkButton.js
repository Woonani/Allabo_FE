import React from "react";
import styled from "styled-components";

const StyledLinkBtn = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  width: ${(props) => props.$width || null};
  height: ${(props) => props.$height || "20px"};
  margin: ${(props) => props.$margin || "0px"};
  font-size: ${(props) => props.$fontSize || "12px"};
  color: var(--color-primary-violet);
  font-family: "NanumSquareRound Extra Bold";
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: var(--color-primary-black);
  }
`;

const LinkButton = ({ onClick, btnText, ...props }) => {
  return (
    <StyledLinkBtn
      onClick={onClick}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      $fontSize={props.fontSize}
    >
      {btnText}
    </StyledLinkBtn>
  );
};

export default LinkButton;
