import React, { createContext, useContext, useMemo, useState } from "react";
// import { createContext } from "react";
import { getCookie } from "../utils/Cookie";

const token = getCookie("token");
// console.log("token", token);

// (1) 컨텍스트 생성
export const IsLoginContext = createContext({
  isLogin: false, // 컨텍스트 저장공간 : 저장소에 변수명(isLogin) 등록
  // isLogin: token !== null ? true : false,
  // 진짜 여기 값은 안보는 구나..
});

export const IsLoginProvider = ({ children }) => {
  // 컨텍스트 제공 컴포넌트
  const [isLogin, setIsLogin] = useState(
    token !== undefined ? true : false // 상태관리에 사용할 변수(isLogin), 함수 선언
    // null을 undefined로 수정 >> 로그아웃 버튼 안눌렀을때 토큰이 남아있는 경우.. 문제임.
  );
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]); // useMemo로 이 둘 값 변할때만 렌더링 할꺼라고 메모해서 value에 담음
  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨

  return (
    <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>
  );
};

// IsLoginContext : createContext 함수를 사용하여 React 컨텍스트를 생성
//                  컨텍스트의 초기값으로 객체 {isLogin: false}를 선언
//      *isLogin : 여기서의 isLogin은 실제로 컨텍스트의 초기값으로 사용되지 않음
//                  이 컨텍스트를 구독하는 컴포넌트에서 이 값에 접근할 때 사용될 '초기 구독값'임

// IsLoginProvider : 이 컨텍스트를 제공하는 프로바이터 컴포넌트
//      *isLogin : 실질적으로 컨텍스트 값을 구독하는 컴포넌트에서 사용하는 값.
//                  실제 로그인 상태를 관리하는데 사용됨
//

// 아래 커스텀 훅을 사용하면 consumer를 만들지 않아도 됨.
// (2) 상태구독할 수 있는 커스텀 훅 만듦 : 상태를 구독하는 컴포넌트마다 useContext훅을 사용하지 않아도 되도록.
export function useIsLoginState() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error("Cannot find IsLoginProvider");
  }
  return context.isLogin;
}

// (3) App.js에서 Provider로 하위 컴포넌트를 감싸준다.
