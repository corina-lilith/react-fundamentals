# useState Drills (20)

## const [thing, setThing] = useState("something");

1. Counter with Increment/Decrement Buttons
   Hint: Keep track of a number that increases or decreases on button clicks.

2. Toggle Visibility of Text
   Hint: Manage a boolean state that shows or hides a paragraph.

3. Input Field That Displays Typed Text in Real-Time
   Hint: Update state with the onChange event from an input.

4. Click counter that resets to 0 when it reaches 10.

5. Form with first name and last name input fields, stored separately.

6. Temperature converter between Celsius and Fahrenheit (one direction only).

7. Show a warning message after clicking a button 5 times.

8. Dark mode toggle switch.

9. Like button that toggles between "Like" and "Unlike."

10. Select dropdown that updates displayed text with the selected option.

11. Show a list of tasks, and add to it using an input and button.

12. Track the current number of characters typed into a textarea.

13. Star rating component with 5 clickable stars.

14. Update background color based on a color picker input.

15. Show/hide password toggle on a password input field.

16. Count how many times a user has clicked outside of a box.

17. Add/remove items in a list with a delete button beside each.

18. Disable a submit button until a checkbox is checked.

19. Display a random quote each time a button is pressed.

20. Manage state for tabs: switch between different content panels.

# useEffect Drills (20)

1. Log to console whenever the component renders or updates
   Hint: Try using console.log inside the effect. What triggers re-renders?

2. Change the document title to show a count
   Hint: Use state to track the count, and update the title inside useEffect.

3. Run a fetch call when the component mounts
   Hint: Use the empty dependency array to run something only once.

4. Run a timer that updates the screen every second.

5. Fetch user data from an API when a button is clicked.

6. Cleanup a timer when the component unmounts.

7. Alert the user when they reach 100 clicks.

8. Auto-focus an input field on page load.

9. Save a form's data to localStorage when it changes.

10. Load saved data from localStorage when the component mounts.

11. Track the browser window's width and update it on resize.

12. Track mouse movement and show coordinates on screen.

13. Listen to the keydown event and show which key was pressed.

14. Redirect to another page if a condition becomes true.

15. Animate a value on state change using a timer.

16. Debounce input changes (delay updating state while typing).

17. Poll an API every 5 seconds until a condition is met.

18. Log the previous value of a state variable.

19. Show a message when the user goes offline.

20. Detect when the component is mounted or unmounted (console message).

# useReducer Drills (20)

1. Counter using reducer logic
   Hint: Replace useState with useReducer and dispatch actions like 'INCREMENT'.

2. Toggle between light and dark mode
   Hint: Set up a reducer that toggles between two themes using action types.

3. Form with multiple inputs managed via reducer
   Hint: Create an object state where each key represents an input field.

4. Build a todo list with add, toggle complete, and delete actions.

5. Shopping cart with add/remove item functionality.

6. Quiz with next/prev question and track score.

7. A tab system that stores the active tab in state.

8. Undo/redo functionality for text editing.

9. Modal toggle with open/close actions.

10. Calculator state management (handle operations, result).

11. Login form with success/error state handling.

12. Voting system where each button increases a count per option.

13. Like/dislike buttons using one reducer.

14. Toggle several switches (light panel) using the same reducer.

15. Load/save notes with action types like LOAD_NOTES, SAVE_NOTE.

16. Email subscription form with validation status in reducer state.

17. Accordion list with expanded/collapsed sections.

18. Multiple counters managed in a single reducer.

19. Manage form validation errors with reducer actions.

20. State machine with multiple views (loading, error, success).
