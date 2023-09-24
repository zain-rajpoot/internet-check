import React from "react";
import Offline from "./ofline.png";
import { Detector } from "react-detect-offline";

// INSTALL FOR NETWORK DETECTION
// npm install react-detect-offline

const Detect = (props) => {
  const Reloadit = () => {
    window.location.reload();
  };
  let mainStyle = {
    paddingTop: "200px",
    textAlign: "center",
  };
  let reloadStyle = {
    border: "1px solid blue",
    color: "blue",
    background: "transparent",
    cursor: "pointer",
    marginTop: "20px",
    borderRadius: "40px",
    padding: "10px 25px",
    fontSize: "25px",
  };

  return (
    <Detector
      render={({ online }) =>
        online ? (
          props.children
        ) : (
          <div style={mainStyle}>
            <img src={Offline} />
            <h1 style={{ marginBottom: "5px" }}>NO INTERNET CONNECTION</h1>
            <h4 style={{ margin: "0" }}>
              Please check your NETWORK connection
            </h4>
            <button style={reloadStyle} onClick={Reloadit}>
              Refresh
            </button>
          </div>
        )
      }
    />
  );
};
export default Detect;
