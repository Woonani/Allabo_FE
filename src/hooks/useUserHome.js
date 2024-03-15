import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../utils/Cookie";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTimer } from "../components/common/AlertTimer";
import { useTeamListState } from "../context/TeamListContext";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";

const useUserHome = () => {
  const { state, actions } = useTeamListState();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [teamList, setTeamList] = useState([]);
  const [teamListCount, setTeamListCount] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [invitees, setInvitees] = useState([]);

  const userName = getCookie("userName");
  const userId = getCookie("userId");

  const initTeamForm = {
    teamName: "",
    description: "",
    nick: "",
    userId: getCookie("userId"),
    inviteelist: [],
  }; // teamForm 보다 위에 있어야함!!
  const [teamForm, setTeamForm] = useState(initTeamForm);

  useEffect(() => {
    // console.log("1. useEffect []");
    handleTeamList();
  }, []);

  // DropdownInput 컴포넌트에서 변경된 invitees값을 teamForm객체에 세팅
  useEffect(() => {
    setTeamForm({ ...teamForm, inviteelist: [...invitees] });
  }, [invitees]);

  // useEffect(() => {
  //   console.log("teamList 업데이트됨:", teamList);
  // }, [teamList]); // 이거없어도 teamList, teamListCount 변경됨.

  useEffect(() => {
    // teamList값이 바뀌면 알아서 바뀌도록 사용
    setTeamListCount(state.teamList.length);
  }, [state.teamList]);

  // MakeTeamModal 에서 사용 --------------------------------------------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamForm({ ...teamForm, [name]: value });
  };

  const handleMakeTeam = async (e) => {
    console.log("handleMakeTeam : ", teamForm);
    try {
      const response = await axios.post("/api/team/register", teamForm);

      if (response.statusText == "OK") {
        const newTeam = response.data; // 서버에서 반환된 새 팀 정보
        actions.setTeamList((prevTeamList) => [newTeam, ...prevTeamList]);

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
            setLocalStorage("now-team", newTeam);
            actions.setCurrentTeam({ ...newTeam });

            navigate("/team");
          } else {
            //form 비우기
            setTeamForm({ ...initTeamForm });
            setInvitees([]);
            // console.log("initTeamForm", initTeamForm);
            setIsModalOpen(false);
          }
        });
      } else {
        AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
      }
    } catch (error) {
      AlertTimer(
        "ERROR",
        error.message + "\n오류발생!!\n 다시 진행해주세요.",
        "warning",
        2300
      );
      console.log(error);
    }
  };

  // 검색어로 초대할 팀원 목록 가져오는 함수
  const handleSearchMember = async (e) => {
    const searchId = e.target.value;
    // console.log("검색어", searchId);
    if (searchId.length > 0) {
      const response = await axios.get(`/api/member/search/${searchId}`);
      // console.log("검색결과", response.data);
      const data = response.data.filter((item) => {
        // 검색 결과에서 로그인한 유저 제거
        return item.userId != userId;
      });
      setSearchList(["검색결과가 없습니다.", ...data]);
    } else {
      setSearchList([""]);
    }
  };

  // UserHome에서 사용 --------------------------------------------------------------

  // 유저가 속한 팀 목록 가져오는 함수
  const handleTeamList = async () => {
    // console.log("2. handleTeamList()");

    const response = await axios.get(`/api/team/list/${userId}`);
    // console.log("response.data : ", response.data, response.data.length);
    setLocalStorage("team-list", response.data);
    actions.setTeamList([...response.data]);
  };

  // 팀 프로필 클릭 시 이동
  const handleTeamPage = (team) => {
    setLocalStorage("now-team", team);
    actions.setCurrentTeam(team);
    navigate("/team");
  };

  // 팀 삭제  🚨⛔‼️
  const handleTeamDelete = (teamSeq, idx) => {
    Swal.fire({
      icon: "warning",
      title: "⚠️ 정말로 팀을 삭제하시겠습니까?",
      text: "팀을 삭제하게 되면 팀원은 자동탈퇴되며, 팀내 컨텐츠는 복구 할 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // navigate("/team/secure"); // 아직 없는 페이지 : 삭제시 일어나는 일을 설명하고 비밀번호 한번 더 인증 하고 삭제하도록 조치하는 페이지

        try {
          const response = await axios.delete(`/api/team/${teamSeq}`);
          console.log("Delete team : ", response.data);
          if (response.statusText == "OK") {
            state.teamList.splice(idx, 1);
            actions.setTeamList([...state.teamList]);

            setLocalStorage("now-team", state.teamList[0]);
            actions.setCurrentTeam({ ...state.teamList[0] });
          }
        } catch (error) {
          AlertTimer(
            "ERROR",
            error.message + "\n오류발생!!\n 다시 진행해주세요.",
            "warning",
            2300
          );
        }
      }
    });
  };
  // 팀 떠나기 (탈퇴)  🚨⛔‼️
  const handleTeamLeave = (utSeq, idx) => {
    console.log("utSeq", utSeq);
    Swal.fire({
      icon: "none",
      title: "😿정말로 팀을 떠나시겠습니까?",
      text: "팀에서 떠나도 작성하신 게시물과 댓글들은 삭제되지 않습니다. 관리자의 초대장을 받아 다시 가입 할 수 있습니다.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(`/api/member/leaving/${utSeq}`);
          console.log("Leave team : ", response.data);
          if (response.statusText == "OK") {
            state.teamList.splice(idx, 1);
            actions.setTeamList([...state.teamList]);
            setLocalStorage("now-team", state.teamList[0]);
            actions.setCurrentTeam({ ...state.teamList[0] });
          }
        } catch (error) {
          AlertTimer(
            "ERROR",
            error.message + "\n오류발생!!\n 다시 진행해주세요.",
            "warning",
            2300
          );
        }
      }
    });
  };

  return {
    isModalOpen,
    setIsModalOpen,
    userName,
    teamListCount,
    teamForm,
    handleInputChange,
    handleMakeTeam,
    handleTeamList,
    handleTeamPage,
    setTeamForm,
    initTeamForm,
    handleSearchMember,
    searchList,
    setSearchList,
    invitees,
    setInvitees,
    handleTeamDelete,
    handleTeamLeave,
  };
};

export default useUserHome;
