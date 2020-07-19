import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";
import Dog from "./images/dog.gif";
import Ball from "./images/ball.gif";

function App() {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0)" },
      { transform: "translate(-1400px,0)" },
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
      direction: "normal",
    },
  });

  return (
    <div>
      <img ref={ref} className="ball" src={Ball} alt="ball" />
      <img className="dog" src={Dog} alt="dog" />
    </div>
  );
}
export default App;
