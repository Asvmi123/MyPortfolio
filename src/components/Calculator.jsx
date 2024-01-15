
import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [value, setvalue] = useState("");

  const main = (a) => {
    let add = false;
    for(i =0; i<value.length;  i++){
        if(value[i] == a) add=true;
    }
    if(add===false && value[0]) setvalue(value + a)
  }
  return (
    <div>
      <h1>{value ? value : 0}</h1>
      <div>
      <button onClick={() => main("C")}>C</button>
      <button onClick={() => main("AC")}>AC</button>
      <button onClick={() => main("%")}>%</button>
      <button onClick={() => main("/")}>/</button>
      </div>
      <div>
      <button onClick={() => setvalue(value + 1)}>1</button>
      <button onClick={() => setvalue(value + 2)}>2</button>
      <button onClick={() => setvalue(value + 3)}>3</button>
      <button onClick={() => main("+")}>+</button>
      </div>
      <div>
      <button onClick={() => setvalue(value + 4)}>4</button>
      <button onClick={() => setvalue(value + 5)}>5</button>
      <button onClick={() => setvalue(value + 6)}>6</button>
      <button onClick={() => main("-")}>-</button>
      </div>
      <div>
      <button onClick={() => setvalue(value + 7)}>7</button>
      <button onClick={() => setvalue(value + 8)}>8</button>
      <button onClick={() => setvalue(value + 9)}>9</button>
      <button onClick={() => main("*")}>*</button>
      </div>
      <div>
      <button onClick={() => setvalue(value + 1)}>0</button>
      <button onClick={() => setvalue(value + 2)}>00</button>
      <button onClick={() => main(".")}>.</button>
      <button onClick={() => main("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
