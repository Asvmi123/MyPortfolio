import React from "react";

function Navbar() {
  return (
    <div className="menu">
      <div>
        <div className="logo"></div>
      </div>
      <ul className="homes">
        <li>menu</li>
        <li>about</li>
        <li>contact</li>
        <li>home</li>
      </ul>
      {/* <input
        type="text"
        name="text"
        class="input"
        placeholder="Type your text"
      ></input> */}
    </div>
  );
}

export default Navbar;
