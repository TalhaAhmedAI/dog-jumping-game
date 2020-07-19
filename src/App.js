import React, { useRef } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";
import Dog from "./images/dog.gif";
import Ball from "./images/ball.gif";

function App() {
  const ball = useRef();
  const ballAnim = useWebAnimations({
    ball,
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

  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0)" },
      { transform: "translate(0, -150px)" },
      { transform: "translate(0, 0)" },
    ],
    timing: {
      duration: 1500,
      direction: "normal",
    },
  });

  return (
    <div>
      <h1>CLICK ON THE DOG TO MAKE IT JUMP</h1>
      <img ref={ballAnim.ref} className="ball" src={Ball} alt="ball" />
      <img
        ref={ref}
        className="dog"
        src={Dog}
        alt="dog"
        onClick={() => getAnimation().play()}
      />
    </div>
  );
}
export default App;
