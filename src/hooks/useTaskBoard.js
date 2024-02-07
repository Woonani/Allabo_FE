import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useTaskBoard = () => {
  const navigate = useNavigate();

  const initPostForm = {
    postSeq: "",
    tag: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    viewCount: "",
    likes: "",
    fileSeq: "",
    utSeq: "",
  };

  const [postForm, setPostForm] = useState(initPostForm);

  const handlePostForm = async () => {
    try {
      const response = await axios.post(`/api/board/writing`, postForm);
      console.log("response : ", response);
    } catch (error) {
      console.log("error : ", error);
    }
    // alert 창 작성한 글을 확인? handle detail page / handle board page
    // handleBoardPage();
  };

  const handlePostWritingPage = () => {
    navigate("/board/post");
  };

  const handlePostDetailPage = () => {
    navigate("/board/detail");
  };

  const handleBoardPage = () => {
    navigate("/board");
  };

  return {
    handlePostForm,
    handlePostWritingPage,
    handlePostDetailPage,
    handleBoardPage,
  };
};

export default useTaskBoard;
