import { useState } from "react";

const Counter =()=>{
// Destructuring 
let[Count, setCount]=useState(0);
let incre =()=>{ setCount(Count+1)};
let decre =()=>{ setCount(Count-1)};
let reset =()=>{ setCount(0)};

    return(
        <div>
            <h1>Counter{Count}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
export default Counter;