import React from "react";
import Swal from "sweetalert2";

export const AlertTimer = (titleText, textMessage, iconImg, time) => {
  Swal.fire({
    title: titleText,
    text: textMessage,
    icon: iconImg,
    showConfirmButton: false,
    showCancelButton: false,
    timer: time,
    // height: "600px",
  });
};

//AlertTimer(); 이런식으로 쓰면 됨.
