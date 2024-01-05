import React,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {//children is the components that are wrapped by the provider 
    const [user, setUser] = useState(null) // this data should be available to all the children, that is why we created this user state
    // whatever data we want all the components to have access to we will add them here
    return (
        ////value is the data that we want to share with all the children , need to be passed only once and available to all components
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider> 
    )
}

export default UserContextProvider