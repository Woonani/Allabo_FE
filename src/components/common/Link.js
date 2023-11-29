import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 60px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.p`
  font-size: ${(props) => props.$fontSize || "1em"};
  color: ${(props) => props.$fontColor || "black"};
  margin: 10px 0px;
  text-align: left; /* 좌측 정렬을 위해 추가 */
`;

const StyledA = styled.a`
  font-size: ${(props) => props.$fontSize || "1em"};
  color: ${(props) => props.$fontColor || "blue"};
  margin: 10px 0px;
  text-align: right; /* 우측 정렬을 위해 추가 */
`;

const Link = ({ text, link, url, ...props }) => {
  return (
    <Container>
      <StyledP>{text}</StyledP>
      <StyledA href={url}>{link}</StyledA>
    </Container>
  );
};

export default Link;
