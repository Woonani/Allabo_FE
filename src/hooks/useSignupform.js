import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignupform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
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
        alert(
          formData.name +
            "님 환영합니다! \n회원가입이 완료되어 로그인 페이지로 이동합니다."
        );
        navigate("/login");
      } else {
        alert("ERROR\n처음부터 다시 진행해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("ERRPR" + error.message + "\n처음부터 다시 진행해주세요.");
      navigate("/");
    }
  };

  return { formData, handleInputChange, handleSignup };
};

export default useSignupform;
