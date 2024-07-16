import React, { useEffect, useState } from 'react'

const SideEffects=()=> {
    let[count1,setCount1]=useState(0);
    let[count2, setCount2]=useState(0);

    let counter1 =()=>{
        setCount1(count1 +1);
    };
    let counter2=()=>{
        setCount2(count2 +5);
    }
    // by default once execute

    useEffect(()=>{                 
        console.log("i am use Effect Hook");       
    })
    // },[count2]) 
  return (
    <div>
        <h1> Counter</h1>
        <h2> Counter1 ={count1}</h2>
        <button onClick={counter1}> Incre Count by 1</button>

        <h2> Counter2 = {count2}</h2>
        <button onClick={counter2}> Incre Count by 5</button>
    </div>
  )
}

export default SideEffects