import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import './App.css';

const Box =({children}) => {
  return(
    <div className="box">{children}</div>
  )
};

const Container = ({children}) => {
  return(
    <div><Box>Nested Box</Box></div>
  )
}

function Circle({ children }) {
  return <div className="circle">{children}</div>;
}

function App() {
  const [reversed, setReversed] = useState(false);
  //select 용도
  const element = useRef();
  const q = gsap.utils.selector(element);

  //ref에 있는 타임라인 저장하기
  const tl = useRef();
  console.log(tl);

  useEffect(()=>{
    tl.current = gsap.timeline()
    .to(q(".box"),{
      rotate: 360
    })
    .to(q(".circle"),{
      x:100
    })
  },[]);

  useEffect(()=>{
    //토글(우리 타임라인에서의 방향)
    tl.current.reversed(reversed);
  },[reversed])


  return (
    <div className="app" ref={element}>
      <div>
        <button className="toggle" onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <Box>box</Box>
      <Circle>circle</Circle>
    </div>
  );
}

export default App;
