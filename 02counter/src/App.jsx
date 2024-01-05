import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 15

  //usestate method takes as input a variable followed by a function,Here variable = counter , function = setCounter
  const [counter,setCounter] = useState(15) // thedefault value is undefined, adding any value to an undefined number will result in an undefined number
  //whatever we put inside useState(parameter) is set as default value. Parameter = default value , defaults to undefined , NaN if not set
  //now change in one state will reflect the value throughout the UI

  const addvalue=()=>{
    // setCounter(counter+1)
    // console.log(counter)
    // setCounter(counter+1)
    // console.log(counter)
    // setCounter(counter+1)
    // console.log(counter)
    // setCounter(counter+1)
    // console.log(counter)

    setCounter((prevCounter)=>prevCounter+1) // prevcounter is extracting the previous value and then adding one to it
    console.log(counter)
    setCounter((prevCounter)=>prevCounter+1)
    console.log(counter)
    setCounter((prevCounter)=>prevCounter+1)
    console.log(counter)
    setCounter((prevCounter)=>prevCounter+1)
    console.log(counter)
  }

  const removeValue= ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React course with Dante {counter}</h1>
      <h2>Counter value :</h2>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
