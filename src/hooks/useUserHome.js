import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../utils/Cookie";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTimer } from "../components/common/AlertTimer";
// import { AlertTimer } from "../components/common/AlertTimer";

const useUserHome = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [teamListCount, setTeamListCount] = useState(0);

  const userName = getCookie("userName");
  const userId = getCookie("userId");

  const initTeamForm = {
    teamName: "",
    description: "",
    nick: "",
    userId: getCookie("userId"), //userId,
  }; // teamForm 보다 위에 있어야함!!
  const [teamForm, setTeamForm] = useState(initTeamForm);

  useEffect(() => {
    handleTeamList();
  }, []);

  // useEffect(() => {
  //   console.log("teamList 업데이트됨:", teamList);
  // }, [teamList]); // 이거없어도 teamList, teamListCount 변경됨.

  // MakeTeamModal 에서 사용
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm({ ...teamForm, [name]: value });
  };

  const handleMakeTeam = async (e) => {
    try {
      const response = await axios.post("/api/team/register", teamForm);
      console.log("inserted team : ", response.data);
      if (response.statusText == "OK") {
        /*refactoredCode*/
        const newTeam = response.data; // 서버에서 반환된 새 팀 정보
        // setTeamList((prevTeamList) => [...prevTeamList, newTeam]); // 방금 추가된 팀에 맨 끝에 추가됨
        setTeamList((prevTeamList) => [newTeam, ...prevTeamList]); // 방금 추가된 팀에 맨 앞에 추가됨
        // setTeamListCount((prevCount) => prevCount + 1);
        setTeamListCount(teamList.length);

        /* 
        //바로이동 alert창일 경우
        AlertTimer();
        navigate("/team"); // `/team/:${teamId}>>teamSeq로 변경`로 이동시킨다.
        */

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
            // teamList.push(response.data); // 불변성 유지 위배
            // setTeamListCount(teamList.length);

            //form 비우기
            setTeamForm({ ...initTeamForm });
            console.log("initTeamForm", initTeamForm);
            setIsModalOpen(false); //가존 closeModal 함수 대체
          }
        });
      } else {
        AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
        // alert("ERROR\n처음부터 다시 진행해주세요.");
      }
    } catch (error) {
      AlertTimer(
        "ERROR",
        error.message + "\n오류발생!!\n 다시 진행해주세요.",
        "warning",
        2300
      );
      // alert("ERROR" + error.message + "\n오류발생!!\n 다시 진행해주세요.");
    }
  };

  // UserHome에서 사용 --------------------------------------------------------------

  // 유저가 속한 팀 목록 불러오는 함수
  const handleTeamList = async () => {
    const response = await axios.get(`/api/team/list/${userId}`);
    console.log("response.data : ", response.data, response.data.length);

    setTeamListCount(response.data.length);
    setTeamList(response.data);
  };

  // 팀 프로필 클릭 시 이동
  const handleTeamPage = (teamSeq) => {
    setCookie("now-team", teamSeq);
    navigate("/team");
  };

  return {
    isModalOpen,
    setIsModalOpen,
    userName,
    teamList,
    teamListCount,
    teamForm,
    handleInputChange,
    handleMakeTeam,
    handleTeamList,
    handleTeamPage,
    setTeamForm,
    initTeamForm,
  };
};

export default useUserHome;
