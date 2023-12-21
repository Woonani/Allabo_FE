import React from "react";
import Swal from "sweetalert2";

export const AlertTimer = (title, text, icon, timer) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: false,
    showCancelButton: false,
    timer: timer,
    height: "500px",
  });
};

//AlertTimer(); 이런식으로 쓰면 됨.
