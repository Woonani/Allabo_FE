import React from "react";
import Background from "../../components/layout/Background";
import CenteredContainer from "../../components/layout/CenteredContainer";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import Link from "../../components/common/Link";
import useLoginform from "../../hooks/useLoginform";

const LoginPage = () => {
  const { formData, handleMainPage, handleInputChange, handleLogin } =
    useLoginform();

  return (
    <Background>
      <CenteredContainer>
        <LogoBoxHorizon onClick={handleMainPage} />
        <br />
        <br />
        <br />

        <FloatingLabelInput
          label="이메일"
          name="userId"
          type="text"
          value={formData.userId}
          onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="비밀번호"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button text="로그인" onClick={handleLogin} />

        <Link
          text="계정이 없으신가요?"
          link="회원가입 페이지로 이동"
          url="/signup"
        />
      </CenteredContainer>
    </Background>
  );
};

export default LoginPage;
