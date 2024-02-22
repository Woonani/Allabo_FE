import React from "react";
import BasicFrame from "../../components/layout/BasicFrame";
import styled from "styled-components";
import NameCard from "../../components/common/NameCard";
import BasicImg from "../../assets/img/common/BasicTeam.png";
import AlertImg from "../../assets/img/common/Alert.png";
import NoticeImg from "../../assets/img/common/Notice.png";
import UserImg from "../../assets/img/common/User.png";
import SquareButton from "../../components/common/SquareButton";
import Text from "../../components/common/Text";
import CardContainer from "../../components/layout/CardContainer";
import useTeamHome from "../../hooks/useTeamHome";
import { useTeamListState } from "../../context/TeamListContext";
import ProfileContainer from "../../components/common/ProfileContainer";
import ProfileContainer2 from "../../components/common/ProfileContainer2";

const GridBoxRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  // height: 300px;
  min-height: 650px;
  // background-color: lightGrey; // 레이아웃 확인용
`;
const GridBoxColumn = styled.div`
  // background-color: green;
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
`;

const TopBox = styled.div`
  margin: 15px;
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
  // align-items: flex-start;
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
  const { currentTeam } = useTeamListState().state;
  const { handleTeamInfo, teamHomeInfo } = useTeamHome();
  // console.log("TeamHome - teamHomeInfo: ", teamHomeInfo);

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
            fontSize="25px"
            text={currentTeam.teamName}
          ></NameCard>
          <NameCard
            width="100%"
            height="50%"
            margin="10px"
            padding="20px"
            justifyContent="left"
            text={currentTeam.description}
          ></NameCard>
        </TopBox>
        <GridBoxColumn>
          <LeftBox>
            <Text text="멤버목록" margin="5px 15px" />
            <CardContainer margin="0px">
              {teamHomeInfo.memberList.length > 0 ? (
                teamHomeInfo.memberList.map((item, idx) => {
                  // console.log(item);
                  return (
                    <ProfileContainer
                      key={item.userId}
                      justifyContent="flex-start"
                      imgSrc={UserImg}
                      imgAlt={item.nick}
                      imgWidth="35px"
                      imgHeight="35px"
                      imgBoxShadow="0.1px 0.1px 3px 0.1px grey"
                      text={item.nick}
                      // textList={[item.nick]}
                      frontSpaceWidth="20px"
                      backSpaceWidth="0px"
                    />
                  );
                })
              ) : (
                <div>멤버를 초대해주세요</div>
              )}
            </CardContainer>
          </LeftBox>
          <RightBox>
            <Text text="게시판 공지" margin="5px 15px" />
            <CardContainer margin="0px">
              {/* {teamHomeInfo.memberList.length > 0 ? (
                teamHomeInfo.memberList.map((item, idx) => {
                  // console.log(item);
                  return (
                      <ProfileContainer2
                        key={item.userId}
                        imgSrc={NoticeImg}
                        imgAlt={item.nick}
                        imgWidth="20px"
                        imgHeight="20px"
                        text={""}
                        textList={[
                          item.teamSeq,
                          "가나다라마바사아자차카타파",
                          item.nick,
                        ]}
                        frontSpaceWidth="40px"
                        backSpaceWidth="20px"
                      /> 
                  );
                })
              ) : (
                <div>게시판 공지</div>
              )} */}
            </CardContainer>
            <br />
            <Text text="다가오는 일정" margin="5px 15px" />
            <CardContainer margin="0px">
              {/* {teamHomeInfo.memberList.length > 0 ? (
                teamHomeInfo.memberList.map((item, idx) => {
                  // console.log(item);
                  return (
                    <ProfileContainer2
                      key={item.userId}
                      imgSrc={AlertImg}
                      imgAlt={item.nick}
                      imgWidth="20px"
                      imgHeight="20px"
                      text={""}
                      textList={[
                        item.teamSeq,
                        "가나다라마바사아자차카타파",
                        item.nick,
                      ]}
                      frontSpaceWidth="40px"
                      backSpaceWidth="20px"
                    />
                  );
                })
              ) : (
                <div>다가오는 일정</div>
              )} */}
            </CardContainer>
          </RightBox>
        </GridBoxColumn>
      </GridBoxRow>
    </BasicFrame>
  );
};

export default TeamHome;
