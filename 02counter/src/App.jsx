import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]=useState(15)
 
  // let counter=15
const addValue=()=>{
  
 // counter = counter+1
 setCounter(prevCounter=> prevCounter+1)
 setCounter(prevCounter=> prevCounter+1)
 setCounter(prevCounter=> prevCounter+1)
 setCounter(prevCounter=> prevCounter+1)

 
}

const removeValue=()=>{
  setCounter(counter-1)
}
 return ( 
    <>
      <h1>Hey Sanjana</h1>
      <h2>You look beautiful:{counter} </h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue
      }>Remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App