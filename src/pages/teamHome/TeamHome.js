import React from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import NameCard from "../../components/common/NameCard";
import BasicImg from "../../assets/img/common/BasicTeam.png";
import SquareButton from "../../components/common/SquareButton";
import Title from "../../components/common/Title";
import Text from "../../components/common/Text";
import CardContainer from "../../components/layout/CardContainer";
import useTeamHome from "../../hooks/useTeamHome";
import { useTeamListState } from "../../context/teamListContext";

const GridBoxRow = styled.div`
  // background-color: lightGrey;
  display: grid;
  grid-template-rows: 150px 550px;
  width: 1000px;
  height: 300px;
  min-width: 900px;
  min-height: 650px;
`;
const GridBoxColumn = styled.div`
  // background-color: green;
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 1000px;
  height: 500px;
`;
// 아래 TopBox, LeftBox, RightBox는 layout 컴포너트 하나로 대체
const TopBox = styled.div`
  // background-color: yellow;
  margin: 15px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: space-between; //center;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
  align-content: center;
  align-items: center;
`;
const LeftBox = styled.div`
  // background-color: violet;
  margin: 15px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between; //center;
`;
const RightBox = styled.div`
  // background-color: pink;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between; //center;
`;

const TeamHome = () => {
  const { state } = useTeamListState();
  const { handleTeamInfo } = useTeamHome();
  return (
    <BasicFrame>
      {/* 메인보드(팀홈)입니다. */}
      <GridBoxRow>
        <TopBox>
          <SquareButton
            width="100px"
            height="100px"
            imgUrl={BasicImg}
            margin="20px"
          />
          <NameCard
            width="90%"
            height="50%"
            margin="10px"
            padding="20px"
            fontSize="30px"
            text={state.currentTeam.teamName}
          ></NameCard>
          <NameCard
            width="100%"
            height="50%"
            margin="10px"
            padding="20px"
            justifyContent="left"
            text={state.currentTeam.description}
          ></NameCard>
        </TopBox>
        <GridBoxColumn>
          <LeftBox>
            <Text text="멤버목록" margin="5px 15px" />

            <CardContainer margin="0px">안녕</CardContainer>
          </LeftBox>
          <RightBox>
            <Text text="게시판 공지" margin="5px 15px" />
            <CardContainer margin="0px">게시판 공지</CardContainer>
            <br />
            <Text text="다가오는 일정" margin="5px 15px" />
            <CardContainer margin="0px">다가오는 일정</CardContainer>
          </RightBox>
        </GridBoxColumn>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default TeamHome;
