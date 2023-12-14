import axios from "axios";
import React, { useState } from "react";
import { getCookie } from "../utils/Cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useMakeTeamform = (closeModal) => {
  const navigate = useNavigate();

  const [teamForm, setTeamForm] = useState({
    teamName: "",
    description: "",
    nick: "",
    userId: getCookie("userId"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm({ ...teamForm, [name]: value });
  };

  const handleMakeTeam = async () => {
    console.log("팀등록함수");
    // setTeamForm({ ...teamForm, userId: getCookie("userId") });
    try {
      const response = await axios.post("/api/team/register", teamForm);
      console.log(response);
      if (response.statusText == "OK") {
        Swal.fire({
          title: "팀 생성 완료",
          text: "생성된 팀으로 이동합니다.",
          icon: "success",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
          height: "500px",
        });
        navigate("/team"); //  /team/:teamid로 이동시킨다.

        // Swal.fire({
        //   icon: "success",
        //   title: "팀 생성 완료",
        //   text: "바로 이동할까요?",
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        //   confirmButtonText: "네",
        //   cancelButtonText: "아니요",
        //   height: "500px",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     navigate("/team");
        //   } else {
        //     closeModal();
        //   }
        // });
      } else {
        alert("ERROR\n처음부터 다시 진행해주세요.");
      }
    } catch (error) {
      alert("ERROR" + error.message + "\n오류발생!!\n 다시 진행해주세요.");
    }
  };

  return { teamForm, handleInputChange, handleMakeTeam };
};

export default useMakeTeamform;
