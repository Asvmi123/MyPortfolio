import React, { useState } from "react";

// const Problems = () => {
//   const [y, Nery] = useState(0);
//   function utga() {
//     let x = Number(prompt())
//     let y = Number(prompt())
//     Nery(x%y);
//     console.log(4632%100);
//   }

//   return (
//     <div>
//       <div onClick={() => utga()}>Click</div>
//       <div>{y}</div>
//     </div>
//   );
// };

const Problems = () => {
  const [a, Nera] = useState("234");
  function utga() {
    Nera(Number(a[0]) + Number(a[1]) + Number(a[2]));
  }

  return (
    <div>
      <div onClick={() => utga()}>Click</div>
      <div>{a}</div>

    </div>
  );
};

export default Problems;
