import UserContext from "./UserContext";
import {useState} from 'react'

function UserContextProvider({children}){
    const [user, setUser] = useState('Default User')
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider