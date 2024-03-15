// 구조 분해 할당(Destructuring assignment)을 이용한 메소드 호출
// const { setItem, getItem, removeItem, clear, length, key } = localStorage;

export const setLocalStorage = (key, value) => {
  // JSON자료형으로 변경
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch (error) {
    console.log("e 출력필요? : ", error);
    return null;
  }
};

export const removeLocalStorageItem = (key) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
