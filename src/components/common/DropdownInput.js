import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

// z컴포넌트화 잘못함 >> 수정해서 다른 검색 컴포넌트로 사용하기

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

const DropdownInput = ({
  label, // 인풋 라벨 : placeHolder 같은 역할
  fontSize,
  value,
  onChange,
  onBlur, // 커서 인풋 태그 밖으로 꺼냈을 때 발생하는 이벤트
  searchList,
  invitees,
  setInvitees,
  ...props // props.a이런식으로
}) => {
  console.log("invitees", invitees);
  return (
    <Container>
      <StyledInput
        placeholder=" "
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ListContainer>
        {searchList.length > 0
          ? searchList.map((item, idx) => {
              const userId = item.userId;
              const dupCheck = invitees.find((i) => i == userId);
              console.log("dupCheck : ", dupCheck);
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
  );
};

export default DropdownInput;
