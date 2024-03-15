import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getLocalStorage } from "../utils/LocalStorage";
import axios from "axios";
import { getCookie } from "../utils/Cookie";
import { AlertTimer } from "../components/common/AlertTimer";
import { AlertToast } from "../components/common/AlertToast";

const usePostEditing = () => {
  const tagList = ["일반", "공지", "과제"]; // 태그 생성 기능 추가 후에는 불러오는 값으로 변경 하기

  // 글수정 취소하고 게시판 목록으로 이동
  const navigate = useNavigate();
  // const userId = getCookie("userId");

  //QuillValue
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);
  const initPostEditForm = {
    postSeq: "",
    tag: "",
    title: "",
    content: content,
    fileSeq: "",
    // 아래는 수정이 일어나지 않는 항목
    // createdAt: "",
    // updatedAt: "",
    // viewCount: "",
    // utSeq: getLocalStorage("now-team").utSeq,
  };
  const [postEditForm, setPostEditForm] = useState(initPostEditForm);

  useEffect(() => {
    handlePostEdit();
  }, []);

  useEffect(() => {
    // setPostEditForm({ ...postEditForm });
    console.log("postEditForm값 변경 : ", postEditForm);
  }, [postEditForm]);

  useEffect(() => {
    setPostEditForm({ ...postEditForm, content: content });
    console.log("content 변경 : ", content);
  }, [content]);

  // 수정할 글 정보 불러오기
  const handlePostEdit = async () => {
    const postSeq = getLocalStorage("postSeq");
    try {
      const response = await axios.get(`/api/board/post/editing/${postSeq}`);
      console.log("handlePostEdit - response.data: ", response.data);
      setContent(response.data.content);
      setPostEditForm({ ...response.data });
    } catch (error) {
      console.log("handlePostEdit - error: ", error);
    }
  };

  // 수정한 글 등록 함수
  const handlePostEditForm = async () => {
    console.log("handlePostEditForm-postEditForm 제출 : ", postEditForm);
    if (checkValidate(postEditForm)) {
      try {
        const response = await axios.put(
          `/api/board/post/editing`,
          postEditForm
        );
        console.log("handlePostEditForm-response : ", response);
        if (response.statusText == "OK") {
          AlertTimer("수정완료", "", "success", 2000);
          navigate("/board/detail");
        } else {
          AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
        }
      } catch (error) {
        console.log("error : ", error);
      }
    } else {
      console.log("글 등록 실패");
    }
  };

  const checkValidate = (postEditForm) => {
    if (postEditForm.tag == "") {
      AlertToast("warning", "태그를 선택해 주세요.");
      return false;
    } else if (postEditForm.title == "") {
      AlertToast("warning", "글 제목을 입력해주세요.");
      return false;
    } else if (contentLength < 5) {
      AlertToast("warning", "내용은 최소 5글자 이상 작성해야 합니다.");
      return false;
    } else if (postEditForm.utSeq == "") {
      AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
      navigate("/detail");
      return false;
    } else {
      return true;
    }
  };

  const handleInputChangeA = (e) => {
    // console.log("작성하는 글 : ", e.target.value);
    setPostEditForm({ ...postEditForm, [e.target.name]: e.target.value });
  };

  const handleCancelEditing = () => {
    Swal.fire({
      icon: "question",
      title: "글 수정을 취소하시겠어요?",
      text: "수정사항이 저장되지 않습니다.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/board/detail");
      }
    });
  };

  // Quill moules
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  // Quill content 값, 글자길이 onChange 함수    _ 글자수 제한 미완성
  const handleQuillChange = (content, delta, source, editor) => {
    const length = editor.getText().trim().length;
    setContentLength(length);
    setContent(content);
    // console.log("editor.getText() ", editor.getText().trim().length);
    // console.log("editor.Length() ", editor.getLength()); // 위가 나음
  };

  return {
    tagList,
    postEditForm,
    content,
    handleInputChangeA,
    handleCancelEditing,
    handlePostEditForm,
    modules,
    handleQuillChange,
  };
};

export default usePostEditing;
