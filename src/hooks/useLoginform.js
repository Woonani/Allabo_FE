import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useLoginform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleMainPage = (e) => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    const response = await axios.post("/api/auth/login", formData);
    // console.log(response);
    try {
      if (response.data == 1) {
        navigate("/home");
      } else {
        alert("로그인 실패! \n메인으로 이동합니다.");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("ERROR" + error.message + "\n처음부터 다시 진행해주세요.");
      navigate("/login");
    }
  };

  return { formData, handleMainPage, handleInputChange, handleLogin };
};

export default useLoginform;
