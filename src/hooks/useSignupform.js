import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTimer } from "../components/common/AlertTimer";

const useSignupform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    cnfrmPassword: "",
    name: "",
    companyName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/auth/signup", formData);
      console.log(response);
      if (response.data == 1) {
        AlertTimer(
          formData.name + "님 환영합니다!",
          "로그인 페이지로 이동합니다.",
          "success",
          2000
        );
        navigate("/login");
      } else {
        AlertTimer("ERROR", "처음부터 다시 진행해주세요.", "warning", 2000);
        // alert("ERROR\n처음부터 다시 진행해주세요.");
      }
    } catch (error) {
      console.log(error);
      AlertTimer(
        "ERROR",
        error.message + "\n처음부터 다시 진행해주세요.",
        "warning",
        2000
      );
      // alert("ERROR" + error.message + "\n처음부터 다시 진행해주세요.");
      navigate("/");
    }
  };

  return { formData, handleInputChange, handleSignup };
};

export default useSignupform;
