import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  opacity: 50%;
`;

const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 700px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  display: felx;
`;

const Btn = styled.button``;

const TeamModal = ({ isOpen, closeModal, content }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <Background />
      <Modal>
        <button onClick={closeModal}>close</button>
        <div>팀모달임 {content}</div>
      </Modal>
    </div>
  );
};

export default TeamModal;
