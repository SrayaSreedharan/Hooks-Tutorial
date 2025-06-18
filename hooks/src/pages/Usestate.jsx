// simple count inc and dec code using "usestate" hook To manage and update the state
import React, { useState } from 'react'

const Usestate = () => {
    const[count,setCount]=useState(0)
    const inc=()=>{
        setCount(count+1)
    }
     const dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Usestate
