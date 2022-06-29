import React, {useRef, useEffect, forwardRef} from "react";
import { gsap } from "gsap";
import './App.css';

const Box = forwardRef(({children}, ref) => {
  return(
    <div className="box" ref={ref}>{children}</div>
  )
});

const Container = ({children}) => {
  return(
    <div><Box>Nested Box</Box></div>
  )
}

function App() {
  const box1 = useRef();
  const box2 = useRef();

  useEffect(()=> {
    const boxes = [
      box1.current,
      box2.current
    ];

  // Target the two specific elements we have forwarded refs to
  gsap.to(boxes, {
    x: 100,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });

  },[]);

  return (
    <div className="app">
    <Box ref={box1}>Box</Box>
    <Container/>
    <Box ref={box2}>Box2</Box>
   </div>
  );
}

export default App;
