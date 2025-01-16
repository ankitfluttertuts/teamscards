import React from "react";

const cardImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10%",
  objectFit: "contain",
};
const imageFit = {
  width: "20rem",
  height: "13rem",
};
function Card(props) {
  return (
    <div className="cardBody">
      <h1 className="cardName">{props.name}</h1>
      <div style={imageFit}>
        <img style={cardImageStyle} src={props.image} alt="test" />
      </div>
      <h2 className="cardName"> {props.number}</h2>
    </div>
  );
}

export default Card;
