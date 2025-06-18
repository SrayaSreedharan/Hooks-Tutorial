// similar to usestate but Used for managing more complex state 
// const [state, dispatch] = useReducer(reducer, initialState);
//         reducer: A pure function that takes the current state nd returns the new state. 
//         initialState: The initial value of the state.
//         state:current value
        
import React, { useReducer } from 'react'
const initialState={count:0}
 function reducer(state, action) {
      switch (action.type) {
        case 'inc':
          return { count: state.count + 1 };
        case 'dec':
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    }

const UseReducer = () => {
    const[state,dispatch]= useReducer(reducer, initialState);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
    </div>
  )
}
export default UseReducer
