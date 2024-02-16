import React from "react";
import Swal from "sweetalert2";

export const AlertToast = (iconImg, text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "center", // "center-center",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false,
    // didOpen: (toast) => {
    //   toast.addEventListener("mouseenter", Swal.stopTimer);
    //   toast.addEventListener("mouseleave", Swal.resumeTimer);
    // },
  });
  Toast.fire({
    icon: iconImg, // success  error  warning  info  question
    title: text,
  });
};
