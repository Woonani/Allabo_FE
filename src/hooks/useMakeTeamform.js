import axios from "axios";
import React, { useState } from "react";
import { getCookie } from "../utils/Cookie";

const useMakeTeamform = () => {
  const [teamForm, setTeamForm] = useState({
    teamName: "",
    description: "",
    nick: "",
    userId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm({ ...teamForm, [name]: value });
  };

  const handleMakeTeam = async () => {
    console.log("팀등록함수");
    setTeamForm({ ...teamForm, userId: getCookie("userId") });
    try {
      const response = await axios.post("/api/team/register", teamForm);
      console.log(response);
      // if(response.data == 1){
      //     // 모달창 닫고
      //     // vs /team/:teamid로 이동시킨다.
      // }else {
      //     alert("ERROR\n처음부터 다시 진행해주세요.");
      // }
    } catch (error) {
      alert("ERROR" + error.message + "\n오류발생!!\n 다시 진행해주세요.");
    }
  };

  return { teamForm, handleInputChange, handleMakeTeam };
};

export default useMakeTeamform;
