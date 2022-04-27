import React, { useEffect, useState } from "react";

function UseEffect(props) {
  const [userid, Setuserid] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=${userid}";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  },[userid]);

  useEffect(()=>{
      document.addEventListener('mouseover',movemouseo)
  })

  function movemouseo(event)
  {
      console.log(event.clientX);

      // perform clean up operation avoid memory leak

      return()=>
      {
        document.removeEventListener('mouseover',movemouseo)
      }
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => Setuserid("2")}>Change user_id to 2</button>
      {data.map((user) => (
       
        <p>user.title</p>
       
      ))}
    </div>
  );
}

export default UseEffect;
