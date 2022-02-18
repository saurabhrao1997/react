import React from "react";
let fname ="saurabh"
let currentDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();


export default function Assignment() {
  return (
      <> <h1>my name is {fname}</h1>
      <h2>today's date is { currentDate}</h2>
      <h2>now time is {currentTime}</h2>
      </>
    
  )
}
