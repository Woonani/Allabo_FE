import React from "react";
import styled from "styled-components";

// 회원가입, 로그인 페이지 사용

// 컨테이너로 감싸면 input width 일괄 조절 가능
const Container = styled.div`
  position: relative;
  margin: 10px 0px;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "40px"};
  padding: 5px 10px 5px 10px;
  border: 1px solid #ccc;
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

const FloatingLabelInput = ({
  label, // 인풋 라벨 : placeHolder 같은 역할
  fontSize,
  value,
  onChange,
  onBlur, // 커서 인풋 태그 밖으로 꺼냈을 때 발생하는 이벤트
  ...props // props.a이런식으로
}) => {
  return (
    <Container>
      <StyledInput
        placeholder=" "
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <StyledLabel fontSize={fontSize}>{label}</StyledLabel>
    </Container>
  );
};

export default FloatingLabelInput;
