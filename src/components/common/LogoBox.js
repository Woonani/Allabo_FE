import styled from "styled-components";
import LogoImg from "../../assets/img/logo/logo002.png";

const StyledLogoBox = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px
    margin: auto;
    box-sizing: border-box;
`;

const LogoBox = () => {
  return (
    <StyledLogoBox>
      <img
        src={LogoImg}
        width="200"
        height="200"
        alt="logo"
        title="ALLABO"
        align="left"
      ></img>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "Inter",
          color: "rgb(90, 90, 90)",
          // fontFamily: "NanumSquareRound Extra Bold",
          fontWeight: "bold",
        }}
      >
        ALLABO
      </div>
    </StyledLogoBox>
  );
};

export default LogoBox;
