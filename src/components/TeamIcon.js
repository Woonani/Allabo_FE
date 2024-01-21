import { teamListContext } from "../context/TeamListContext";
import BasicImg from "../assets/img/common/BasicTeam.png";
import AddBtn from "../assets/img/common/AddBtn.png";

import React from "react";
import SquareButton from "./common/SquareButton";

const TeamIcon = () => {
  return (
    <teamListContext.Consumer>
      {(value) =>
        value.teamList.length > 0 ? (
          <>
            {value.teamList.map((item) => {
              return (
                <>
                  <SquareButton
                    width="40px"
                    height="40px"
                    imgUrl={BasicImg}
                    // handleClick={() => handleTeamPage(team.teamSeq)}
                  >
                    {item}
                  </SquareButton>
                  <br />
                  <br />
                </>
              );
            })}
          </>
        ) : (
          <SquareButton
            width="40px"
            height="40px"
            imgUrl={AddBtn}
            // handleClick={() => handleTeamPage(team.teamSeq)}
          />
        )
      }
    </teamListContext.Consumer>
  );
};

export default TeamIcon;
