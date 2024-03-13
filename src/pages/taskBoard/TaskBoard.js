import React, { useState } from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import Text from "../../components/common/Text";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import SelectBox from "../../components/common/SelectBox";
import useTaskBoard from "../../hooks/useTaskBoard";
import { formatDatetime, formatDate } from "../../utils/Formatter";
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage";
import Pagenation from "../../components/common/Pagenation";
import usePostDetail from "../../hooks/usePostDetail";

const GridBoxRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; //1fr 1fr 15fr 1fr 1fr;
  align-items: start; //center;
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
    width: 38%;
  }
  th:nth-child(4) {
    width: 12.5%;
  }
  th:nth-child(5) {
    width: 14.5%;
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
    width: 38%;
    padding: 0px 0px 0px 10px;
    // text-align: left;
  }
  td:nth-child(4) {
    width: 12.5%;
    text-align: center;
  }
  td:nth-child(5) {
    width: 14.5%;
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

const TaskBoard = () => {
  const {
    searchList,
    tagList,
    postList,
    boardList,
    boardInfo,
    totalPosts,
    currentPage,
    pageMove,
    setPageMove,
    setCurrentPage,
    handleSelectChange,
    handleSearchChange,
    handlePostWritingPage,
    handlePostDetailPage,
    handleBoardList,
    pagenationArray,
    setPagenationArray,
  } = useTaskBoard();

  // const { handlePostDetailPage } = usePostDetail();

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
              name="tag"
              defaultTag={true}
              defaultTagText="전체"
              onClick={(e) => {
                handleSelectChange(e);
              }}
              optionlist={tagList}
              fontSize="15px"
              width="180px"
              height="30px"
              margin="10px 0px"
            />
            <SelectBox
              name="noPerPage"
              defaultTag={false}
              subText="개씩 보기"
              onClick={(e) => handleSelectChange(e)}
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
              {boardList != undefined && boardList.length > 0
                ? boardList.map((item, idx) => {
                    return (
                      <StyledTbodyTr
                        key={item.postSeq}
                        onClick={() => handlePostDetailPage(item.postSeq)}
                      >
                        <td>{item.no}</td>
                        <td>{item.tag}</td>
                        <td>
                          {item.title} &nbsp;
                          <div
                            style={{
                              display: "inline",
                              fontSize: "12px",
                              color: "blue",
                            }}
                          >
                            [{item.totalComments}]
                          </div>
                        </td>
                        <td>{item.nick}</td>
                        <td style={{ fontSize: "14px" }}>
                          {formatDate(item.createdAt)}
                        </td>
                        <td>{item.viewCount}</td>
                        <td>{item.totalLikes}</td>
                      </StyledTbodyTr>
                    );
                  })
                : null}
            </StyledTbody>
          </StyledTable>
        </PostListBox>
        <RowBox>
          {boardList != undefined && boardList.length > 0 ? (
            <Pagenation
              total={totalPosts}
              noPerPage={boardInfo.noPerPage}
              currentPage={currentPage}
              setPageMove={setPageMove}
              onClick={(e) => {
                setCurrentPage(e.target.innerHTML);
              }}
              pagenationArray={pagenationArray}
              setPagenationArray={setPagenationArray}
            />
          ) : (
            "게시글이 없습니다."
          )}
        </RowBox>
        <RowBox>
          <SelectBox
            name="searchTag"
            onClick={(e) => handleSearchChange(e)}
            optionlist={searchList}
            fontSize="15px"
            width="100px"
            height="30px"
          />
          <FloatingLabelInput
            name="searchWord"
            type="text"
            // value={boardList.searchWord} // 있어도 되고 없어도 됨
            onChange={(e) => handleSearchChange(e)}
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
            onClick={() => handleBoardList()}
          />
        </RowBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default React.memo(TaskBoard);
