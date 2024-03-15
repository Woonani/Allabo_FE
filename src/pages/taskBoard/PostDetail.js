import React, { useRef } from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import Text from "../../components/common/Text";
import SimpleButton from "../../components/common/SimpleButton";
import usePostDetail from "../../hooks/usePostDetail";
import CommentContainer from "../../components/common/CommentContainer";
import { useNavigate } from "react-router-dom";
import { formatDatetime } from "../../utils/Formatter";
import { getCookie } from "../../utils/Cookie";
import LinkButton from "../../components/common/LinkButton";
import DOMPurify from "dompurify";

const GridBoxRow = styled.div`
  // 그리드에서 플렉스로 변경
  // display: grid;
  // grid-template-rows: 40px 50px 52px auto 55px 16px auto auto;
  // align-items: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 5px;
  padding: 30px;
  // height: 690px;
  width: 55vw; // width: 900px; // 1050px이 이상적
  min-height: 550px;
  min-width: 900px;
  // background-color: lightYellow; // 레이아웃 확인용
`;

const TopBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  justify-content: center;
  align-items: center;
  // display: flex;
  // flex-direction: row;
  // margin: 10px 0px;
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
  min-height: 200px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;
  padding: 10px 20px;
  box-shadow: 0.8px 1px 3px -0.6px grey;
  background-color: white;
  whitespace: normal;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  // background-color: pink; // 레이아웃 확인용
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  // margin: 10px 0px;
  // background-color: pink; // 레이아웃 확인용
`;

const InnerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  // width: 100px;
  // background-color: yellow; // 레이아웃 확인용
`;

const RowDiv = styled.div`
  margin: 5px;

  // height: 100px;
`;

const CommentWritingBox = styled.div`
  display: flex; //grid;
  // grid-template-columns: 150px auto 120px;
  align-items: center;
  // min-height: 50px;
  height: 60px;
  max-height: 200px;
  box-shadow: 1px 1px 5px 0.2px grey;
  border-radius: 10px;
  background-color: white;
`;

const CommentBox = styled.div`
  display: flex; //grid;
  // grid-template-columns: 150px auto 120px;
  align-items: center;
  // min-height: 50px;
  height: 60px;
  max-height: 200px;
  // box-shadow: 1px 1px 5px 0.2px grey;
  // border-radius: 10px;
  background-color: white;
`;

const CommentProfilePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; //100%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: var(--color-primary-blue);
  opacity: 50%;
`;

const CommentTextPart = styled.textarea`
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
  // background-color: lightGrey;
`;

const CommentButtonPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px; //100%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  // background-color: black;
`;

const CommentListBox = styled.div`
  display: flex; //grid
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 10px 100px 10px;
  margin: 0px;
  // background-color: orange; // 레이아웃 확인용
`;

const PostDetail = () => {
  const navigate = useNavigate();
  const loginUser = getCookie("userId");
  const {
    post,
    commentList,
    handleUserLike,
    userLike,
    totalLikes,
    totalComments,
    replyBtnSeq,
    handleReplyBtn,
    handlePostEditingPage,
    handlePostDelete,
    comment,
    replyComment,
    handleInputChange,
    handleComment,
    handleReplyComment,
    handleCommentDelete,
    // handleBoardPage
  } = usePostDetail();

  // const CommentTextPart = useRef();
  const handleResizeHeight = () => {
    console.log("CommentTextPart - ", CommentTextPart);
    // CommentTextPart.current.style.height = "auto";
    // CommentTextPart.current.style.height =
    //   CommentTextPart.current.scrollHeight + "px";
  };

  // console.log("PostDetail.js - post", post);
  // console.log("PostDetail.js - commentList", commentList);

  return (
    <BasicFrame>
      <GridBoxRow>
        <Text
          text="🏚️회의록 게시판"
          height="40px"
          margin="0px"
          cursor="pointer"
          onClick={() => {
            navigate("/board");
          }}
        />

        <TopBox>
          <Text text={post.tag} height="40px" margin="0px" fontSize="17px" />
          <Text text={post.title} height="40px" margin="0px" fontSize="18px" />
        </TopBox>
        <InfoBox>
          <InnerInfoBox>
            <RowDiv>
              조회수&nbsp;{post.viewCount}&nbsp;&nbsp;추천수&nbsp;
              {totalLikes || 0}&nbsp;&nbsp;댓글&nbsp;
              {totalComments}
            </RowDiv>
          </InnerInfoBox>
          <InnerInfoBox>
            <RowDiv>
              {formatDatetime(post.updatedAt || post.createdAt)}{" "}
              {post.updatedAt && "(수정됨)"}
            </RowDiv>
            <RowDiv>
              작성자 {post.nick} {post.role == 0 && "(탈퇴)"}
              {post.userId == loginUser ? (
                <>
                  {" "}
                  &nbsp;
                  <LinkButton
                    onClick={() => {
                      handlePostEditingPage();
                    }}
                    height="20px"
                    fontSize="12px"
                    btnText="수정"
                    // margin="0px 10px 0px 0px"
                  />
                  <LinkButton
                    onClick={() => {
                      handlePostDelete();
                    }}
                    height="20px"
                    fontSize="12px"
                    btnText="삭제"
                    // margin="0px 10px 0px 0px"
                  />
                </>
              ) : null}
            </RowDiv>
          </InnerInfoBox>
        </InfoBox>
        <PostingBox
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(post?.content)),
          }}
        />
        <ButtonBox>
          {totalLikes >= 0 ? (
            userLike != null && userLike ? (
              <SimpleButton
                onClick={() => handleUserLike()}
                width="180px"
                height="35px"
                fontSize="16px"
                btnColor="var(--color-secondary-gray)"
                btnText={"추천합니다 👍 " + totalLikes}
                hoverEvent={userLike}
              />
            ) : (
              <SimpleButton
                onClick={() => handleUserLike()}
                width="180px"
                height="35px"
                fontSize="16px"
                // btnColor="var(--color-primary-green)"
                btnText={"추천하기 👍 " + totalLikes}
                hoverEvent={userLike}
              />
            )
          ) : null}
        </ButtonBox>
        <RowDiv>
          추천수&nbsp;{totalLikes}&nbsp;&nbsp;댓글&nbsp;
          {totalComments}
        </RowDiv>
        <RowDiv>
          <CommentWritingBox>
            <CommentProfilePart>댓글</CommentProfilePart>
            <CommentTextPart
              name="comment"
              value={comment}
              onChange={(e) => handleInputChange(e)}
            />
            {/* <CommentTextPart onChange={() => handleResizeHeight()} /> */}
            <CommentButtonPart>
              <SimpleButton
                onClick={() => handleComment()}
                width="60px"
                height="25px"
                fontSize="12px"
                // btnColor="var(--color-primary-green)"
                btnText="등록"
              ></SimpleButton>
            </CommentButtonPart>
          </CommentWritingBox>
        </RowDiv>
        <CommentListBox>
          {commentList != undefined && commentList.length > 0
            ? commentList.map((item, idx) => {
                // console.log("댓글 array : ", item);
                // 댓글 작성할때마다 불러지는 이유는 뭐지?
                // let replyBtn = false;
                return (
                  <div key={idx}>
                    <CommentContainer
                      // key={idx}
                      ReCmmnt={item.replySeq} // 대댓글 여부
                      Head={item.nick + (item.role == 0 ? "(탈퇴)" : "")}
                      Middle={item.comment}
                      End={
                        <>
                          <div>{formatDatetime(item.createdAt)}</div>
                          <div>
                            {/* 만약 로그인한 사용자의 댓글이라면 */}

                            {item.userId == loginUser ? (
                              <>
                                {/* <LinkButton
                                  // onClick=
                                  btnText="수정"
                                /> */}
                                <LinkButton
                                  onClick={() =>
                                    handleCommentDelete(item.cmmntSeq, idx)
                                  }
                                  btnText="댓글삭제"
                                />
                              </>
                            ) : null}
                            <SimpleButton
                              onClick={(e) => {
                                console.log("replyBtn클릭");
                                handleReplyBtn(item.cmmntSeq);
                              }}
                              width="40px"
                              height="20px"
                              fontSize="11px"
                              btnText="답글"
                              margin="5px 0px 0px 0px"
                            />
                          </div>
                        </>
                      }
                    />
                    {
                      // 만약 답글 버튼이 눌러졌다면?
                      replyBtnSeq != null && replyBtnSeq == item.cmmntSeq ? (
                        <CommentWritingBox
                          // key={item.cmmntSeq}
                          style={{ marginLeft: "20PX" }}
                        >
                          <CommentProfilePart>
                            {item.nick}님에게 답글
                          </CommentProfilePart>
                          <CommentTextPart
                            name="replyComment"
                            value={replyComment}
                            // onChange={() => handleResizeHeight()}
                            onChange={(e) => handleInputChange(e)}
                          />
                          <CommentButtonPart>
                            <SimpleButton
                              onClick={() => {
                                handleReplyComment();
                              }}
                              width="60px"
                              height="25px"
                              fontSize="12px"
                              // btnColor="var(--color-primary-green)"
                              btnText="등록"
                            ></SimpleButton>
                          </CommentButtonPart>
                        </CommentWritingBox>
                      ) : null
                    }
                  </div>
                );
              })
            : null}
        </CommentListBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default React.memo(PostDetail);
