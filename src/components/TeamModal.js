import React from "react";
import styled from "styled-components";

const Background = styled.div``;

const Modal = styled.div``;

const Btn = styled.button``;

const TeamModal = ({ isOpen, closeModal, content }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "grey",
          opacity: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "600px",
          height: "500px",
          backgroundColor: "wheat",
        }}
      >
        <button onClick={closeModal}>close</button>
        팀모달임 {content}
      </div>
    </div>
  );
};

export default TeamModal;
