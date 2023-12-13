import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border: none;
  background-color: transparent; // 버튼 기본 색상 가림
  cursor: pointer; // 커서 설정
`;
const StyledBtn = styled.button`
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "18px"};
  color: var(--color-primary-violet);
  font-family: "NanumSquareRound Extra Bold";
  font-weight: bold;
  border: none; /* 기본적인 테두리 제거 */
  box-shadow: 0.1px 0.1px 3px 0.1px grey;
  background-color: ${(props) =>
    props.btnColor || "var(--color-primary-white)"};
  cursor: pointer;
  border-radius: 20px;
`;
const ProfileContainer = ({ onClick, btnText, ...props }) => {
  return (
    <StyledContainer>
      {/* <div>프로필 자리</div> */}
      <StyledBtn
        onClick={onClick}
        $width={props.width}
        $height={props.height}
        $fontSize={props.fontSize}
        $btnColor={props.btnColor}
      >
        {btnText}
      </StyledBtn>
    </StyledContainer>
  );
};

export default ProfileContainer;
