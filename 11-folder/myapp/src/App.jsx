import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Your Form is Submitted")
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input type="text" placeholder='Enter Your name' />
      <input type="email" placeholder='Enter Your email' />
      <input type="password" placeholder='Enter Your password' />
      <button>Submit</button>
      </form>       
    </div>
  )
}

export default App
