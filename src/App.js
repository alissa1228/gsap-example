import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import './App.css';

const Box = ({children}) => {
  return(
    <div className="box">{children}</div>
  )
}

const Container = ({children}) => {
  return(
    <div><Box>Nested Box</Box></div>
  )
}

function App() {
  const boxes = useRef();
  const q = gsap.utils.selector(boxes)

  useEffect(()=> {
    gsap.to(q(".box"), {
      x:100,
      stagger:0.33,
      repeat: -1, // 반복
      repeatDelay: 1,
      yoyo: true //나갔다가 다시 부드럽게 돌아옴
    })
  });

  return (
    <div className="app" ref={boxes}>
    <Box>Box</Box>
    <Container/>
    <Box>Box2</Box>
   </div>
  );
}

export default App;
