import React,{useState} from "react";
import "./App.css";

function Hooks() {
     const emailstate=useState('a@gmailcom')
    const email=emailstate[0];
    const setEmail=emailstate[1];
    function handleoncange(e)
    {
        setEmail(e.target.value)


    }
  return (
    <div className="App">
      <input value={email} onChange={handleoncange} />
      <p>{email}</p>
    </div>
  );
}

export default Hooks;
