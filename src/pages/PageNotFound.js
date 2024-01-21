import React from "react";
import LogoBoxHorizon from "../components/common/LogoBoxHorizon";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <LogoBoxHorizon />
      <br />
      <br />
      <br /> */}
      <div style={{ fontSize: "100px" }}>404 NOT FOUND</div>
    </div>
  );
};

export default PageNotFound;
