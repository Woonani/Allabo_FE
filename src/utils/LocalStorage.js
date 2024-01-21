// 구조 분해 할당(Destructuring assignment)을 이용한 메소드 호출
// const { setItem, getItem, removeItem, clear, length, key } = localStorage;

export const setLocalStorage = (key, value) => {
  // JSON자료형으로 변경
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  // 원래의 자료형으로 복원
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorageItem = (key) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
