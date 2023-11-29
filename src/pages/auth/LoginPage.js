import React from "react";
import Background from "../../components/layout/Background";
import CenteredContainer from "../../components/layout/CenteredContainer";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import Link from "../../components/common/Link";
import useLoginform from "../../hooks/useLoginform";

const LoginPage = () => {
  // const { formData, handleInputChange, handleLogin } = useLoginform();

  return (
    <Background>
      <CenteredContainer>
        <LogoBoxHorizon />
        <br />
        <br />
        <br />

        <FloatingLabelInput
          label="이메일"
          name="email" // input 태그의 name 속성 값 email
          type="text"
          // value={formData.email} // state의 이름(키) email
          // onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="비밀번호"
          name="password"
          type="password"
          // value={formData.password}
          // onChange={handleInputChange}
        />

        {/* <Button text="로그인" onClick={handleLogin} /> */}
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
