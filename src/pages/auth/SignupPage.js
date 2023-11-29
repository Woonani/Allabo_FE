import React from "react";
import Background from "../../components/layout/Background";
import CenteredContainer from "../../components/layout/CenteredContainer";
import LogoBoxHorizon from "../../components/common/LogoBoxHorizon";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

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
          // value={}
          // onChange={}
        />
        <FloatingLabelInput
          label="비밀번호"
          // value={}
          // onChange={}
        />
        <FloatingLabelInput
          label="비밀번호 확인"
          // value={}
          // onChange={}
        />
        <FloatingLabelInput
          label="이름"
          // value={}
          // onChange={}
        />
        <FloatingLabelInput
          label="회사명"
          // value={}
          // onChange={}
        />
        <Button
          text="회원가입하기"
          backgroundcolor="rgb(95, 95, 95)"
          onClick={() => navigate("/signup")}
        />
      </CenteredContainer>
    </Background>
  );
};

export default SignupPage;
