import React, { useState } from 'react'

const Person = (props) => 
{
  let [namee,setNamee]=useState(props.name);
  function handleclick(){
    setNamee('anonymous');
  }
  return (
    <div>
        <div onClick={handleclick}>I am a div donot click me</div>
        <h1>Name:{namee}</h1>
        <h3>age:{props.age}</h3>
        <p>favColor:{props.favColor}</p>
    </div>
  )
}

export default Person
