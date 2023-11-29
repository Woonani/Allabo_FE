import React from "react";
import CenteredContainer from "../components/layout/CenteredContainer";
import Background from "../components/layout/Background";
import LogoBox from "../components/common/LogoBox";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <CenteredContainer>
        <LogoBox />
        {/* 메인페이지 입니다.*/}
        <br />
        <br />
        <br />
        <Button text="로그인하기" onClick={() => navigate("/login")} />
        <Button
          text="회원가입하기"
          backgroundcolor="rgb(95, 95, 95)"
          onClick={() => navigate("/signup")}
        />
      </CenteredContainer>
    </Background>
  );
};

export default MainPage;
