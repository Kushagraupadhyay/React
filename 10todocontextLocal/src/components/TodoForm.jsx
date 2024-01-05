import React,{useState} from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo,setTodo] = useState('')
    const {addTodo} = useTodo()
    const add = (e) =>{
        e.preventDefault()

        console.log("targetvalue")
        console.log(e.target.value)
        console.log("currenttargetvalue")
        console.log(e.currentTarget.value)

        if(!todo) return
        addTodo({todo,completed:false}) // here we are passing the todo and completed value to the addTodo function
        setTodo("") // this is to clear the input field after the todo is added  
    }

  return (
    <form onSubmit={add} className='flex'>
        <input type='text'
        placeholder='Write your todo'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
    </form>
  )
}

export default TodoForm