import {useState} from "react";

export const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1)

    console.log(count);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // optional, for vertical centering
      
    }}>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Counter</button>
    </div>
  );
}


// A state is a variable that you can create and change it's value and when it's value is changed, it will automatically trigger a re-render of the page to demonstrate the new value 5:48