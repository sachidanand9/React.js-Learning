import React from 'react'
import Child from './component/Child'
import ChildA from './component/ChildA';

const Ap = () => {

    let data = "Hello"
    let emp = {
        name : "Sandeep",
        id : 2,
    };
  return (
    <div>
        {/* <Child props ={data} emp = {emp}/> */}  
        <ChildA data ={data} emp = {emp}/> 

    </div>
  )
}

export default Ap