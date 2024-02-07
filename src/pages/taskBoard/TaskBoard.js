import React from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import Text from "../../components/common/Text";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import SelectBox from "../../components/common/SelectBox";
import useTaskBoard from "../../hooks/useTaskBoard";

const GridBoxRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 15fr 1fr 1fr;
  align-items: center;
  // margin: 30px;
  padding: 30px;
  height: 690px;
  width: 55vw; // width: 900px; // 1050px이 이상적
  min-height: 650px;
  min-width: 900px;
  // background-color: lightGreen; // 레이아웃 확인용
`;

const TopBox = styled.div`
  display: flex;
  justify-content: left;
  // background-color: pink;
`;
const PostListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  // background-color: yellow;
`;
const RowBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  // background-color: pink;
  margin: 10px 0px;
`;
const SpaceBetweenBox = styled.div`
  display: flex;
  // background-color: lightGrey;
  justify-content: space-between;
  margin: 3px 0px;
`;

const StyledTable = styled.table`
  // background-color: lightGrey;
  border: none;
  th:first-child {
    width: 5%;
  }
  th:nth-child(2) {
    width: 15%;
  }
  th:nth-child(3) {
    width: 40%;
  }
  th:nth-child(4) {
    width: 12.5%;
  }
  th:nth-child(5) {
    width: 12.5%;
  }
  th:nth-child(6) {
    width: 7.5%;
  }
  th:nth-child(7) {
    width: 7.5%;
  }
  //
  td:first-child {
    width: 5%;
    text-align: center;
  }
  td:nth-child(2) {
    width: 15%;
    text-align: center;
  }
  td:nth-child(3) {
    width: 40%;
    padding: 0px 0px 0px 10px;
    // text-align: left;
  }
  td:nth-child(4) {
    width: 12.5%;
    text-align: center;
  }
  td:nth-child(5) {
    width: 12.5%;
    text-align: center;
  }
  td:nth-child(6) {
    width: 7.5%;
    text-align: center;
  }
  td:nth-child(7) {
    width: 7.5%;
    text-align: center;
  }
`;

const StyledThead = styled.thead`
  background-color: #56adff4f; // var(--color-primary-blue);
  box-shadow: 0px 0.3px 1px 0.3px grey;
  border: none;
  // border-radius: 5px;
`;

const StyledTbody = styled.tbody`
  // background-color: skyBlue;
  box-shadow: 0px 0.3px 1px 0.3px grey;
  border: none;
  // border-radius: 5px;
`;

const StyledTheadTr = styled.tr`
  height: 35px;
  // display: flex;
  // align-items: center;
`;
const StyledTbodyTr = styled.tr`
  height: 30px;
  border-bottom: 0.1px solid var(--color-primary-lightGrey);
  cursor: default;
  &:hover {
    background-color: var(--hover-color, hsl(49.36deg 21.79% 90.45% / 70%));
  }
  transition: background-color 0.3s ease;
`;

const boardList10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const boardList15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // null; //
const boardList20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const searchList = ["제목", "내용", "제목+내용"];
const tagList = ["전체", "공지", "과제"];
const postList = ["10개씩 보기", "15개씩 보기", "20개씩 보기"];

const TaskBoard = () => {
  const { handlePostWritingPage, handlePostDetailPage } = useTaskBoard();
  return (
    <BasicFrame>
      <GridBoxRow>
        <TopBox>
          <Text
            text="회의록 게시판"
            height="40px"
            // margin="20px"
          />
        </TopBox>
        <SpaceBetweenBox>
          <div>
            <SelectBox
              optionlist={tagList}
              fontSize="15px"
              width="180px"
              height="30px"
              margin="10px 0px"
            />
            <SelectBox
              optionlist={postList}
              fontSize="15px"
              width="100px"
              height="30px"
              margin="10px 10px"
            />
          </div>
          <Button
            text="글쓰기"
            width="80px"
            height="30px"
            fontSize="15px"
            margin="10px 5px"
            onClick={() => handlePostWritingPage()}
          />
        </SpaceBetweenBox>
        <PostListBox>
          <StyledTable>
            <StyledThead>
              <StyledTheadTr>
                <th>no</th>
                <th>분류</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>추천</th>
              </StyledTheadTr>
            </StyledThead>
            <StyledTbody>
              {boardList15 != undefined && boardList15.length > 0 ? (
                boardList15.map((item, idx) => {
                  return (
                    <StyledTbodyTr
                      key={idx}
                      onClick={() => handlePostDetailPage()}
                    >
                      <td>1</td>
                      <td>공지</td>
                      <td>글 작성규칙 [1]</td>
                      <td>팀장 우나은</td>
                      <td>2023.11.24</td>
                      <td>29</td>
                      <td>3</td>
                    </StyledTbodyTr>
                  );
                })
              ) : (
                <StyledTbodyTr>
                  <td></td>
                  <td></td>
                  <td style={{ textAlign: "right" }}> "게시글이 없습니다."</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </StyledTbodyTr>
              )}
            </StyledTbody>
          </StyledTable>
        </PostListBox>
        <RowBox> 페이지네이션 </RowBox>
        <RowBox>
          <SelectBox
            fontSize="15px"
            width="100px"
            height="30px"
            optionlist={searchList}
          />
          <FloatingLabelInput
            name="searchPost"
            type="text"
            // value={teamForm.teamName}
            // onChange={handleInputChange}
            // label="글+제목"
            width="200px"
            height="30px"
          />
          <Button
            text="검색"
            width="80px"
            height="30px"
            fontSize="15px"
            margin="0px 15px"
            backgroundcolor="var(--color-secondary-grey)"
            // onClick=
          />
        </RowBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default TaskBoard;
