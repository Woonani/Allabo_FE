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
    console.log(response);
    if (response.data == 1) {
      navigate("/home");
    } else {
      alert("ERROR\n메인으로 이동합니다..");
      navigate("/");
    }
  };

  return { formData, handleMainPage, handleInputChange, handleLogin };
};

export default useLoginform;
