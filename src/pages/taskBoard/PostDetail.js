import React, { useRef } from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import Text from "../../components/common/Text";
import SimpleButton from "../../components/common/SimpleButton";
import usePostDetail from "../../hooks/usePostDetail";
import Button from "../../components/common/Button";
import CommentContainer from "../../components/common/CommentContainer";
import { useNavigate } from "react-router-dom";

const GridBoxRow = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 52px auto 55px 16px auto auto;
  row-gap: 5px;
  align-items: center;
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
  // margin: 10px 0px;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0.8px 1px 3px -0.6px grey;
  // overflow-y: auto;
  background-color: white;
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
  // const { handleBoardPage } = usePostDetail();

  // const CommentTextPart = useRef();
  const handleResizeHeight = () => {
    console.log("CommentTextPart - ", CommentTextPart);
    // CommentTextPart.current.style.height = "auto";
    // CommentTextPart.current.style.height =
    //   CommentTextPart.current.scrollHeight + "px";
  };
  const likes = 3;
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
          <Text text="말머리 태그" height="40px" margin="0px" fontSize="17px" />
          <Text text="글제목" height="40px" margin="0px" fontSize="18px" />
        </TopBox>
        <InfoBox>
          <InnerInfoBox>
            <RowDiv>
              <SimpleButton
                // onClick=
                width="40px"
                height="20px"
                margin="0px 10px 0px 0px"
                fontSize="12px"
                // btnColor="var(--color-primary-red)"
                btnText="수정"
                hoverEvent="none"
              ></SimpleButton>
              <SimpleButton
                // onClick=
                width="40px"
                height="20px"
                // margin="5px"
                fontSize="12px"
                // btnColor="var(--color-primary-red)"
                btnText="삭제"
              ></SimpleButton>
            </RowDiv>
          </InnerInfoBox>
          <InnerInfoBox>
            <RowDiv>팀장 우나은 2023.07.15</RowDiv>
            <RowDiv>
              조회수 ${} 추천수 ${} 댓글 ${}{" "}
            </RowDiv>
          </InnerInfoBox>
        </InfoBox>
        <PostingBox>게시글</PostingBox>
        <ButtonBox>
          <SimpleButton
            // onClick=
            width="180px"
            height="35px"
            fontSize="16px"
            // btnColor="var(--color-primary-green)"
            btnText="👍 게시물 추천하기"
          ></SimpleButton>
        </ButtonBox>
        <RowDiv>
          추천수 ${} 댓글 ${}{" "}
        </RowDiv>
        <RowDiv>
          <CommentWritingBox>
            <CommentProfilePart>댓글</CommentProfilePart>
            <CommentTextPart onChange={() => handleResizeHeight()} />
            <CommentButtonPart>
              <SimpleButton
                // onClick=
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
          <CommentContainer
            ReCmmnt={0} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={0} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={0} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={0} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={1} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={0} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={1} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
          <CommentContainer
            ReCmmnt={1} // 대댓글 여부
            Head={"프로필 자리"}
            Middle={"댓글내용"}
            End={
              <>
                <div>2023.12.9 10:22</div>
                <div>
                  {/* 만약 로그인한 사용자의 댓글이라면 */}
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="답글"
                    margin="5px 0px 0px 0px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="수정"
                    margin="5px 0px 0px 5px"
                  />
                  <SimpleButton
                    // onClick=
                    width="40px"
                    height="20px"
                    fontSize="9px"
                    // btnColor="var(--color-primary-green)"
                    btnText="삭제"
                    margin="5px 0px 0px 5px"
                  />
                </div>
              </>
            }
          />
        </CommentListBox>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default PostDetail;
