import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler = () => {
    e.preventDefault();
    console.log("Your Form is Submitted By", title)
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter Your Name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
           console.log(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
