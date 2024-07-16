import React from 'react'
import ChildB from './ChildB'   //-----> props driliing 

const ChildA = (x) => {
  return (
    <div>
        <ChildB prop2 ={x}/>
    </div>
  )
}

export default ChildA