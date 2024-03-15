import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 300px;
  height: 30px;
  // background-color: pink;
`;

const ArrowButton = styled.button`
  width: 20px;
  height: 20px;
  cursor: default;
  background-color: transparent;
  opacity: ${(props) => props.$opacity || "100%"};
  border: none;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 10px;
  color: ${(props) => (props.$currentPageCss ? "skyBlue" : "black")};
  font-weight: ${(props) => (props.$currentPageCss ? "bold" : "unset")};
`;

const Pagenation = ({
  total, // 총게시물 수
  noPerPage, // N개씩 보기
  onClick, // 페이지 선택 클릭이벤트
  currentPage, // state:현재페이지번호
  pagenationArray, // state:고정 페이지 배열
  setPagenationArray, // setState
  setPageMove,
}) => {
  const length = Math.ceil(total / noPerPage);

  return (
    <Container>
      {pagenationArray[0] <= 1 ? (
        <ArrowButton $opacity="50%">◀&nbsp;</ArrowButton>
      ) : (
        <ArrowButton
          onClick={() => {
            setPagenationArray([
              ...pagenationArray.map((item, idx) => item - 3),
            ]);
            setPageMove(-1);
          }}
        >
          ◀&nbsp;
        </ArrowButton>
      )}

      {pagenationArray.map((item, idx) => {
        return item > length ? null : (
          <PageButton
            key={idx}
            onClick={onClick}
            $currentPageCss={currentPage == item}
          >
            {item}
          </PageButton>
        );
      })}

      {pagenationArray[0] + 3 > length ? (
        <ArrowButton $opacity="50%">&nbsp;▶</ArrowButton>
      ) : (
        <ArrowButton
          onClick={() => {
            setPagenationArray([
              ...pagenationArray.map((item, idx) => item + 3),
            ]);
            // setCurrentPage(pagenationArray[0]);
            // 여기서 setCurrentPage로 현재페이지를 변경해도 useEffect 반영이 안됨! 이미 처음에 렌더링 된 currentPage[0]=1을 가지고 있기 때문.
            // 부모를 한번 거쳐서 렌더링 되어야 바뀐 currentPage 값을 가져올 수 있음.
            setPageMove(1);
          }}
        >
          &nbsp;▶
        </ArrowButton>
      )}
    </Container>
  );
};
export default Pagenation;
