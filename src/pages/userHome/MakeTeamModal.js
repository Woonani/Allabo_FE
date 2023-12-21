import React from "react";
import ModalBackground from "../../components/layout/ModalBackground";
import ModalContainer from "../../components/layout/ModalContainer";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";
import LogoBox from "../../components/common/LogoBox";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Text from "../../components/common/Text";
import DropdownInput from "../../components/common/DropdownInput";

const GridContainerRow = styled.div`
  display: grid;
  grid-template-rows: 10fr 45fr 5fr 30fr 10fr;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
`;
const GridContainerColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 20px 40px;
`;
const ColumnDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const ColumnDiv3 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 20px 40px;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MakeTeamModal = ({
  isModalOpen,
  closeModal,
  teamForm,
  handleInputChange,
  handleMakeTeam,
}) => {
  return (
    <div style={{ display: isModalOpen ? "block" : "none" }}>
      <ModalBackground />
      <ModalContainer>
        <GridContainerRow>
          <Title
            text={"새로운 워크스페이스 생성하기"}
            justifyContent={"left"}
          />
          <GridContainerColumn>
            <ColumnDiv2 style={{ backgroundColor: "lightGrey" }}>
              <LogoBox />
            </ColumnDiv2>
            <ColumnDiv>
              <Text text={"워크스페이스 명"} />
              <FloatingLabelInput
                name="teamName"
                type="text"
                value={teamForm.teamName}
                onChange={handleInputChange}
                label="팀의 특징을 담아 작성해주세요."
                width="100%"
                height="45px"
              />
              <br />
              <Text text={"워크스페이스 소개"} />
              <FloatingLabelInput
                name="description"
                type="text"
                value={teamForm.description}
                onChange={handleInputChange}
                label="팀의 목적을 간단히 설명해 주세요."
                width="100%"
                height="80px"
              />
              <br />
              <Text text={"팀에서 사용할 이름"} />
              <FloatingLabelInput
                name="nick"
                type="text"
                value={teamForm.nick}
                onChange={handleInputChange}
                label="미작성 히 사용자 이름으로 표시됩니다."
                width="100%"
                height="45px"
              />
            </ColumnDiv>
          </GridContainerColumn>
          <Text text={"팀원초대"} margin="10px" />

          <GridContainerColumn>
            <ColumnDiv3>팀원없이 워크스페이스를 생성할 수 있습니다.</ColumnDiv3>
            <ColumnDiv3>
              <DropdownInput label="팀원 이메일로 검색" />
            </ColumnDiv3>
          </GridContainerColumn>
          <RowDiv>
            <Button
              text={"팀 생성"}
              margin={"20px"}
              width={"200px"}
              onClick={handleMakeTeam}
            />
            <Button
              text={"생성 취소"}
              margin={"20px"}
              backgroundcolor="#f35d5dde"
              width={"200px"}
              onClick={closeModal}
            />
          </RowDiv>
        </GridContainerRow>
      </ModalContainer>
    </div>
  );
};

export default MakeTeamModal;
