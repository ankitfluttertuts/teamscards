import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Copyright from "./footer/copyrightElements";
import HeaderComponent from "./header/header";
import Card from "./body/cards/cards";
import team from "./data/team";
//Defining the Root
const copyright = ReactDOM.createRoot(document.getElementById("copyright"));
const headerComponent = ReactDOM.createRoot(
  document.getElementById("headerComponent")
);
const mainBody = ReactDOM.createRoot(document.getElementById("mainBody"));

copyright.render(<Copyright />);

headerComponent.render(<HeaderComponent />);
mainBody.render(
  <div className="cardsDiv">
    <Card
      name="Developer"
      image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
      number="8520067572"
    />
    <Card
      name="Tester"
      image="https://images.pexels.com/photos/28208333/pexels-photo-28208333/free-photo-of-mujer-hermosa-con-una-gran-sonrisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      number="25453325"
    />
    <Card
      name="Team Lead"
      image="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      number="73225219473"
    />
    <Card
      name="Team Manager"
      image="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      number="12345679"
    />
  </div>
);
