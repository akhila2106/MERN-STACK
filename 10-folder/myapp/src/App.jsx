// import React,{useState} from 'react'

// const App = () => {
//     const [num,setnum]=useState(0)
//     const replace=()=>{
//         console.log(num)
//         setnum(40);
//         console.log(num)
//     }
//   return (
//     <div>
//       <h1>My Number is {num}</h1>
//       <button onClick={replace}>Replace</button>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'

const App = () => {
    const[num,setnum]=useState(10)
    const [obj,setobj]=useState({user:'Bunty',age:22})
    // const btnClicked =()=>{
    //     const newobj={...obj}
    //     newobj.user='Sunny'
    //     setobj(newobj)
    // }
    const btnClicked=()=>{
        setnum(prev=>(prev+1))
        setnum(prev=>(prev+1))
        setnum(prev=>(prev+1))
        
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Update</button>
    </div>
  )
}

export default App
