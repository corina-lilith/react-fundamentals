// import {useState} from "react";

// export const StateExample = () => {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount((prev) => prev + 1)

//     console.log(count);
//   }

//   return (
//      <div className="general">
//       <p>Count: {count}</p>
//       <button onClick={increaseCount}>Increase Counter</button>
//     </div>
//   );
// }

// 2. Toggle Visibility of Text
// import {useState} from 'react';

// export const StateExample = () => {
//   const [isOpen, setOpen] = useState(false);

// return (
//        <div className="general">
//         {isOpen ? "True" : "False"}
//         <button onClick={() => setOpen(!isOpen)}>Click me!</button>
//       </div>
//     );
//   }



// 3. Input Field That Displays Typed Text in Real-Time
// import {useState} from 'react';

// export const StateExample = () => {
//   const [title, setTitle] = useState("");


// return (
//          <div className="general">
//           <input onChange={(e) => setTitle(e.target.value)} value={title} id="title" />
//         </div>
//       );
//     }

// 4. Click counter that resets to 0 when it reaches 10
// import {useState} from 'react';

// export const StateExample = () => {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = () => {
//     if (counter === 9) {
//       setCounter(0)
//     } else (
//       setCounter(counter + 1)
//     )
//   }

//   return (
//          <div className="general">
//           <p>Count: {counter}</p>
//           <button onClick={incrementCounter}>+</button>
//         </div>
//       );
//     }

// 5. Form with first name and last name input fields, stored separately.
// import {useState } from 'react';

// export const StateExample = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");


// return (
//          <div className="general">
//           <input onChange={(e) => setFirstName(e.target.value)} value={firstName} id="firstName" />
//           <input onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastName" />
//         </div>
//       );
// }

// 6. Temperature converter between Celsius and Fahrenheit (one direction only).
// import {useState} from 'react';

// export const StateExample = () => {
//   const [temp, setTemp] = useState("");

//   return (
//             <div className="general">
//               <input type="number"
//               placeholder="Enter Celcius"
//               value={temp}
//               onChange={(e) => setTemp(e.target.value)}
//               />
//               <p>
//                 Fahrenheit: {temp !== "" && !isNaN(temp) ? ((Number(temp) * 9) / 5 + 32).toFixed(2) : "—"}
//               </p>
//             </div>
//           );
//     }

// 7. Show a warning message after clicking a button 5 times.
import {useState} from "react";

export const StateExample = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1);
      }

  return (
    <div className="general">
      <button onClick={handleClick}>Click Me</button>
      {clicks >= 5 && <p>⚠️ Warning! Too many clicks!</p>}
    </div>
  )
}