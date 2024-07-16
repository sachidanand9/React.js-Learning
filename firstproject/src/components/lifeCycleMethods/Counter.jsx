import React, { useEffect, useState } from 'react'

const Counter = () => {
  let [count , setCount] = useState(0);

  //---> Mounting Phase <----

  useEffect(()=>{
    console.log("MOUNTING PHASE");
  },[]);

  //---> Updating Phase <------

  useEffect(()=>{
    console.log("Upadting Phase",count);

    return function(){
      console.log("Counter Value before Update", count);
    }
  },[count]);

  //----> Unmounting Phase <-----

  useEffect(()=>{
    console.log("I am in Unmounting Phase ");

//----> Clear Function <----

    return function() {
      console.log("Component Unmounted");
    }
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>increase</button>
    </div>
  )
}

export default Counter