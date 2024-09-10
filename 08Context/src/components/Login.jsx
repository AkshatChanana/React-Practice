import {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const submit = () =>{
        setUser({username, password})
    }
  return (
    <>
    <input type="text" placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}></input>
    <br></br>
    <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={submit}>Submit</button>
    </>
  )
}

export default Login 