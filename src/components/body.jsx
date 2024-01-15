import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div class="atom-spinner">
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-circle">&#9679;</div>
      </div>
    </div>
  );
};

export default Body;
