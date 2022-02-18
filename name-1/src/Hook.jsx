import {React,useState} from 'react'
import "./hook.css"
export default function Hook() {
    const [firstValue, setfirstValue] = useState(0);
    

const incNum=()=>{
    
    
    setfirstValue(firstValue+1)   
}

const DncNum=()=>{
    if(firstValue===0){
        return 0;
    }
    else{
        setfirstValue(firstValue-1) 
    }

}













  return (
    <>
 <div>
      <h1>{firstValue}</h1>
 
    <button onClick={incNum}>click me</button>
    <button onClick={DncNum}>click me</button>
    
    </div>
    

    </>
  )
}
