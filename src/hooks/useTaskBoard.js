import React from "react";
import { useNavigate } from "react-router-dom";

const useTaskBoard = () => {
  const navigate = useNavigate();
  const hadlePostWritingPage = () => {
    console.log("클릭");
    navigate("/board/post");
  };

  const hadlePostDetailPage = () => {
    console.log("클릭");
    navigate("/board/detail");
  };

  const hadleBoardPage = () => {
    console.log("클릭");
    navigate("/board");
  };

  return { hadlePostWritingPage, hadlePostDetailPage, hadleBoardPage };
};

export default useTaskBoard;
