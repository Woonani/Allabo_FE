import React, { createContext, useContext, useMemo, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

// 값들
// console.log("3. initTeamList");
const initTeamList = getLocalStorage("team-list");
const nowTeam = getLocalStorage("now-team");

// 1. 컨텍스트 생성
export const TeamListContext = createContext({
  state: { teamList: [], currentTeam: {} },
  actions: {
    setTeamList: () => {},
    setCurrentTeam: () => {},
  },
});
// console.log("4. TeamListContext");

// 2. 상태를 구독할 수 있는 커스텀 훅을 만든다.
// 상태를 구독하는 컴포넌트 상단에  const VVV = useTeamListState(); 로 선언하고
// 상태값이 들어있는 VVV를 사용한다.
export function useTeamListState() {
  // console.log("5. useTeamListState()");
  const context = useContext(TeamListContext);

  // console.log("6. useTeamListState() -  useContext(TeamListContext)");
  if (!context) {
    throw new Error("Cannot find TeamListContext");
  }
  return context;
}

// 3. Consumer 필요하다면 생성하기 : Context의 value 값을 사용하여 화면에 보여쥬는 컴포넌트이다.
// =>> 그런데 useContext Hook을 사용하면 필요 없음...
// const { Consumer: TeamListConsumer } = TeamListContext;
// <=>  const TeamListConsumer =TeamListContext.Consumer;

// 4. Provider : Context의 value 값을 변경하는데 사용한다.
const TeamListProvider = ({ children }) => {
  const [teamList, setTeamList] = useState(
    initTeamList != null ? [...initTeamList] : []
  );
  // const [currentTeamSeq, setCurrentTeamSeq] = useState(0); // 이것때문에 컨텍스트가 새로고침 후 초기화 됨
  const [currentTeam, setCurrentTeam] = useState(
    nowTeam != null ? { ...nowTeam } : {}
  );

  // useMemo로 이 둘 값 변할때만 렌더링 할꺼라고 메모해서 value에 담음
  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨
  //  사용법 : useMemo(콜백함수, [추척변수])
  const value = useMemo(
    () => ({
      state: { teamList, currentTeam },
      actions: {
        setTeamList,
        setCurrentTeam,
      },
    }),
    [teamList, currentTeam, setTeamList, setCurrentTeam]
  );

  // const value = {
  //   state: { teamListCon, currentTeam },
  //   actions: {
  //     setTeamListCon,
  //     setCurrentTeam,
  //   },
  // };

  return (
    <TeamListContext.Provider value={value}>
      {children}
    </TeamListContext.Provider>
  );
};

export { TeamListProvider };
