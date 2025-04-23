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
// import {useState, useEffect} from 'react';

// export const EffectExample = () => {
//   const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prevTime) => {
//         let newSeconds = prevTime.seconds + 1;
//         let newMinutes = prevTime.minutes;
//         let newHours = prevTime.hours;

//         if (newSeconds === 60) {
//           newSeconds = 0;
//           newMinutes += 1;
//         }

//         if (newMinutes === 60) {
//           newMinutes = 0;
//           newHours += 1;
//         }
//         return {hours: newHours, minutes: newMinutes, seconds: newSeconds};
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [])

//   return (
//         <div className="general">
//           {String(time.hours).padStart(2, '0')}:
//           {String(time.minutes).padStart(2, '0')}:
//           {String(time.seconds).padStart(2, '0')}
//         </div>
//       )
// }

// 5. Fetch user data from an API when a button is clicked.
// import {useState} from 'react';

// export const EffectExample= () => {
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);

//   const getUserData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json())
//       .then(data => setUser(data))
//       .catch(err => console.error("Fetch error:", err));

//       setUserId((prevId) => (prevId % 10) + 1)
//   };

//   return (
//     <div className="general">
//      <button onClick={getUserData}>Get User #{userId}</button>
//      {user && (
//       <div>
//         <h1>{user.name}</h1>
//         <p>{user.email}</p>
//         <p>{user.address.city}</p>
//       </div>
//      )}
//     </div>
//   );
// };

// 6. Alert the user when they reach 10 clicks = added a conditional button
// import {useState, useEffect} from 'react';

// export const EffectExample= () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prev => prev + 1);
//   };

//   useEffect(() => {
//     if (count === 10) {
//       alert("🎉 You reached 10 clicks!")
//     }
//   }, [count]);

//   const reset = () => setCount(0);

//   return (
//     <div className="general">
//       {count < 10 ? (
//         <button onClick={increment}>Click Me {count}</button>
//       ) : (
//         <button onClick={reset}>Reset</button>
//       )}
//     </div>
//   );
// };

// 7. Cleanup a timer when the component unmounts.
import {useState, useEffect} from 'react';


export const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // start the interval when the component mounts
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // cleanup function: stop the interval when the component unmounts
    return () => {
      clearInterval(id);
      console.log('⏹ Timer cleaned up!')
    };
  }, []); // empty dependency array = run once on mount


  return (
    <div className="general">
      <h1>{count}</h1>
    </div>
  )
}
// Starts a timer when the component mounts then increments the counter every second. When the component unmounts (disappears), the timer is stopped
//

