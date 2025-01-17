import React, { useState } from "react";


function Data() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);

  function handleClick() {
    console.log("Clicked");
    if (name !== "") {
      setHeading(` Hello ${name} !`);
      setName('');
    }
  }

  function naming(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function mouseOverFn() {
    setMouseOver(true);
    console.log("mouseOver");
  }
  function mouseOutFn() {
    setMouseOver(false);
    console.log("mouseOver");
  }
  return (
    <div>
      <h1> {heading} !</h1>
      <input type="text" id="inputData" onChange={naming}  value={name}/>
      <button
        id="btnSubmit"
        onClick={handleClick}
        onMouseOver={mouseOverFn}
        onMouseOut={mouseOutFn}
        style={{
          backgroundColor: mouseOver
            ? "rgb(119, 243, 148)"
            : "rgb(74, 147, 91)",
        }}
      >
        Click Here
      </button>
    </div>
  );
}

export default Data;
