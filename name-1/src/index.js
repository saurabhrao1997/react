 import React from "react"; 
 import ReactDOM from "react-dom";

 let fname ="saurabh"
 let currentDate = new Date().toLocaleDateString();
 let currentTime = new Date().toLocaleTimeString();


 ReactDOM.render(<>
 <h1>my name is {fname}</h1>
 <h2>today's date is { currentDate}</h2>
 <h2>now time is {currentTime}</h2>
 </>,document.getElementById("root"))
