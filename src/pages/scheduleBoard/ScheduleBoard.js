import React, { useEffect } from "react";

const ScheduleBoard = ({ handleSideMenu }) => {
  useEffect(() => {
    handleSideMenu("close");
  }, []);
  return <div>일정관리 입니다.</div>;
};

export default ScheduleBoard;
