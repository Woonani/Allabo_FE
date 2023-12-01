import styled from "styled-components";
import LogoImg from "../../assets/img/logo/logo002.png";

const StyledLogoBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border: none;
  background-color: transparent; // 버튼 기본 색상 가림
  cursor: pointer; // 커서 설정
`;

const StyledImg = styled.img`
  width: ${(props) => props.$width || "60px"};
  height: ${(props) => props.$height || "60px"};
  alt="logo";
  title="ALLABO";
  align="left";
  
`;

const StyledFont = styled.div`
  font-size: ${(props) => props.$fontSize || "50px"};
  font-family: "Inter";
  color: ${(props) => props.$color || "rgb(90, 90, 90)"};
  font-weight: bold;
  letter-spacing: ${(props) => props.$space || "none"};
`;

const LogoBoxHorizon = ({
  onClick,
  ...props // props에 스타일 넣음 (logoImgSize, fontSize, fontColor, space)
}) => {
  return (
    <StyledLogoBox onClick={onClick}>
      <StyledImg
        src={LogoImg}
        $width={props.logoImgSize}
        $height={props.logoImgSize}
      ></StyledImg>
      <div style={{ opacity: 0 }}> iii</div>
      <StyledFont
        $fontSize={props.fontSize}
        $color={props.fontColor}
        $space={props.space}
      >
        ALLABO
      </StyledFont>
    </StyledLogoBox>
  );
};

export default LogoBoxHorizon;
