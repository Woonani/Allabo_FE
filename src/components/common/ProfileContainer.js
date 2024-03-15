import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$justifyContent || "flex-start"}; //space-between
  align-items: center;
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || null};
  border-radius: ${(props) => props.$borderRadius || "0px"};
  margin: ${(props) => props.$margin || "0px"};
  padding: ${(props) => props.$padding || "5px 10px"};
  transition: background-color 0.3s ease;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? props.$backgroundColor : "none"};
  &:hover {
    background-color: ${(props) =>
      props.$backgroundColor || "hsl(49.36deg 21.79% 90.45% / 70%)"};
  }
  font-family: "NanumSquareRound bold"; //Inter; // 사이드 스타일2
  color: black; // 사이드 스타일2
`;

const ImgContainer = styled.img`
  width: ${(props) => props.$imgWidth || "40px"};
  height: ${(props) => props.$imgHeight || "40px"};
  border-radius: ${(props) => props.$imgBorderRadius || "50%"};
  background-color: transparent;
  box-shadow: ${(props) =>
    props.$imgBoxShadow || "none"}; // 0.1px 0.1px 3px 0.1px grey;
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
  active,
  ...props
}) => {
  return (
    <Container
      key={props.key}
      $justifyContent={props.justifyContent}
      $backgroundColor={props.backgroundColor}
      $borderRadius={props.borderRadius}
      $width={props.width}
      $height={props.height}
      $boxShadow={props.boxShadow}
      $margin={props.margin}
      $padding={props.padding}
      $active={active}
    >
      <ImgContainer
        src={imgSrc}
        alt={imgAlt}
        $imgWidth={props.imgWidth}
        $imgHeight={props.imgHeight}
        $imgBoxShadow={props.imgBoxShadow}
        $imgBorderRadius={props.imgBorderRadius}
      />
      <FrontSpace $frontSpaceWidth={frontSpaceWidth}></FrontSpace>
      {text}
      {/* <TextContainer>{text}</TextContainer> */}
      <BackSpace $backSpaceWidth={backSpaceWidth}></BackSpace>
    </Container>
  );
};

export default ProfileContainer;
