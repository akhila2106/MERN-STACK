import React from 'react'

const App = () => {
function btnclicked(){
  console.log("Button Clicked");
}
const mouseover=() =>{
  console.log(" Mouse is Working")
}
  return (
    <div className='parent'>
      <h1>Hello World</h1>
      <button className="btn" onClick={btnclicked}>Click Me</button>
      <button className="btn" onDoubleClick={()=>
        console.log("Thanks")
      }>Click</button>
      <button className="btn" onMouseOver={()=>
        console.log("Mouse is Working")
      }>Mouse Over Clicked</button>
      <button onClick={btnclicked} onMouseOver={mouseover}>Two Way Button</button>
    </div>
  )
}

export default App
