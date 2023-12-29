import axios from "axios";
import React, { useEffect } from "react";

const useTeamHome = () => {
  useEffect(() => {
    handleTeamInfo();
  }, []);
  const handleTeamInfo = async () => {
    // const response = await axios.get(`/api/team`)
    console.log("팀정보가져오기: 멤버목록, 게시판공지, 일정");
  };

  return { handleTeamInfo };
};

export default useTeamHome;
