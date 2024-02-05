import React from "react";
import styled from "styled-components";
import RightArrow from "../../assets/img/common/RightArrow.png";

const CommentBox = styled.div`
  display: flex; //grid;
  // grid-template-columns: 150px auto 120px;
  align-items: stretch;
  min-height: 60px;
  //   margin: 1px;
  margin: ${(props) => (props.$ReCmmnt == 1 ? "0px" : "5px 0px 0px 0px")};
  //   height: 60px;
  //   max-height: 200px;
  //   box-shadow: 1px 1px 5px 0.2px grey;
  //   border-radius: 10px;
  background-color: white;
`;

const HeadPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; //100%;
  //   height: 100%;
  //   border-radius: 10px 0px 0px 10px;
  background-color: var(--color-primary-blue);
  opacity: 50%;

  border-bottom: 1px solid gray;
`;

const MiddlePart = styled.div`
  // min-height: 45px;
  max-height: 195px;
  width: 100%;
  // max-width: 100%;
  line-height: 1.5;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  // overflow: unset;
  resize: none;
  // border-radius: 5px;
  // border: 1px solid #ccc;
  // box-shadow: 1px 1px 1px #999;
  background-color: var(--color-secondary-paleBlue);

  border-bottom: 1px solid lightGrey;
`;

const EndPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px; //100%;
  //   height: 100%;
  //   border-radius: 0px 10px 10px 0px;
  // background-color: black;
  background-color: var(--color-secondary-paleBlue);

  border-bottom: 1px solid lightGrey;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
`;

const CommentContainer = ({ ReCmmnt, Head, Middle, End }) => {
  return (
    <CommentBox $ReCmmnt={ReCmmnt}>
      {ReCmmnt == 1 ? (
        <ImgContainer>
          <img src={RightArrow} width="20" height="20" />
        </ImgContainer>
      ) : null}
      <HeadPart>{Head}</HeadPart>
      <MiddlePart>{Middle}</MiddlePart>
      <EndPart>{End}</EndPart>
    </CommentBox>
  );
};

export default CommentContainer;
