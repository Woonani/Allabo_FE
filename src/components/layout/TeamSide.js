import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const StyledFixedSide = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 70px;
  height: 100%;
  background-color: black;
  box-shadow: 1px 1px 5px 0.2px black;
  z-index: 2; /* 높은 우선순위를 지정 */
  color: white;
  padding: 20px;
`;
const TeamSide = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn.id ? (
        <StyledFixedSide>
          <Link to="/team1" className="link-style">
            팀1
          </Link>
          <Link to="/team2" className="link-style">
            팀2
          </Link>
        </StyledFixedSide>
      ) : (
        ""
      )}
    </>
  );
};
export default TeamSide;
