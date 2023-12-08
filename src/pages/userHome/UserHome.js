import React, { useState } from "react";
import styled from "styled-components";
import SquareButton from "../../components/common/SquareButton";
import AddBtn from "../../assets/img/common/AddBtn.png";
import TeamModal from "../../components/TeamModal";

const StyledContainer = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: var(--color-opacity-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
  padding: 30px;
`;

const StyledOneline = styled.div`
  display: flex;
  justify-content: right;
  width: 70vw;
`;

const StyledTitle = styled.h1`
  font-family: NanumSquareRound Bold;
  font-size: 30px;
  width: 70vw;
  line-height: 1.3;
`;

const StyledSubTitle = styled.h1`
  font-family: NanumSquareRound Regular;
  font-size: 20px;
  line-height: 1.3;
`;

const UserHome = (userNick) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("모달열기");
    return setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <StyledTitle>
        반가워요! {{ userNick } && "USER님"} <br />
        워크스페이스를 생성하여 협업에 참여해보세요!
        <br />
      </StyledTitle>
      <br />
      <br />
      <br />
      <StyledOneline>
        <StyledSubTitle>워크스페이스 생성하기</StyledSubTitle>
        &nbsp;
        <SquareButton
          openModal={openModal}
          imgUrl={AddBtn}
          opacity="0%"
          width="30px"
          height="30px"
        />
        <TeamModal isOpen={isModalOpen} closeModal={closeModal} />
      </StyledOneline>
      <StyledContainer>
        {{ userNick } && (
          <StyledSubTitle>
            "현재 참여중인 워크스페이스가 없습니다."
          </StyledSubTitle>
        )}
      </StyledContainer>
    </div>
  );
};

export default UserHome;
