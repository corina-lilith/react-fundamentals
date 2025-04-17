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



// It is a way to run code after something happens in your React component.
// Fetch data from an API when the page loads

// Set up a timer

// Listen to window events (like resize)

// Do anything that affects the outside world (not just returning JSX)


