import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider} from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [ {id:Date.now(),...todo} , ...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo)=>( prevTodo.id === todo.id ? todo: prevTodo) ) )
  }
  //filter operation only works on true condition hence we are using ! to toggle the value to make sure all the id values that do not match are not deleted
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id) )
  }
  const toggleComplete = (id) =>{ // here ...prevTodo is used to expland and keep the other values of the todo same and only change the completed value
    setTodos((prev)=> 
      prev.map((prevTodo) => // here we are mapping through the todos and checking if the id matches the id of the todo we want to change and if it does we are changing the completed value to the opposite of what it was
        prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo) )
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[]) // here we are using the empty array as the second argument to make sure that the useEffect only runs once when the component is mounted

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]) // here we are using the todos as the second argument to make sure that the useEffect only runs when the todos state changes
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}
export default App
