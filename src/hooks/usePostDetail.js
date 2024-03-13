import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/Cookie";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const usePostDetail = () => {
  const navigate = useNavigate();
  const userId = getCookie("userId");
  const initPost = {
    tag: "",
    title: "",
    nick: "",
    createdAt: null,
    updatedAt: null,
    content: "",
    viewCount: null,
    likeCount: null,
    commentCount: null,
  };
  const [post, setPost] = useState({ ...initPost }); // 게시글 정보
  const [commentList, setCommentList] = useState([]); // 댓글 리스트
  const [totalComments, setTotalComments] = useState(0); // 총 댓글 수
  const [totalLikes, setTotalLikes] = useState(); // 총 좋아요 수
  const [userLike, setUserLike] = useState(null); // 로그인유저의 좋아요 여부
  const [replyBtnSeq, setReplyBtnSeq] = useState(null); // 답글달기를 선택한 댓글 번호
  const [prevTotalLike, setPrevTotalLike] = useState(null); // 답글달기를 선택한 댓글 번호
  const [btnClicked, setBtnClicked] = useState(false);
  useEffect(() => {
    handlePost();
  }, []);

  useEffect(() => {
    if (userLike != null) {
      userLike
        ? setTotalLikes(() => totalLikes + 1)
        : setTotalLikes(() => totalLikes - 1);
    }
  }, [btnClicked]);

  const handlePost = async () => {
    const postSeq = getLocalStorage("postSeq");
    const response = await axios.get(`/api/board/post/${postSeq}/${userId}`);
    setPost({ ...response.data.post });
    setCommentList([...response.data.commentlist]);
    setTotalComments(response.data.totalComments);
    setTotalLikes(response.data.totalLikes);
    setPrevTotalLike(response.data.totalLikes);
    setUserLike(response.data.userLike > 0 ? true : false);
    console.log("response.data: ", response.data);
  };

  // 추천 버튼 클릭 함수
  const handleUserLike = async () => {
    setUserLike(!userLike);
    console.log("###handleUserLike-userLike : ", userLike);
    const data = {
      userId: userId,
      postSeq: getLocalStorage("postSeq"),
      userLike: userLike ? 1 : 0,
    };
    console.log("###userLike : ", userLike);

    await axios.post(`/api/board/userlike`, data).then((response) => {
      console.log(response);
    });
    setBtnClicked(!btnClicked);
  };

  // 답글 버튼 클릭 함수
  const handleReplyBtn = (cmmntSeq) => {
    setReplyBtnSeq(cmmntSeq);
    //댓글 form 변수에 담기
  };

  return {
    post,
    commentList,
    handleUserLike,
    userLike,
    totalLikes,
    totalComments,
    replyBtnSeq,
    handleReplyBtn,
  };
};

export default usePostDetail;
