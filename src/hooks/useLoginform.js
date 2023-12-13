import axios from "axios";
import { setCookie, getCookie } from "../utils/Cookie";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IsLoginContext } from "../context/IsLoginContext";

const useLoginform = () => {
  const { setIsLogin } = useContext(IsLoginContext); // isLoginContext 구독
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
    try {
      const response = await axios.post("/api/auth/login", formData);
      // console.log(response);
      if (response.statusText == "OK") {
        if (response.data == 1) {
          // input 비우기 추가
          return alert("아이디와 비밀번호를 확인해 주세요.");
        }
        console.log("loginuser : ", response.data.loginuser);

        setCookie("token", response.data.token, {
          path: "/", // 경로 /userhome에서 실험해보기
          maxAge: 1000 * 60 * 60 * 24 * 2, // maxAge 서버에서 설정한 거랑 다른건가?
        });
        setCookie("userId", response.data.loginuser.email, {
          path: "/",
          maxAge: 1000 * 60 * 60 * 24 * 2,
        });
        setCookie("username", response.data.loginuser.name, {
          path: "/",
          maxAge: 1000 * 60 * 60 * 24 * 2,
        });
        // sessionStorage.setItem("userId", response.data.loginuser.email);
        // sessionStorage.setItem("token", response.data.token); // context에서 토큰은 쿠키에서 불러와 사용

        navigate("/home");

        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
      alert("ERROR" + error.message + "\n처음부터 다시 진행해주세요.");
      navigate("/");
    }
  };

  return { formData, handleMainPage, handleInputChange, handleLogin };
};

export default useLoginform;
