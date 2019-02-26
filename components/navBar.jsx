import React from "react";

export default function navBar() {

  const navStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "3em",
    fontFamily: "Arial",
    padding: "1.5%",
    width: "auto",
    backgroundColor: "purple"
  };

  return(
    <div style={navStyle}>
      <span>Meme generator</span>
    </div>

  );
};
