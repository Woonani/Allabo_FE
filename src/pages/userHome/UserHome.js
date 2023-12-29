import React from "react";
import styled from "styled-components";
import SquareButton from "../../components/common/SquareButton";
import AddBtn from "../../assets/img/common/AddBtn.png";
import MakeTeamModal from "./MakeTeamModal";
import Text from "../../components/common/Text";
import BasicImg from "../../assets/img/common/BasicTeam.png";
import Title from "../../components/common/Title";
import useUserHome from "../../hooks/useUserHome";
import BasicFrame from "../../components/layout/BasicFrame";

const StyledContainer = styled.div`
  width: 70vw; //830,430
  height: 50vh;
  min-width: 830px;
  min-height: 430px;
  background-color: var(--color-opacity-blue);
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 10px;
  border-radius: 15px;
  padding: 30px;
  overflow-y: auto;
  white-space: nowrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  height: 300px;
  min-width: 200px; // width로 하면 왜인지 안먹음..
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const StyledOneline = styled.div`
  display: flex;
  justify-content: right;
  width: 70vw;
  min-width: 830px;
`;

const StyledTitle = styled.h1`
  font-family: NanumSquareRound Bold;
  font-size: 30px;
  width: 70vw;
  min-width: 830px;
  line-height: 1.3;
`;

const StyledSubTitle = styled.h1`
  font-family: NanumSquareRound Regular;
  font-size: 20px;
  line-height: 1.3;
`;

const UserHome = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    userName,
    teamList,
    teamListCount,
    teamForm,
    handleInputChange,
    handleMakeTeam,
    handleTeamPage,
  } = useUserHome();

  return (
    <BasicFrame>
      <StyledTitle>
        반가워요! {userName} 님 <br />
        {teamListCount == 0
          ? "팀 스페이스를 생성하여 협업에 참여해보세요!"
          : `현재 참여중인 팀 스페이스가 ${teamListCount} 개 입니다.`}
        <br />
      </StyledTitle>
      <br />
      <br />
      <br />
      <StyledOneline>
        <StyledSubTitle>워크스페이스 생성하기</StyledSubTitle>
        &nbsp;
        <SquareButton
          handleClick={() => setIsModalOpen(true)}
          imgUrl={AddBtn}
          opacity="0%"
          width="30px"
          height="30px"
        />
        <MakeTeamModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)} // 추천
          teamForm={teamForm}
          // teamForm 은 오류 >> 이거 때문에 초기화한 팀form 값이 안넘어감
          handleInputChange={handleInputChange}
          handleMakeTeam={handleMakeTeam}
        />
      </StyledOneline>
      {!teamListCount || (
        <StyledContainer>
          {teamList.map((team, idx) => (
            <Card key={team.teamSeq}>
              <Text text={"no." + (idx + 1)} />
              <br />
              <SquareButton
                width="100px"
                height="100px"
                imgUrl={BasicImg}
                handleClick={() => handleTeamPage(team)}
              />
              <br />
              <Title text={team.teamName} />
              <br />
              <Text text={team.nick} />
              <br />
              <Text text={team.teamSeq} />
            </Card>
          ))}
        </StyledContainer>
      )}
    </BasicFrame>
  );
};

export default UserHome;
