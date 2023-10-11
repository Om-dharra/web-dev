import React from 'react'
import Person from './Components/Person'
import Sam from './Components/Sam'
const App = () => {
  return (

    <div>
      <Person name="Samarth" age="27" favColor="black"/>
      <Person name="Sachin" age="24" favColor="pink"/>
      <Person name="Maniket" age="27" favColor="blue"/>
      <Person name="Abhinav" age="25" favColor="green"/>
      <Sam/>

    </div>
  )
}

export default App 