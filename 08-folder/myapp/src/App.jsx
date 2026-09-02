import React,{useState} from 'react'

const App = () => {
  let a=10;
  const [num,setNum] = useState(10);
  function increasesetNum(){
    setNum(num+1);
  }
  function decreasesetNum(){
    setNum(num-1);
  } 
  function jumpNum(){
    setNum(num+5)
  }
   return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasesetNum}>Increase</button>
      <br/>
      <button onClick={decreasesetNum}>Decrease</button>
      <br/>
      <button onClick={jumpNum}>Jump</button>
    </div>
  )
}

export default App