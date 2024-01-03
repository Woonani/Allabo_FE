import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  // justify-content: flex-start; // space-between;
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  align-items: center;
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || null};
  border-radius: ${(props) => props.$borderRadius || "0%"};
  margin: ${(props) => props.$margin || "0px"};
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  //버튼속성 제어
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
  }
`;

const ImgContainer = styled.img`
  width: ${(props) => props.$imgWidth || "40px"};
  height: ${(props) => props.$imgHeight || "40px"};
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${(props) =>
    props.$imgBoxShadow || "none"}; // 0.1px 0.1px 3px 0.1px grey;
`;

const TextContainer = styled.div`
  color: ${(props) => props.$color || "black"};
  font-family: Inter; //"NanumSquareRound Extra Bold";
`;

const FrontSpace = styled.div`
  display: flex;
  justify-content: center;
  font-family: Inter; //"NanumSquareRound Extra Bold";
  width: ${(props) => props.$frontSpaceWidth || null};
`;

const BackSpace = styled.div`
  display: flex;
  justify-content: center;
  font-family: Inter; //"NanumSquareRound Extra Bold";
  width: ${(props) => props.$backSpaceWidth || null};
`;

const ProfileContainer = ({
  imgSrc,
  imgAlt,
  textList,
  text,
  frontSpaceWidth,
  backSpaceWidth,
  onClick,
  ...props
}) => {
  return (
    <Container
      key={props.key}
      $justifyContent={props.justifyContent}
      $borderRadius={props.borderRadius}
      $width={props.width}
      $height={props.height}
      $boxShadow={props.boxShadow}
      $margin={props.margin}
    >
      <ImgContainer
        src={imgSrc}
        alt={imgAlt}
        $imgWidth={props.imgWidth}
        $imgHeight={props.imgHeight}
        $imgBoxShadow={props.imgBoxShadow}
      />

      <FrontSpace $frontSpaceWidth={frontSpaceWidth}>{text}</FrontSpace>
      {textList != undefined && textList.length > 0
        ? textList.map((item, idx) => {
            return (
              <>
                <TextContainer key={idx} $color={props.color}>
                  {item}
                </TextContainer>
                <BackSpace $backSpaceWidth={backSpaceWidth}>{text}</BackSpace>
              </>
            );
          })
        : null}
    </Container>
  );
};

export default ProfileContainer;
