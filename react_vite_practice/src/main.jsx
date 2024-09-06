import { StrictMode } from 'react'
import React from 'react'
import  ReactDOM from 'react-dom' 
import App from './App.jsx'

function MyApp(){
  return(
    <h1>My App !</h1>
  )
}
let username = 'akshat'
const reactElement = React.createElement(
  'a',
  {
    href:'http://google.com',
    target:'_blank'
  },
  'click me to visit GOOGLE',
  username
)


let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  reactElement
  //<App/>
)
