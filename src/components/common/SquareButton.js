import React from "react";
import styled from "styled-components";

const StyledSquareBtn = styled.button`
  width: ${(props) => props.$width || "40px"};
  height: ${(props) => props.$height || "40px"};
  border: none; /* 기본적인 테두리 제거 등 */
  //   box-shadow: 0.1px 0.1px 5px 0.2px grey;
  background-color: transparent;
  background-image: url(${(props) => props.$imgUrl || null});
  background-size: cover; /* 이미지가 버튼을 채우도록 크기 조절 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  cursor: pointer;
  opacity: ${(props) => props.opacity || "100%"};
`;

const SquareButton = ({ openModal, ...props }) => {
  return (
    <StyledSquareBtn
      onClick={openModal}
      $imgUrl={props.imgUrl}
      $width={props.width}
      $height={props.height}
    >
      {props.imgUrl ? null : "버튼"}
    </StyledSquareBtn>
  );
};

export default SquareButton;
