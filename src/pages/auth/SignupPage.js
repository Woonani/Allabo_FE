import React from "react";
import Background from "../../components/layout/Background";
import CenteredContainer from "../../components/layout/CenteredContainer";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import Link from "../../components/common/Link";
import useSignupform from "../../hooks/useSignupform";

const SignupPage = () => {
  const { formData, handleInputChange, handleSignup } = useSignupform();

  // onBlur, // 커서 인풋 태그 밖으로 꺼냈을 때 발생하는 이벤트
  // ...props

  return (
    <Background>
      <CenteredContainer>
        {/* <LogoBox /> */}
        <LogoBoxHorizon />
        <br />
        <br />
        <br />

        <FloatingLabelInput
          label="이메일"
          name="email" // input 태그의 name 속성 값 email
          type="text"
          value={formData.email} // state의 이름(키) email
          onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="비밀번호"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="비밀번호 확인"
          name="cnfrmPassword"
          type="password"
          value={formData.cnfrmPassword}
          onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="이름"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FloatingLabelInput
          label="회사명"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <Button
          text="회원가입하기"
          backgroundcolor="rgb(95, 95, 95)"
          onClick={handleSignup}
        />
        <Link
          text="이미 계정이 있으신가요?"
          link="로그인페이지로 이동"
          url="/login"
        />
      </CenteredContainer>
    </Background>
  );
};

export default SignupPage;
