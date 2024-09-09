import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";

function App() {
  const minLen = 8
  const maxLen = 50

  const [password, setPassword] = useState("") 
  const [passLen, setPassLength] = useState(minLen)
  const [numCheck, setNumCheck] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  const inputBtnRef = useRef()

  const onLenChange = useCallback((len)=> {
    setPassLength(len)
  },[passLen,numCheck,charCheck])

  const onnumCheckChange = useCallback((val)=>{
    val = JSON.parse(val.toLowerCase())
    setNumCheck(!val)
  },[numCheck])
  
  const oncharCheckChange = useCallback((val)=>{
    val = JSON.parse(val.toLowerCase())
    setCharCheck(!val)
  },[charCheck])

  const genPassword = useCallback( ()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numCheck) str += "0123456789"
    if(charCheck) str += "~!@#$%^&*_"
    let genPass = ""
    for(let i =1 ; i<=passLen; i++){
      genPass += str.charAt(Math.floor(Math.random()*str.length + 1))
    }
    setPassword(genPass)
  },[passLen,numCheck,charCheck])

  const cpyBtnClicked = () =>{
    window.navigator.clipboard.writeText(password)
    inputBtnRef.current.select()
  }

  useEffect(genPassword,[passLen,numCheck,charCheck])

  return (
    <>
      <div id="outerDiv">
        <p style={{color:"white", textAlign: "center", marginTop:"0px"}}>Password Generator</p>
        <div id="inputDiv">
          <input id="password" readOnly value={password} ref={inputBtnRef}></input>
          <button onClick={cpyBtnClicked}>Copy</button>
        </div>
        <div id="updaterDiv">
          <input id="passLen"type="range" min={minLen} max={maxLen} value={passLen} onChange={(e)=>{onLenChange(e.target.value)}}></input>
          <label htmlFor="passLen">Length: {passLen}</label>
          <input id="numCheck" type="checkbox" value={numCheck} onChange={(e)=>{onnumCheckChange(e.target.value)}}></input>
          <label htmlFor="numCheck">Numbers</label>
          <input id="charChek" type="checkbox" value={charCheck} onChange={(e)=>{oncharCheckChange(e.target.value)}}></input>
          <label htmlFor="charCheck">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
