import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { AlertTimer } from "../components/common/AlertTimer";
import { AlertToast } from "../components/common/AlertToast";
import Swal from "sweetalert2";

const usePostWriting = () => {
  const tagList = ["일반", "공지", "과제"]; // 태그 생성 기능 추가 후에는 불러오는 값으로 변경 하기
  const navigate = useNavigate();

  //QuillValue
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);

  const initPostForm = {
    postSeq: "",
    tag: "",
    title: "",
    content: content,
    createdAt: "",
    updatedAt: "",
    viewCount: "",
    fileSeq: "",
    utSeq: getLocalStorage("now-team").utSeq,
  };
  const [postForm, setPostForm] = useState(initPostForm);

  useEffect(() => {
    // 바로 반영시키기위함?
    // console.log("useEffect - postForm: ", postForm);
  }, [postForm]);

  useEffect(() => {
    // console.log("useEffect - content: ", content);
    if (contentLength > 1000) {
      AlertToast("warning", "글자수를 초과했습니다.");
    } else {
      setPostForm({ ...postForm, content: content });
    }
  }, [contentLength]);

  // 글 등록 함수
  const handlePostForm = async () => {
    console.log("postForm 제출 - ", postForm);
    if (checkValidate(postForm)) {
      try {
        const response = await axios.post(`/api/board/post/writing`, postForm);
        console.log("response : ", response);
        if (response.statusText == "OK") {
          // 그냥 글detail 보여줘...
          //현재글번호 state에 적어서 페이지 보내기
          AlertTimer("등록완료", "", "success", 2000);
          setLocalStorage("postSeq", response.data.postSeq);
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

  const checkValidate = (postForm) => {
    if (postForm.tag == "") {
      AlertToast("warning", "태그를 선택해 주세요.");
      return false;
    } else if (postForm.title == "") {
      AlertToast("warning", "글 제목을 입력해주세요.");
      return false;
    } else if (contentLength < 5) {
      AlertToast("warning", "내용은 최소 5글자 이상 작성해야 합니다.");
      return false;
    } else if (postForm.utSeq == "") {
      AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
      navigate("/detail");
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (e) => {
    console.log("e.target.value : ", e.target.value);
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
    console.log("handleInputChange - postForm : ", postForm);
  };

  // 글작성 취소하고 게시판 목록으로 이동
  const handleCancelWriting = () => {
    Swal.fire({
      icon: "question",
      title: "글 작성을 취소하시겠어요?",
      text: "작성중이던 글은 저장되지 않습니다.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/board");
      }
    });
  };

  // Quill moules
  /**
   * module은 React Quill의 기능을 특정한 방식으로 확장하거나 조정하는 데 사용됩니다.
     예를 들어, 이미지 업로드, 링크 삽입, 콘텐츠 저장 및 불러오기와 같은 작업을 수행하기 위해 모듈을 활용할 수 있습니다.
   // ["underline", "strike", "blockquote"],
    // bold, italic 은 scss에서 지정한 default inherit을 font, font-family : initial로 설정하는 걸로 해결
     */
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
    if (contentLength >= 1000) {
      // 글자수 제한 TEST는 10자로
      // console.log("총글자 ", content);
      // console.log("마지막글자 ", editor.getText().charAt(length - 1));
      const lastChar = editor.getText().charAt(length - 1); //마지막글자
      console.log(
        "제거대상 : ",
        lastChar,
        " 제거 : ",
        content.replace(lastChar, "")
      );
    } else {
      setContent(content);
      console.log("총글자 ", content);
    }
    // setContent(editor.getContents()); // 델타요소로 셋팅됨
    // console.log("editor.getContents() ", editor.getContents());
    console.log("editor.getText() ", editor.getText().trim().length);
    // console.log("editor.Length() ", editor.getLength()); // 위가 나음
  };

  return {
    tagList,
    postForm,
    setPostForm,
    handleInputChange,
    handlePostForm,
    handleCancelWriting,
    content,
    contentLength,
    modules,
    handleQuillChange,
  };
};

export default usePostWriting;
