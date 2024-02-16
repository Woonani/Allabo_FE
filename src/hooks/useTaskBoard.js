import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

import Swal from "sweetalert2";
import { useTeamListState } from "../context/TeamListContext";

const useTaskBoard = () => {
  const navigate = useNavigate();
  const { state, actions } = useTeamListState();
  const teamSeq = state.currentTeam.teamSeq;
  console.log("useTaskBoard.js=========================");

  const searchList = ["제목", "내용", "제목+내용"];
  const tagList = ["공지", "과제", "일반"]; // 태그 생성 기능 추가 후에는 불러오는 값으로 변경 하기
  const postList = [5, 10, 15, 20];

  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [topPostNo, setTopPostNo] = useState(1);

  const initBoardInfo = {
    tag: "",
    noPerPage: postList[0],
    page: currentPage,
    totalPosts: totalPosts,
  };
  const initSearchInfo = {
    // boardInfo에서 검색정보 분리한 이유 : 비동기 검색이므로
    // 같이 넣으면 useEffect 추척에 의해 검색어를 하나하나 입력할 때마다 동기적으로 handleBoardList()가 호출되고 결과적으로 동기 검색 기능이 되어버림
    // 하지만 boardList불러오는 함수를 두개로 분리할 필요는 없음. param에서 넣어주는 state변수만 달라지면 되므로
    searchTag: searchList[0],
    searchWord: "",
  };

  const [boardInfo, setBoardInfo] = useState(initBoardInfo);
  const [searchInfo, setSearchInfo] = useState(initSearchInfo);
  const [boardList, setBoardList] = useState([]);
  const [pagenationArray, setPagenationArray] = useState([1, 2, 3]);
  const [pageMove, setPageMove] = useState(0);
  /* 아래 useEffect 코드로 기능 중복된 코드
     최초 렌더링시 boardInfo값이 초기화 되면서 handleBoardList()를 호출하는 useEffect가 동작함
  useEffect(() => {
     setBoardInfo({ ...initBoardInfo });
     handleBoardList();
  }, []);
  */

  // 게시판 조회 정보가 바뀌면 DB에서 게시물을 가져오는 함수 실행
  useEffect(() => {
    console.log("useEffect -handleBoardList() 실행");
    handleBoardList();
  }, [boardInfo]);

  // [페이지네이션 다음버튼을 누르면] 현재페이지번호를 배열의 첫번쨰 요소로 바꿈
  useEffect(() => {
    if (pageMove == -1) {
      setCurrentPage(pagenationArray[2]);
    } else if (pageMove == 1) {
      setCurrentPage(pagenationArray[0]);
    }
    setPageMove(0);
  }, [pageMove]);

  // [게시판 내용을 불러왔을 때] 맨 윗 게시물의 번호를 저장
  useEffect(() => {
    if (boardList[0]) {
      setTopPostNo(boardList[0].no);
    }
  }, [boardList]);

  // [N개씩 보기를 바꾸면] 현재페이지 번호를 다시 계산하여 반영
  useEffect(() => {
    const paging = boardInfo.noPerPage;
    const newPage = Math.ceil(topPostNo / paging);
    setCurrentPage(newPage);
    // console.log(" N개씩보기 ", paging);
    // console.log(" 상단게시물번호 ", topPostNo);
    // console.log(" 새로운페이지번호", newPage);
  }, [boardInfo.noPerPage]);

  // 현재페이지 번화가 있으면 게시판 조회 정보를 변경 (>> DB에서 게시물 가져오는 함수 실행됨)
  useEffect(() => {
    console.log("useEffect======== currentPage : ", currentPage);
    setBoardInfo({ ...boardInfo, page: currentPage });
    if (currentPage > pagenationArray[2]) {
      // 계산된 현재페이지가 페이지네이션의 최대값보다 크다면
      const jump = Math.ceil((currentPage - pagenationArray[2]) / 3);
      setPagenationArray([
        ...pagenationArray.map((item, idx) => item + 3 * jump),
      ]);
    } else if (currentPage < pagenationArray[0]) {
      // 계산된 현재페이지가 페이지네이션의 최소값보다 작다면
      const jump = Math.ceil((pagenationArray[0] - currentPage) / 3);
      setPagenationArray([
        ...pagenationArray.map((item, idx) => item - 3 * jump),
      ]);
    }
  }, [currentPage]);

  // 글보기 태그 변경시 현재 페이지 1로 세팅
  useEffect(() => {
    if (boardInfo.tag !== "") {
      setCurrentPage(1);
    }
  }, [boardInfo.tag]);

  // 게시글 불러오기 함수
  const handleBoardList = async () => {
    console.log("------handleBoardList()----------");

    const response = await axios.get(`/api/board/${teamSeq}`, {
      params: {
        tag: boardInfo.tag,
        noPerPage: boardInfo.noPerPage,
        page: boardInfo.page,
        searchTag: searchInfo.searchTag,
        searchWord: searchInfo.searchWord.trim(), // 공백검색 방지
      },
    });
    // console.log("handleBoardList() - response : ", response);
    setBoardList([...response.data.postlist]);
    setTotalPosts(response.data.totalPosts);
    // console.log("확인 - boardList : ", boardList);
  };

  const handleSelectChange = (e) => {
    // console.log("value : ", e.target.value);
    setBoardInfo({ ...boardInfo, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    console.log("value : ", e.target.value);
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value });
    console.log("searchInfo : ", searchInfo);
  };

  const handlePostWritingPage = () => {
    navigate("/board/post");
  };

  const handlePostDetailPage = () => {
    navigate("/board/detail");
  };

  return {
    searchList,
    tagList,
    postList,
    boardList,
    totalPosts,
    boardInfo,
    currentPage,
    setCurrentPage,
    pagenationArray,
    pageMove,
    setPageMove,
    setPagenationArray,
    handleSelectChange,
    handleSearchChange,
    handlePostWritingPage,
    handlePostDetailPage,
    handleBoardList,
  };
};

export default useTaskBoard;
