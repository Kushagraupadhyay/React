import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1> //if there is no user, return null
  return (
    <div>
        <h1>Profile : {user.username}</h1>
        <h3>More components</h3>    
    </div>
  )
}
export default Profile