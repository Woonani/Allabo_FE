import React, { createContext, useContext, useMemo, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

// 값들
const teamList = getLocalStorage("team-list");
// console.log("teamList ", teamList);
const nowTeam = getLocalStorage("now-team");
// console.log("nowTeam ", nowTeam);

// 1. 컨텍스트 생성
export const teamListContext = createContext({
  state: { teamListCon: [], currentTeamSeq: 0, currentTeam: {} },
  actions: {
    setTeamListCon: () => {},
    setCurrentTeamSeq: () => {},
    setCurrentTeam: () => {},
  },
  //   teamListCon: [1, 2, 3], // [], //
  //   currentTeamSeq: 0,
});

// 2. 상태를 구독할 수 있는 커스텀 훅을 만든다.
// 상태를 구독하는 컴포넌트 상단에  const VVV = useTeamListState(); 로 선언하고
// 상태값이 들어있는 VVV를 사용한다.
export function useTeamListState() {
  const context = useContext(teamListContext);
  if (!context) {
    throw new Error("Cannot find teamListContext");
  }
  return context;
}

// 3. Consumer 필요하다면 생성하기 : Context의 value 값을 사용하여 화면에 보여쥬는 컴포넌트이다.
// =>> 그런데 useContext Hook을 사용하면 필요 없음...
// const { Consumer: TeamListConsumer } = teamListContext;
// <=>  const TeamListConsumer =teamListContext.Consumer;

// 4. Provider : Context의 value 값을 변경하는데 사용한다.
const TeamListProvider = ({ children }) => {
  const [teamListCon, setTeamListCon] = useState(
    teamList != null ? [...teamList] : []
  );
  // const [currentTeamSeq, setCurrentTeamSeq] = useState(0); // 이것때문에 컨텍스트가 새로고침 후 초기화 됨
  const [currentTeam, setCurrentTeam] = useState(
    nowTeam != null ? { ...nowTeam } : {}
  );

  // useMemo로 이 둘 값 변할때만 렌더링 할꺼라고 메모해서 value에 담음
  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨
  // const state = useMemo(
  //   () => ({ teamListCon, setTeamListCon, currentTeam }),
  //   [teamListCon, setTeamListCon, currentTeam]
  // );
  // const actions = useMemo(
  //   () => ({ currentTeamSeq, setCurrentTeamSeq, setCurrentTeam }),
  //   [currentTeamSeq, setCurrentTeamSeq, setCurrentTeam]
  // );

  const value = {
    state: { teamListCon, currentTeam }, // currentTeamSeq,
    actions: {
      setTeamListCon,
      // setCurrentTeamSeq,
      setCurrentTeam,
    },
  };
  // console.log("확인 ", currentTeam);
  return (
    // <teamListContext.Provider state={state} actions={actions}>
    <teamListContext.Provider value={value}>
      {children}
    </teamListContext.Provider>
  );
};

// export { TeamListConsumer, TeamListProvider };
export { TeamListProvider };

// A : 컨텍스트의 teamListCon 의 배열을 채우는것.

// B : 선택된 현재 team에 대한 teamSeq를 컨텍스트가 가지고 있는것.
