import React, { useEffect } from "react";
import ModalBackground from "../../components/layout/ModalBackground";
import ModalContainer from "../../components/layout/ModalContainer";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";
import LogoBox from "../../components/common/LogoBox";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import Text from "../../components/common/Text";
import DropdownInput from "../../components/common/DropdownInput";
import BasicFrame from "../../components/layout/BasicFrame";
import TagButton from "../../components/common/TagButton";
import CloseBtn from "../../assets/img/common/CloseBtn3.png";

const ModalBox = styled.div`
  // ModalContainer(모달창)을 감싸는 박스. nav 바 밑으로 들어가는 것을 방지하기 위해 고정위치와 최소 사이즈를 설정함
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 70px;
  left: 80px;
  width: 90vw; // fixed 위치 때문에 100보다 작게 설정
  height: 90vh; // fixed 위치 때문에 100보다 작게 설정
  min-width: 700px;
  min-height: 670px;
`;

const GridRowBox = styled.div`
  display: grid;
  grid-template-rows: 2fr 6fr 1fr 4fr 2fr;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
`;
const GridColBox = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  width: 100%;
  height: 100%;
  padding: 10px;
  align-content: space-between;
  // align-items: center;
  align-items: start;
`;
const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 20px 0px 0px 0px;
  width: 300px;
  height: 300px;
`;
const InfoColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InfoRowBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 130px;
`;
const RowBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/** 팀원초대 오른쪽 열 : 초대자 리스트용 */
// 컨테이너로 감싸면 input width 일괄 조절 가능
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "40px"};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  min-height: 70px;
  // border: 1px solid red;
  overflow-y: auto;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "260px"};
  height: ${(props) => props.height || "40px"};
  padding: 5px 10px 5px 10px;
  border: 0.1px solid #ccc;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 20px;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    display: none;
  }
`;

const MakeTeamModal = ({
  isModalOpen,
  closeModal,
  teamForm,
  handleInputChange,
  handleMakeTeam,
  handleSearchMember,
  searchList,
  invitees,
  setInvitees,
}) => {
  return (
    <BasicFrame style={{ display: isModalOpen ? "block" : "none" }}>
      <ModalBackground />

      <ModalBox>
        <ModalContainer>
          <GridRowBox>
            <Title
              text={"새로운 워크스페이스 생성하기"}
              justifyContent={"left"}
            />
            <GridColBox>
              <ProfileImgBox style={{ backgroundColor: "lightGrey" }}>
                <LogoBox />
              </ProfileImgBox>
              <InfoColBox>
                <br />
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
                  label="미작성 시 아이디로 표시됩니다."
                  width="100%"
                  height="45px"
                />
              </InfoColBox>
            </GridColBox>
            <Text text={"팀원초대"} margin="10px" />

            <GridColBox>
              <InfoColBox>
                {/* 팀원초대 왼쪽 열 : 검색 */}
                <Container>
                  <StyledInput
                    placeholder=" "
                    onChange={(e) => handleSearchMember(e)}
                  />
                  <ListContainer>
                    {searchList.length > 0
                      ? searchList.map((item, idx) => {
                          const userId = item.userId;
                          const dupCheck = invitees.find((i) => i == userId);
                          // console.log("dupCheck : ", dupCheck);
                          const disabled = dupCheck == undefined ? false : true;
                          return (
                            <>
                              <TagButton
                                // key={idx}
                                text={userId}
                                btnText="초대"
                                btnWidth="40px"
                                btnHeight="20px"
                                onClick={() => {
                                  setInvitees([...invitees, userId]);
                                }}
                                disabled={disabled}
                                btnBoxShadow={"0.1px 0.1px 3px 0.1px grey"}
                              />
                            </>
                          );
                        })
                      : ""}
                  </ListContainer>
                </Container>
              </InfoColBox>
              <InfoRowBox>
                {/* 팀원초대 오른쪽 열 : 초대자 리스트 */}
                {invitees.length > 0
                  ? invitees.map((item, idx) => {
                      return (
                        <>
                          <TagButton
                            // key={idx}
                            text={item}
                            imgUrl={CloseBtn}
                            opacity="60%"
                            borderRadius="20px"
                            boxShadow="0.1px 0.1px 3px 0.1px grey"
                            margin="4px"
                            color="var(--color-primary-violet)"
                            onClick={() => {
                              // console.log("삭제전 ", invitees);
                              invitees.splice(idx, 1);
                              // console.log("삭제후 ", invitees);
                              setInvitees([...invitees]);
                            }}
                          />
                        </>
                      );
                    })
                  : "팀원없이 워크스페이스를 생성할 수 있습니다."}
              </InfoRowBox>
            </GridColBox>
            <RowBtnBox>
              <Button
                text={"팀 생성"}
                margin={"20px"}
                width={"200px"}
                onClick={(e) => {
                  handleMakeTeam(e);
                }}
              />
              <Button
                text={"생성 취소"}
                margin={"20px"}
                backgroundcolor="#f35d5dde"
                width={"200px"}
                onClick={closeModal}
              />
            </RowBtnBox>
          </GridRowBox>
        </ModalContainer>
      </ModalBox>
    </BasicFrame>
  );
};

export default MakeTeamModal;
