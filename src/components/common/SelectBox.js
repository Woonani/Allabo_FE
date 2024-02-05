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
  //   box-shadow: 1px 1px 5px 0.2px grey;
  //   &:hover {
  //     background-color: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
  //   }
`;

const SelectBox = ({ text, onClick, optionlist, ...props }) => {
  return (
    <StyledSelect
      name="tag"
      $fontSize={props.fontSize}
      $backgroundcolor={props.backgroundcolor}
      $fontColor={props.fontColor}
      $width={props.width}
      $height={props.height}
      $margin={props.margin}
      onClick={onClick}
      optionlist={optionlist}
    >
      {optionlist.map((item, idx) => {
        return (
          <option key={idx} value={item}>
            {item}
          </option>
        );
      })}
      {/* <option value="제목">제목</option>
      <option value="내용">내용</option>
      <option value="제목+내용">제목+내용</option> */}
    </StyledSelect>
  );
};

export default SelectBox;
