import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SquareButton from "../../components/common/SquareButton";
import AddBtn from "../../assets/img/common/AddBtn.png";
import MakeTeamModal from "./MakeTeamModal";
import { getCookie } from "../../utils/Cookie";
import initHorizontalScroll from "../../utils/initHoriaontalScroll";
import Text from "../../components/common/Text";
import BasicImg from "../../assets/img/common/BasicTeam.png";
import Title from "../../components/common/Title";
import useUserHome from "../../hooks/useUserHome";

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

const UserHome = (userNick) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [countList, setCountList] = useState(0); // teamList 리렌더링을 위한 변수
  const userName = getCookie("userId");
  const { handleTeamList, handleTeamPage } = useUserHome();

  const openModal = () => {
    console.log("모달열기");
    return setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // 비동기 함수로 한번 감싸서 실행해야 promise pending이 풀린 데이터를 쓸 수 있음.
    const fetch = async () => {
      const data = await handleTeamList();
      setCountList(data.length);
      console.log(countList, data.length);
      setTeamList(data);
    };
    fetch();
    console.log("UserHome페이지 - teamList", teamList);
  }, [countList]);

  return (
    <div>
      <StyledTitle>
        반가워요! {userName} 님 <br />
        {countList == 0
          ? "팀 스페이스를 생성하여 협업에 참여해보세요!"
          : `현재 참여중인 팀 스페이스가 ${countList} 개 입니다.`}
        <br />
      </StyledTitle>
      <br />
      <br />
      <br />
      <StyledOneline>
        <StyledSubTitle>워크스페이스 생성하기</StyledSubTitle>
        &nbsp;
        <SquareButton
          handleClick={openModal}
          imgUrl={AddBtn}
          opacity="0%"
          width="30px"
          height="30px"
        />
        <MakeTeamModal isOpen={isModalOpen} closeModal={closeModal} />
      </StyledOneline>
      {!countList || (
        <StyledContainer>
          {teamList.map((team, idx) => (
            <Card key={team.teamId}>
              <Text text={"no." + (idx + 1)} />
              <br />
              <SquareButton
                width="100px"
                height="100px"
                imgUrl={BasicImg}
                handleClick={() => handleTeamPage(team.teamId)}
              />
              <br />
              <Title text={team.teamName} />
              <br />
              <Text text={team.nick} />
              <br />
              <Text text={team.teamId} />
            </Card>
          ))}
        </StyledContainer>
      )}
    </div>
  );
};

export default UserHome;
