import React, { useState } from "react";
import styled from "styled-components";
import BasicFrame from "../../components/layout/BasicFrame";
import SelectBox from "../../components/common/SelectBox";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import usePostWriting from "../../hooks/usePostWriting";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill"; // quill
import "react-quill/dist/quill.snow.css"; // quill

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
  // background-color: violet; // 레이아웃 확인용
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
  // display: flex;
  // justify-content: flex-start;
  // flex-direction: column;
  min-height: 500px;
  // max-height: 600px;
  // margin: 10px 0px;
  // border-radius: 3px;
  padding: 5px;
  margin: 0px;
  box-shadow: 0.8px 1px 3px -0.6px grey;
  // overflow-y: scroll;
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
/**
   * module은 React Quill의 기능을 특정한 방식으로 확장하거나 조정하는 데 사용됩니다.
     예를 들어, 이미지 업로드, 링크 삽입, 콘텐츠 저장 및 불러오기와 같은 작업을 수행하기 위해 모듈을 활용할 수 있습니다.
   // ["underline", "strike", "blockquote"],
    // bold, italic 은 scss에서 지정한 default inherit을 font, font-family : initial로 설정하는 걸로 해결
   
     */
// const modules = {
//   toolbar: [
//     [{ header: [1, 2, false] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image"],
//     [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
//     ["clean"],
//   ],
// };

const PostWriting = () => {
  const {
    tagList,
    postForm,
    handleInputChange,
    handlePostForm,
    handleBoardPage,
    content,
    contentLength,
    modules,
    handleQuillChange,
  } = usePostWriting();

  return (
    <BasicFrame>
      <GridBoxRow>
        <Text text="회의록 게시판 | 글쓰기" height="40px" margin="0px" />
        <TopBox>
          <SelectBox
            name="tag"
            defaultTag={true}
            defaultTagText={"태그를 선택해 주세요."}
            onClick={(e) => handleInputChange(e)}
            // onChange={(e) => {
            //   console.log("----onchange 작동");
            //   // return handleBoardList(e);
            // }}
            optionlist={tagList}
            fontSize="15px"
            width="95%"
            height="30px"
            margin="0px"
          />
          <FloatingLabelInput
            name="title"
            type="text"
            value={postForm.title || ""} //SelectBox 선택시 빈값 에러 처리
            onChange={(e) => handleInputChange(e)}
            label="글 제목"
            width="100%"
            height="30px"
          />
        </TopBox>
        <PostingBox>
          <ReactQuill
            style={{
              height: "450px",
              maxHeight: "550px",
              font: "initial",
              fontFamily: "initial",
            }}
            theme="snow"
            modules={modules}
            // formats={formats}
            value={content || ""}
            // readOnly={(contentLength > 10 && true) || false}
            onChange={handleQuillChange}
            // maxLength={1000}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
            }}
          >
            {contentLength}/1000
          </div>
        </PostingBox>
        <ButtonBox>
          <Button
            text="등록"
            width="120px"
            height="30px"
            fontSize="15px"
            margin="0px 15px"
            onClick={() => {
              handlePostForm();
            }}
          />
          <Button
            text="취소"
            width="120px"
            height="30px"
            fontSize="15px"
            margin="0px 15px"
            backgroundcolor="var(--color-secondary-grey)"
            onClick={() => {
              handleBoardPage();
            }}
          />
        </ButtonBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default PostWriting;
