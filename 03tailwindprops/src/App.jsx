 //import  React from 'react';
 //import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
//import  { useState } from 'react';


function App() {
  //const [count, setCount] = useState(0);
return (
  <>
  <h1 className="bg-green-400 text-black p-4 rounded-xl">Hey Tailwind</h1>
 <Card username="Love Life" btnText="click me"/> 
 <Card username="Way to Success" btntext="visit me"/> 
</>
)
}

export default App;
