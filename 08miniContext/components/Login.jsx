import React , {useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        // Prevents the page from refreshing
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type = "text" 
        value = {username} 
        onChange = {(e) => setUsername(e.target.value)} //e is the event, target is the input, value is the value of the input
        placeholder = "Username"
        />
        < input 
        type='password' //hides the text entered in the input field 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' //text displayed when nothing is entered
        />
        <button 
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login