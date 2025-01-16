import React from "react";
import "./index.css";
import Card from "./body/cards/cards";
import team from "./data/team";


function renderTeam(data){
    return <Card name = {data.name}
    key = {data.id}
    image = {data.image}
    number = {data.number}
    />
}
function App(){
    return  <div className="cardsDiv">
    {team.map(renderTeam)}
  </div>
}

export default App;