import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTeamListState } from "../context/TeamListContext";
import { getCookie } from "../utils/Cookie";
import { AlertTimer } from "../components/common/AlertTimer";

const useTeamHome = () => {
  const { state } = useTeamListState();
  const userId = getCookie("userId");

  const initTeamHomeInfo = {
    memberList: [],
    boardList: [],
    scheduleList: [],
  };
  const [teamHomeInfo, setTeamHomeInfo] = useState(initTeamHomeInfo);

  useEffect(() => {
    handleTeamInfo();
    // console.log("팀 컨텍스트 : ", state.currentTeam);
    console.log("컨텍스트 teamSeq : ", state.currentTeam.teamSeq);
  }, [state.currentTeam]);

  //팀정보가져오기: 멤버목록, 게시판공지, 일정
  const handleTeamInfo = async () => {
    try {
      const response = await axios.get(
        `/api/team/home/${state.currentTeam.teamSeq}`
      );
      console.log("handleTeamInfo - response.data: ", response.data);
      // 로그인 유저는 목록 맨 위에 표시되도록 정렬
      if (response.statusText == "OK") {
        let loginUser;
        const newMemberList = response.data.memberList.filter((item, idx) => {
          if (item.userId == userId) {
            item.nick += " (나)";
            loginUser = item;
          }
          if (item.role == 1) {
            item.nick = item.nick + " 👑";
          }
          return item.userId != userId;
        });
        newMemberList.unshift(loginUser);
        setTeamHomeInfo({ ...response.data, memberList: newMemberList });
        // setTeamHomeInfo({ ...response.data });
      }
    } catch (error) {
      AlertTimer(
        "ERROR",
        error.message + "\n오류발생!!\n 다시 진행해주세요.",
        "warning",
        2300
      );
    }
  };

  return { handleTeamInfo, teamHomeInfo };
};

export default useTeamHome;
