// import {useEffect, useState} from "react";

// export const EffectExample = () => {
//   const [data, setData] = useState([]);
//   const [showJimmy, setShowJimmy] = useState(false);

//   useEffect(() => {
//     console.log("Jimmy");
//   });

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => setData(json))
//   }, []);

//   useEffect(() => {
//     console.log("Jimmy");
//   }, [showJimmy]);

//   return (
//     <div style={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
        
//     }}>
//     <button onClick={() => setShowJimmy((prev) => !prev)}>
//       Toggle
//     </button>
//     <h1>Posts</h1>
//     <ul>
//       {data.map((item) => (
//         <li>{item.title}</li>
//       ))}
//     </ul>
//   </div>
// )}


// It is a way to run code after something happens in your React component.
// Fetch data from an API when the page loads

// Set up a timer

// Listen to window events (like resize)

// Do anything that affects the outside world (not just returning JSX)

// 1. Log to console whenever the component renders or updates
//    Hint: Try using console.log inside the effect. What triggers re-renders?
// import {useEffect} from 'react';

// export const EffectExample = () => {
//   useEffect(() => {
//     console.log('Component mounted or updated');
//   });

//   return <div className="general">Hello again</div>;
// }

// 2. Change the document title to show a count
//    Hint: Use state to track the count, and update the title inside useEffect.

// import {useState, useEffect} from 'react';

// export const EffectExample = () => {
//   const [count, setCount] = useState(0);

//   const titleNumber = () => {
//     setCount((prev) => prev + 1)
//   }

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div className="general">
//       <h1>Title: {count}</h1>
//       <button onClick={titleNumber}>Increment</button>

//     </div>
//   )
// }

// 3. Run a fetch call when the component mounts
//    Hint: Use the empty dependency array to run something only once.

// import { useEffect, useState } from 'react';

// export const EffectExample = () => {
//   const [call, setCall] = useState(null);

//   useEffect(() => {
//     // This runs once when the component mounts
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => response.json())
//       .then((data) => setCall(data));
//   }, []);

//   useEffect(() => {
//     // Update the document title when data is fetched
//     if (call) {
//       document.title = `Call: ${call.title}`;
//     }
//   }, [call]);

//   return (
//     <div className="general">
//       <h1>Fetched Post</h1>
//       {call ? (
//         <>
//           <p><strong>Title:</strong> {call.title}</p>
//           <p><strong>Body:</strong> {call.body}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// 4. Run a timer that updates the screen every second.
// import {useState, useEffect} from 'react';

// export const EffectExample = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("useEffect runs");

//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1)
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="general">
//       <h1>{count}</h1>
//     </div>
//   )
// }

// 4.1 Run a timer that updates the screen every second and adds to the minutes when the seconds reach 60
// import {useState, useEffect} from 'react';

// export const EffectExample = () => {
// const [time, setTime] = useState({minutes: 0, seconds: 0});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prevTime) => {
//         const newSeconds = prevTime.seconds + 1;
//         const newMinutes = prevTime.minutes;

//         if (newSeconds === 60) {
//           return {minutes: newMinutes + 1, seconds: 0};
//         }
//         return {minutes: newMinutes, seconds: newSeconds};
//       });
//     }, 1000);
//     return () => clearInterval(interval);
// }, [])

//   return (
//     <div className="general">
//       {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
//     </div>
//   )
// }

// 4.2 Run a timer that updates the screen every second and adds to the minutes and hours
import {useState, useEffect} from 'react';

export const EffectExample = () => {
  const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes + 1;
        let newHours = prevTime.hours;

        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        if (newMinutes === 60) {
          newMinutes = 0;
          newHours += 1;
        }
        return {hours: newHours, minutes: newMinutes, seconds: newSeconds};
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
        <div className="general">
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </div>
      )
}