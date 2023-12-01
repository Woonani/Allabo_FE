import React from "react";
import { useState } from "react";

const useMenu = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleClick = (e) => {
    console.log("클릭!");
    setIsSideOpen(!isSideOpen);
  };

  return { isSideOpen, handleClick };
};

export default useMenu;
