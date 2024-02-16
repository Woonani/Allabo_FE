import React from "react";

export const formatDatetime = (originStr) => {
  return originStr.replace(/T(.{5}).*/, " $1");
};
