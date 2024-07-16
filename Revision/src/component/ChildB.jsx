import React from 'react'

// ----------> Props Drilling <---------------

const ChildB = ({prop2:{data,emp:{name,id}}}) => {
    console.log(data);
    console.log(name,id);
  return (
    <div>ChildB</div>
  )
}

export default ChildB