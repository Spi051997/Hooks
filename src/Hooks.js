import React,{useState} from "react";
import "./App.css";

function Hooks() {
     const [email,setEmail]=useState('a@gmailcom')
    // const email=emailstate[0];
    // const setEmail=emailstate[1];


    const [name,setname]=useState('')
    // const name=namestate[0];
    // const setname=namestate[1];
    function handleoncange(e)
    {
        setEmail(e.target.value)
    }
    function handlename(e)
    {
        setname(e.target.value)
    }
  return (
    <div className="App">
      <input value={email} onChange={handleoncange} />
      <br></br>
      <input value={name} onChange={handlename} />
      <p>{email}</p>
      <p>{name}</p>
    </div>
  );
}

export default Hooks;
