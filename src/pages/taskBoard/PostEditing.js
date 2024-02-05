import React from "react";
import styled from "styled-components";
import BasicFrame from "../../components/layout/BasicFrame";
import SelectBox from "../../components/common/SelectBox";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import useTaskBoard from "../../hooks/useTaskBoard";

const GridBoxRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 15fr 1fr;
  align-items: center;
  // margin: 30px;
  padding: 30px;
  height: 690px;
  width: 55vw; // width: 900px; // 1050px이 이상적
  min-height: 650px;
  min-width: 900px;
  // background-color: lightBlue; // 레이아웃 확인용
`;

const TopBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  justify-content: center;
  align-items: center;
  // display: flex;
  // flex-direction: row;
  margin: 10px 0px;
  height: 50px;
  border-radius: 3px;
  padding: 0px 15px;
  box-shadow: 0.8px 1px 3px -0.6px grey;
  background-color: white;
`;

const PostingBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 480px;
  margin: 10px 0px;
  border-radius: 3px;
  padding: 0px;
  box-shadow: 0.8px 1px 3px -0.6px grey;
  overflow-y: scroll;
  background-color: white;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  //   background-color: pink; // 레이아웃 확인용
  margin: 10px 0px;
`;

const tagList = ["전체", "공지", "과제"];
const PostEditing = () => {
  const { hadleBoardPage } = useTaskBoard();

  return (
    <BasicFrame>
      <GridBoxRow>
        <Text text="회의록 게시판 | 글수정" height="40px" margin="0px" />
        <TopBox>
          <SelectBox
            optionlist={tagList}
            fontSize="15px"
            width="95%"
            height="30px"
            margin="0px"
          />
          <FloatingLabelInput
            name="postTitle"
            type="text"
            // value={teamForm.teamName}
            // onChange={handleInputChange}
            label="글 수정 페이지"
            width="100%"
            height="30px"
            margin="0px"
          />
        </TopBox>
        <PostingBox></PostingBox>
        <ButtonBox>
          <Button
            text="수정"
            width="120px"
            height="30px"
            fontSize="15px"
            margin="0px 15px"
            onClick={() => {
              hadleBoardPage();
            }}
          />
          <Button
            text="취소"
            width="120px"
            height="30px"
            fontSize="15px"
            margin="0px 15px"
            backgroundcolor="var(--color-secondary-grey)"
            // onClick=
          />
        </ButtonBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default PostEditing;
