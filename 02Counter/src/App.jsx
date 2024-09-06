import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)
  //let counter = 15
  let addValue = (col)=>{
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      
    console.log(counter)
  }
  let remValue = ()=>{
    if(counter>0){
      counter--
      setCounter(counter)
    }
    console.log(counter)
  }
  return (
    <>
     <h1>React Practice</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value: {counter}</button>
     <button onClick={remValue}>Remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
