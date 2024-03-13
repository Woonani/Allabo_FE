import React from "react";

export const formatDatetime = (originStr) => {
  if (originStr) {
    return originStr.replace(/T(.{5}).*/, " $1").replaceAll("-", ".");
  } else {
    return null;
  }
};

export const formatDate = (originStr) => {
  if (originStr) {
    return originStr.replace(/T.*/, "").replaceAll("-", ".");
  } else {
    return null;
  }
};
