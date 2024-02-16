import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: ${(props) => props.$fontSize || "1.2em"};
  color: ${(props) => props.$fontColor || "black"};
  //   background-color: ${(props) =>
    props.$backgroundcolor || "var(--color-btn-blue)"};
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "40px"};
  margin: ${(props) => props.$margin || "0px 20px"};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.$borderRadius || "5px"};
  font-family: "NanumSquareRound Bold", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const SelectBox = ({
  name,
  defaultTag,
  defaultTagText,
  subText,
  onClick,
  onChange,
  optionlist,
  ...props
}) => {
  return (
    <StyledSelect
      name={name}
      $fontSize={props.fontSize}
      $backgroundcolor={props.backgroundcolor}
      $fontColor={props.fontColor}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      onClick={onClick}
      onChange={onChange}
      $optionlist={optionlist}
    >
      {defaultTag == true ? <option value={""}>{defaultTagText}</option> : null}
      {optionlist.map((item, idx) => {
        return (
          <option key={idx} value={item}>
            {item}
            {subText}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default SelectBox;
