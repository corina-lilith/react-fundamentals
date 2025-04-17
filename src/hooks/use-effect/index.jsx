import {useEffect, useState} from "react";



export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showJimmy, setShowJimmy] = useState(false);

  useEffect(() => {
    console.log("Jimmy");
  });


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json))
  }, []);

  useEffect(() => {
    console.log("Jimmy");
  }, [showJimmy]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
     
      
    }}>
    <button onClick={() => setShowJimmy((prev) => !prev)}>
      Toggle
    </button>
    <h1>Posts</h1>
    <ul>
      {data.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  </div>
)}



// fetch data from an API immediately when the page renders
// what's a "dependency list"?
// https://www.youtube.com/watch?v=xfKYYRE6-TQ
// UP TO: 20:08