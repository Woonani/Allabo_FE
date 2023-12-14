import React from "react";
import CenteredContainer from "../../components/layout/CenteredContainer";
import ModalBackground from "../../components/layout/ModalBackground";
import ModalContainer from "../../components/layout/ModalContainer";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";
import SimpleButton from "../../components/common/SimpleButton";

const GridContainerRow = styled.div`
  display: grid;
  grid-template-rows: 10fr 45fr 35fr 10fr;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;
const GridContainerColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MakeTeamModal = ({ isOpen, closeModal }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <ModalBackground />
      <ModalContainer>
        <GridContainerRow>
          <Title
            text={"새로운 워크스페이스 생성하기"}
            justifyContent={"left"}
          />
          <GridContainerColumn>
            <div>팀사진</div>
            <div>팀인풋</div>
          </GridContainerColumn>
          <GridContainerColumn>
            <div>멤버리스트</div>
            <div>초대인풋</div>
          </GridContainerColumn>
          <CenteredDiv>
            <Button margin={"0px"} />
            {/* <SimpleButton /> */}
          </CenteredDiv>
        </GridContainerRow>
      </ModalContainer>
    </div>
  );
};

export default MakeTeamModal;
