import React from "react";
import "./App.css";
import Dog from "./images/dog.gif";
import Ball from "./images/ball.gif";

function App() {
  return (
    <div>
      <img className="ball" src={Ball} alt="ball" />
      <img className="dog" src={Dog} alt="" />
    </div>
  );
}
export default App;
