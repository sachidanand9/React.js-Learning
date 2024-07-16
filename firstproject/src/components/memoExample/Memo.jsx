import React, {useMemo, useState} from "react";
const Memo = () => {
 
    let[add, setAdd]=useState(0);
    let[minus, setMinus]=useState(100);

// ------> issue with this it will execute with other button also<------

    // function multiply(){
    //   console.log("multiply func executed ");
    //   return add*10;
    // }

//--------> by using memo we can stop the extra execution of the function on decrement and provide extra optimization <----------
//-------> it will accepts two paramenter (callback function ,[]dependency) <---------

    let multiply = useMemo(()=>{
      console.log("multiply func executed ");
      return add*10;
    },[add])

    return (
    <div>
      <h1>Memo example</h1>
      <h1>Multiply{multiply}</h1>

      <h1>Addition{add}</h1>

      <button onClick={()=>setAdd(add+1)}>Increment</button>

      <h1>Subtraction {minus}</h1>
      <button onClick={()=>setMinus(minus-1)}>Decrement</button>

    </div>
  )
}

export default Memo