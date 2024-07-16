import React from 'react'

const Child = ({data, emp :{name,id}}) => {
    console.log(data);
    console.log(name,id);
    // console.log(x);   // printing object {prop:'Hello}
    // console.log(x.props); // Hello

    // let{props}=x;   // destructuring 
    // console.log(props);
  return (
    <div>
        <h1> I am child component</h1>
    </div>
  )
}

export default Child