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
// import {useState} from "react";

// export const StateExample = () => {
//   const [clicks, setClicks] = useState(0)

//   const handleClick = () => {
//     setClicks(clicks + 1);
//       }

//   return (
//     <div className="general">
//       <button onClick={handleClick}>Click Me</button>
//       {clicks >= 5 && <p>⚠️ Warning! Too many clicks!</p>}
//     </div>
//   )
// }

// 8. Dark mode toggle switch.
// import {useState} from 'react';

// export const StateExample = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleClick = () => {
//     setIsDarkMode(!isDarkMode);
//   }

//   const styles = {
//     backgroundColor: isDarkMode ? 'black' : 'white',
//     color: isDarkMode ? 'white' : 'black',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column'
//   };

//   return (
//     <div style={styles}>
//       <button onClick={handleClick}>
//         {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
//     </div>
//   )
// }

// 9. Like button that toggles between "Like" and "Unlike."
// import {useState} from 'react';

// export const StateExample = () => {
//   const [isLike, setIsLike] = useState(false);

//   const handleClick = () => {
//     setIsLike(!isLike)
//   }

//   return (
//          <div className="general">
//           <button onClick={handleClick}>
//           {isLike ? 'Like' : 'Unlike'}
//           </button>
//         </div>
//       );
// }

// 10. Select dropdown that updates displayed text with the selected option.
// import {useState} from 'react';

// export const StateExample = () => {
//   const [category, setCategory] = useState();

//   const handleCategoryChange = (category) => {
//     setCategory(category);
//     console.log(category);
//   }

//   return (
//              <div className="general">
//               <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
//                 <option id="0" >Personal</option>
//                 <option id="1" >Work</option>
//               </select>
//             </div>
//           );
// }

//11. Show a list of tasks, and add to it using an input and button.
import {useState} from 'react';

export const StateExample = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="general">
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <input onChange={(e) => setTask(e.target.value)} value={task} id="task" placeholder="New Task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

