import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useLoginform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleMainPage = (e) => {
    // 작동안됨
    console.log("클릭됨");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const [name, value] = e.target;
    // const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    // setFormData({...formData})
    // setFormData()
  };
  const handleLogin = async () => {
    const response = await axios.post();
  };

  return { formData, handleMainPage, handleInputChange, handleLogin };
};

export default useLoginform;
