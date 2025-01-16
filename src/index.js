import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Copyright from "./footer/copyrightElements";
import HeaderComponent from "./header/header";

import App from "./App";
//Defining the Root
const copyright = ReactDOM.createRoot(document.getElementById("copyright"));

const headerComponent = ReactDOM.createRoot(
  document.getElementById("headerComponent")
);
const mainBody = ReactDOM.createRoot(document.getElementById("mainBody"));

copyright.render(<Copyright />);
headerComponent.render(<HeaderComponent />);
mainBody.render(<App/>);
