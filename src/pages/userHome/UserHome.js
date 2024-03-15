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
import { useTeamListState } from "../../context/TeamListContext";

// userHome 용 BasicFrame
const BasicContainer = styled.div`
  margin: 0px;
  box-sizing: border-box;
  font: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed; // nav 바 밑으로 들어가지 않도록 고정
  top: 60px; //80px; //
  left: 70px; //80px; //
  width: calc(100% - 70px);
  height: calc(100% - 60px);
  min-width: 950px;
  min-height: 700px; //650px;
`;
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
  justify-content: space-between;
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
  align-items: center;
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

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 150px;
`;

const UserHome = () => {
  const { state, actions } = useTeamListState();

  const {
    isModalOpen,
    setIsModalOpen,
    userName,
    // teamList,
    teamListCount,
    teamForm,
    handleInputChange,
    handleMakeTeam,
    handleTeamPage,
    handleSearchMember,
    searchList,
    invitees,
    setInvitees,
    handleTeamDelete,
    handleTeamLeave,
  } = useUserHome();
  return (
    <BasicContainer>
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
          handleSearchMember={handleSearchMember}
          searchList={searchList}
          invitees={invitees}
          setInvitees={setInvitees}
        />
      </StyledOneline>
      {!teamListCount || (
        <StyledContainer>
          {state.teamList.map((team, idx) => {
            // {teamList.map((team, idx) => {
            // console.log("team 카드 : ", team);
            return (
              <Card key={team.teamSeq}>
                <SquareButton
                  width="100px"
                  height="100px"
                  margin="10px 0px 0px 0px"
                  imgUrl={BasicImg}
                  handleClick={() => handleTeamPage(team)}
                />
                <Title text={team.teamName} fontSize={"25px"} />

                <Text
                  text={team.description}
                  justifyContent="center"
                  fontSize="15px"
                  width="150px"
                  height="25px"
                />
                <BottomContainer>
                  {team.role == 1 ? (
                    <Title text={"👑 " + team.nick} fontSize="15px" />
                  ) : (
                    <Title text={team.nick} fontSize="15px" />
                  )}
                  {team.role == 1 ? (
                    <Text
                      text={"팀 삭제"}
                      fontSize="15px"
                      color="red"
                      hoverColor="red"
                      textDecoration="underline"
                      cursor="pointer"
                      onClick={() => handleTeamDelete(team.teamSeq, idx)}
                    />
                  ) : (
                    <Text
                      text={"팀 떠나기"}
                      fontSize="15px"
                      color="green"
                      hoverColor="red"
                      textDecoration="underline"
                      cursor="pointer"
                      onClick={() => handleTeamLeave(team.utSeq, idx)}
                      // onClick={() => console.log("서비스 준비 중")}
                    />
                  )}
                </BottomContainer>
              </Card>
            );
          })}
        </StyledContainer>
      )}
    </BasicContainer>
  );
};

export default UserHome;
