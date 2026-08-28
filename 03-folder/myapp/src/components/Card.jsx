import React from 'react'

const Card = (props) => {
  return (
    //   <div className="parent">
    //   <div className="card">
    //     <img src="https://i.pinimg.com/736x/4b/a2/c3/4ba2c386c93850c29177a0e32915e01f.jpg"></img>
    //     <h1>Akhi,19</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores vero saepe ullam tempora dolorem maiores aspernatur, vel rerum est deleniti, provident ad? Accusamus saepe officia reiciendis ab exercitationem? Consectetur.</p>
    //     <button>view profile</button>
        
    //   </div>
    // </div>
      <div className="parent">
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores vero saepe ullam tempora dolorem maiores aspernatur, vel rerum est deleniti, provident ad? Accusamus saepe officia reiciendis ab exercitationem? Consectetur.</p>
        <button>view profile</button>
        
      </div>
    </div>
  )
}


export default Card
