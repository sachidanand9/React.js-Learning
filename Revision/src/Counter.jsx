import React, { useState } from 'react'

const Counter = () => {
    let[count, setCount]= useState(0);

    function increment(){
       setCount(count+1);
    }
  return (
    <div>
        <h1>Counter - {count}</h1>
        <button onClick={increment}>Increment</button>
        </div>
  )
}

export default Counter