import {React,useState} from 'react';
import "./formhook.css"

export default function Formhook() {
    const [fname, setfname] = useState("");
    const [fullname, setfullname] = useState();

    


    const inputEvent=(event)=>{
        console.log(event.target.value);
        setfname(event.target.value);
    }

const  changeText=()=>{
     setfullname(fname);
}


  return (
    <div>
        <h1>hello, {fullname}</h1>
        <input type="text" placeholder="Enter your name"
         onChange={inputEvent} value={fname} />
        <button onClick={changeText}>click me</button>
    </div>
  )
}
