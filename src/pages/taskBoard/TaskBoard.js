import React, { useEffect } from "react";

const TaskBoard = ({ handleSideMenu }) => {
  useEffect(() => {
    handleSideMenu("close");
  }, []);
  return <div>회의록게시판(태스크보드)입니다.</div>;
};

export default TaskBoard;
