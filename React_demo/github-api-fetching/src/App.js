import React from 'react'
import GithubUser from './Component/GithubUser'

const App = () => {
  return (
    <div>
      <h1>Github Profiles</h1>
      <GithubUser username="Samarth0606" />
      <GithubUser username="alok92iit" />
      <GithubUser username="SachinBarpanda"/>
    </div>
    
  )
}

export default App