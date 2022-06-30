import React from "react";
import { gsap } from "gsap";
import './App.css';

function App() {
  const onEnter = ({ currentTarget }) => {
    console.log(currentTarget);
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };
  
  const onLeave = ({ currentTarget }) => {
    console.log(currentTarget);
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <div className="app flex-row">
    <div className="box purple" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      Hover Me
    </div>
  </div>
  );
}

export default App;
