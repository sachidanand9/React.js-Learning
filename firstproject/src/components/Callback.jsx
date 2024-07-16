import React, { useState, useCallback } from 'react';
import ChildCallback from './ChildCallback';

const Callback = () => {
    let[add,setAdd]= useState(0);
    let[minus, setMinus]= useState(100);

    let mul = useCallback(()=>{
        console.log("this is mul func");
    },[add]);
  return (
    <div> 
        <h1>Callback Example</h1>
        <ChildCallback mul ={mul}/>

        <h1>Add{add}</h1>
        <button onClick={()=>setAdd (add+1)}> Increment</button>
      
        <h1>minus{minus}</h1>
        <button onClick={()=>setMinus(minus-1)}> decrement</button>
    </div>
    
  );
};

export default Callback;