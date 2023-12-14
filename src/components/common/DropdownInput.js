import React from "react";
import styled from "styled-components";
import DropdownImg from "../../assets/img/common/Dropdown.png";
import SquareButton from "./SquareButton";

// 컨테이너로 감싸면 input width 일괄 조절 가능

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "40px"};
`;
const InputContainer = styled.div`
  position: relative;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "40px"};
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "260px"};
  height: ${(props) => props.height || "40px"};
  padding: 5px 10px 5px 10px;
  border: 0.1px solid #ccc;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 20px;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    display: none;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  pointer-events: none;
  font-size: ${(props) => props.fontSize || "1em"}; // 폰트 크기 prop 추가
  color: lightslategrey;
`;

const DropdownBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none; /* 기본적인 테두리 제거 등 */
  background-color: transparent;
  background-image: url(${DropdownImg});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  cursor: pointer;
  opacity: ${(opacity) => opacity || "100%"};
  &:hover {
    box-shadow: 0.5px 0.5px 5px 0.2px grey;
  }
`;

const DropdownInput = ({
  label, // 인풋 라벨 : placeHolder 같은 역할
  fontSize,
  value,
  onChange,
  onBlur, // 커서 인풋 태그 밖으로 꺼냈을 때 발생하는 이벤트
  ...props // props.a이런식으로
}) => {
  return (
    <Container>
      <InputContainer>
        <StyledInput
          placeholder=" "
          {...props}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <StyledLabel fontSize={fontSize}>{label}</StyledLabel>
        <SquareButton imgUrl={DropdownImg} borderRadius="0" />
      </InputContainer>
      <InputContainer>gg</InputContainer>
    </Container>
  );
};

export default DropdownInput;
