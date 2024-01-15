import React, { useState } from "react";
import "./Btn.css";

const Button = () => {
  const [value, setvalue] = useState("");

  const [text, settext] = useState("");

  return (
    <div
      style={{
        background: value,
        text,
        height: "100vh",
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
      }}
    >
      <button
        onClick={() => {
          setvalue("aqua");
          settext("red");
        }}
      >
        aqua
      </button>
      <button onClick={() => setvalue("#38bdf8")}>sky</button>
      <button onClick={() => setvalue("blueviolet")}>blueviolet</button>
      <button onClick={() => setvalue("#a78bfa")}>violet</button>
      <button onClick={() => setvalue("#e879f9")}>fuchsia</button>
      <button onClick={() => setvalue("#fb7185")}>rose</button>
    </div>
  );
};

export default Button;
