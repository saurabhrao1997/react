import {React, useState} from 'react'
import "./bghook.css"

export default function Bghook() {
var purple ="#800080"
const [bg, setbg] = useState(purple)


const changeColor=()=>{
    var color = " #FA8072";
    setbg(color)
}
const changeColor1=()=>{
    var color = " #DC143C";
    setbg(color)
}

  return (
    <><div style={{background:bg}}>
        <h1>hello</h1>
        <button onClick={changeColor} onDoubleClick={changeColor1}>click me</button>
        </div>
    </>
  )
}
