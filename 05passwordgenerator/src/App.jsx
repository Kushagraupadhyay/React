import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8) // method that governs how we can enter data into the length
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null) 

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)    {    // adds numbers when checkbox is checked
      str+= "0123456789"
    }  
    if(charAllowed){          // adds chars in the pass str when charallowed checkbox is checked
      str +="!@#$%^&*()_+"
    }

    for(let i=0;i<length;i++){
      const char= Math.floor(Math.random()*str.length + 1) // generating random number
      pass+=str.charAt(char)  // adding random number char to password
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed] // use call array dependencies should not change very frequently
  ) // react hook to implement memoization because this generate password method is going to be called multiple times
  
  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)  // writing password to clipboard
    passwordRef.current?.select()
  }

  useEffect(()=>{
    generatePassword()   
    },[length,numberAllowed,charAllowed]);
    // on all of the following events use effect will run the password generator code.

  // use effect is used in scenarios where we want the same code to get executed on a list on onclick events 

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'   // text input field
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref = {passwordRef} // creating reference so that useRef hook can grab the reference of this text field at any time which shows that content has been successfully copied
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div 
      className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"    // slider bar for password length
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} // based on event e we are setting the value of event.target.value to the length 
          name="" id="" />
          <label htmlFor='length'>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)  //  we will be using a callback inside the serNumberAllowed function so that we can access the previous values and all changes properly propogate
          // sometimes there can be multiple clicks done in the ui, due to the batching nature of react , react might not react that fast hence using callback we can force react to react faster
          }}
          type="checkbox" name="" id="" 
          />
          <label htmlFor='number'>Numbers</label>  
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          defaultChecked={charAllowed} 
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}         
          type="checkbox" name="" id="" 
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
