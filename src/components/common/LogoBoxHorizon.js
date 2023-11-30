import styled from "styled-components";
import LogoImg from "../../assets/img/logo/logo002.png";

const StyledLogoBox = styled.button`
display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px
    margin: auto;
    box-sizing: border-box;
    border: none;
    background-color: transparent; // 버튼 기본 색상 가림
    cursor: pointer; // 커서 설정
`;

const LogoBoxHorizon = ({ onClick }) => {
  return (
    <StyledLogoBox onClick={onClick}>
      <img
        src={LogoImg}
        width="60"
        height="60"
        alt="logo"
        title="ALLABO"
        align="left"
      ></img>
      <div style={{ opacity: 0 }}> iii</div>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "Inter",
          color: "rgb(90, 90, 90)",
          fontWeight: "bold",
        }}
      >
        ALLABO
      </div>
    </StyledLogoBox>
  );
};

export default LogoBoxHorizon;
