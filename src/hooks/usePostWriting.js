import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/LocalStorage";
import { AlertTimer } from "../components/common/AlertTimer";
import { AlertToast } from "../components/common/AlertToast";

const usePostWriting = () => {
  const tagList = ["일반", "공지", "과제"]; // 태그 생성 기능 추가 후에는 불러오는 값으로 변경 하기
  const navigate = useNavigate();

  const initPostForm = {
    postSeq: "",
    tag: "",
    title: "",
    content: "임시",
    createdAt: "",
    updatedAt: "",
    viewCount: "",
    likes: "",
    fileSeq: "",
    utSeq: getLocalStorage("now-team").utSeq,
  };
  const [postForm, setPostForm] = useState(initPostForm);

  useEffect(() => {
    // console.log("useEffect - postForm: ", postForm);
  }, [postForm]);

  // 글 등록 함수
  const handlePostForm = async () => {
    console.log("postForm 제출 - ", postForm);
    if (checkValidate(postForm)) {
      try {
        const response = await axios.post(`/api/board/writing`, postForm);
        console.log("response : ", response);
        if (response.statusText == "OK") {
          // 그냥 글detail 보여줘...
          //현재글번호 state에 적어서 페이지 보내기
          navigate("/board/detail");
        } else {
          AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
        }
      } catch (error) {
        console.log("error : ", error);
      }
    } else {
      console.log("글 등록 실패");
    }

    // alert 창 작성한 글을 확인? handle detail page / handle board page
    // handleBoardPage();
  };

  const checkValidate = (postForm) => {
    if (postForm.tag == "") {
      AlertToast("warning", "태그를 선택해 주세요.");
      return false;
    } else if (postForm.title == "") {
      AlertToast("warning", "글 제목을 입력해주세요.");
      return false;
      // } else if (postForm.content == "") {
    } else if (postForm.utSeq == "") {
      AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
      navigate("/detail");
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (e) => {
    console.log("e.target.value : ", e.target.value);
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
    console.log("handleInputChange - postForm : ", postForm);
  };
  const handleBoardPage = () => {
    navigate("/board");
  };

  return {
    tagList,
    postForm,
    setPostForm,
    handleInputChange,
    handlePostForm,
    handleBoardPage,
  };
};

export default usePostWriting;
