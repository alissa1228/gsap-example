import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import './App.css';

function App() {
  const boxRef = useRef();

  useEffect(()=> {
    gsap.to(boxRef.current, {translateX: '50%'})
  });

  return (
    <div className="app" ref={boxRef}>
     <div className="box">Hello</div>
   </div>
  );
}

export default App;
