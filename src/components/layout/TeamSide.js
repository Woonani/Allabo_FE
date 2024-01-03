import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useIsLoginState } from "../../context/IsLoginContext";
import { useTeamListState } from "../../context/teamListContext";
import BasicImg from "../../assets/img/common/BasicTeam.png";
import AddBtn from "../../assets/img/common/AddBtn.png";
import SquareButton from "../common/SquareButton";
import { setLocalStorage } from "../../utils/LocalStorage";

const StyledFixedSide = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 70px;
  height: 100%;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px black;
  z-index: 2; /* 높은 우선순위를 지정 */
  color: white;
  padding: 10px 13px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  margin: 8px 0px;
  &:hover {
    background-color: hsl(120deg 100% 50% / 40%);
  }
`;

const HighLight = styled.div`
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  opacity: ${(props) => props.$tag};
`;

const TeamSide = () => {
  const isLogin = useIsLoginState();
  const { state, actions } = useTeamListState();
  const navigate = useNavigate();
  // console.log("teamListCon", state.teamListCon);
  return (
    <>
      {isLogin ? (
        <StyledFixedSide>
          {state.teamListCon.length > 0 ? (
            state.teamListCon.map((item, idx) => {
              let tag =
                item.teamSeq == state.currentTeam.teamSeq ? "60%" : "100%";
              // console.log("seq, tag ", item.teamSeq, " / ", tag);

              return (
                <Card key={idx}>
                  <HighLight $tag={tag}>
                    <SquareButton
                      width="45px"
                      height="45px"
                      imgUrl={BasicImg}
                      handleClick={() => {
                        setLocalStorage("now-team", item); //클릭시 스토리지 값 변경
                        actions.setCurrentTeam(item); // 스토리지에 바뀐 값 불러오는 역할
                        navigate("/team");
                      }}
                    />
                  </HighLight>
                </Card>
              );
            })
          ) : (
            <SquareButton
              width="40px"
              height="40px"
              imgUrl={AddBtn}
              // handleClick={() => {
              // setIsModalOpen(true);
              // navigate("/");
              // }}
            />
          )}
        </StyledFixedSide>
      ) : null}
    </>
  );
};
export default TeamSide;
