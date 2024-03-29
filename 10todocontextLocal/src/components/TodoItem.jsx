import React ,{useState} from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {// here we are destructuring the todo from the props
    const[isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo) 
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    const editTodo = () =>{
        updateTodo(todo.id,{...todo,todo:todoMsg})// here we are passing the todo id and the todo object with the updated todo message
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    // This is not all todos, this is one todo
    <div
     className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
     >
       <input type='checkbox' 
       className='cursor-pointer'
       checked= {todo.completed}
       onChange={toggleCompleted}
      />
      < input type='text'
      className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable? "border-black/10 px-2" : "border-transparent"}`}
      value={todoMsg}
      readOnly={!isTodoEditable} // here we are using the readOnly attribute to make the input field read only when the isTodoEditable is false
      onChange={(e)=>setTodoMsg(e.target.value)}
      />
      <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
      onClick={()=>{
        if(todo.completed) return
        if(isTodoEditable){
            editTodo()
        }else setIsTodoEditable((prev)=>!prev)
      }}
      disabled={todo.completed} // here we are disabling the edit button when the todo is completed
      >
        {isTodoEditable ? "save" : "edit"}
      </button>
      <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
      onClick={()=>deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem