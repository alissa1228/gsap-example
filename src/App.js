import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import './App.css';

const Box =({children}) => {
  return(
    <div className="box">{children}</div>
  )
};


function App() {
  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);
  //select 용도
  const element = useRef();
  const q = gsap.utils.selector(element);

  //처음 렌더됐을 때만
  useEffect(()=>{
    gsap.to(q(".box-1"), {rotation: "+=360"});
  },[]);

  //맨 처음 랜더 + delayedCount 바뀔 때마다
  useEffect(()=>{
    gsap.to(q(".box-2"), {rotation: '+=360'})
  },[delayedCount]);

  //렌더 될 때마다
  useEffect(()=>{
    gsap.to(q(".box-3"), { rotation: "+=360" });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);


  return (
    <div className="app" ref={element}>
      <div>
        <button className="toggle" onClick={() => setCount(count + 1)}>Click to trigger a render</button>
      </div>
      <p>Count: {count}</p>
      <p>Delayed Count: {delayedCount}</p>
      <p>Renders: {1 + delayedCount + count}</p>
      <div className="flex-row">
        <div className="box box-1 purple">First render</div>
        <div className="box box-2 blue">First render & delayed count change</div>
        <div className="box box-3 red">Every render</div>
      </div>
    </div>
  );
}

export default App;
