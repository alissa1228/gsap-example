import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import './App.css';


const randomX = gsap.utils.random(-200, 200, 1, true);
//랜덤 숫자 받아서 Gsap x 쪽에 해당 값 넣기 -> 값 만큼 x 값 이동.
const Box = ({ children, endX })=>  {    
  const boxRef = useRef();

  // run when `endX` changes
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: endX
    });
  }, [endX]);
  
  return <div className="box purple" ref={boxRef}>{children}</div>;
}

function App() {
  //랜덤 숫자 넣기.
  const [endX, setEndX] = useState(0);

  return (
    <div className="app">
      <button className="toggle" onClick={() => setEndX(randomX())}>Pass in a randomized value</button>
      <Box endX={endX}>{endX}</Box>
    </div>
  );
}

export default App;
