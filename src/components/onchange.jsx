import React, { useState } from "react";

const Onchange = () => {
  const [name, setName] = useState("");

  const shalgagch = (utga) => {
    if (utga.length < 3) return <div style={{ color: "blue" }}>{utga}</div>;
    else return utga;
  };

  return (
    <div>
      <input
        type="text"
        style={{ border: "1px solid #000" }}
        placeholder="ym bichne vv!"
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
      {shalgagch(name)}
    </div>
  );
};

export default Onchange;
