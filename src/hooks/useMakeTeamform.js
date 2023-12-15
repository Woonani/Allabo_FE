import axios from "axios";
import React, { useState } from "react";
import { getCookie, setCookie } from "../utils/Cookie";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const useMakeTeamform = (closeModal) => {
  const navigate = useNavigate();

  const [teamForm, setTeamForm] = useState({
    teamName: "",
    description: "",
    nick: "",
    userId: getCookie("userId"),
  });

  // MakeTeamModal 에서 사용 --------------------------------------------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm({ ...teamForm, [name]: value });
  };

  const handleMakeTeam = async () => {
    console.log("팀등록함수");
    // setTeamForm({ ...teamForm, userId: getCookie("userId") }); // 이렇게 하면 X : 아래 라인이 먼저 동작됨
    try {
      const response = await axios.post("/api/team/register", teamForm);
      // console.log(response);

      if (response.statusText == "OK") {
        /* 바로이동 alert창*/
        // Swal.fire({
        //   title: "팀 생성 완료",
        //   text: "생성된 팀으로 이동합니다.",
        //   icon: "success",
        //   showConfirmButton: false,
        //   showCancelButton: false,
        //   timer: 2000,
        //   height: "500px",
        // });
        // navigate("/team"); //  /team/:teamid로 이동시킨다. `/team/:${teamId}`

        /* 이동 여부 확인 alert창*/
        Swal.fire({
          icon: "success",
          title: "팀 생성 완료",
          text: "바로 이동할까요?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "네",
          cancelButtonText: "아니요",
          height: "500px",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/team");
          } else {
            // closeModal(); // 비동기로 하고싶었는데..
            window.location.replace("/");
          }
        });
      } else {
        alert("ERROR\n처음부터 다시 진행해주세요.");
      }
    } catch (error) {
      alert("ERROR" + error.message + "\n오류발생!!\n 다시 진행해주세요.");
    }
  };

  // UserHome에서 사용 --------------------------------------------------------------

  // 유저가 속한 팀 목록 불러오는 함수
  const handleTeamList = async () => {
    const userId = getCookie("userId");
    const response = await axios.get(`/api/team/list/${userId}`);
    console.log("response.data : ", response.data, response.data.length);
    return response.data;
  };

  return { teamForm, handleInputChange, handleMakeTeam, handleTeamList };
};

export default useMakeTeamform;
