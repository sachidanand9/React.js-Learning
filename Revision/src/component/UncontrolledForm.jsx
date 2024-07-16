import React, { useRef } from 'react'

const UncontrolledForm = () => {
    let demoRef = useRef();

    let change =()=>{
        console.log(demoRef.current);
        demoRef.current.style.backgroundColor="yellow";
    };

    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    let formSubmit=(e)=>{
        e.preventDefault();
        let userName = nameRef.current.value;
        let userEmail = emailRef.current.value;
        let userPassword = passwordRef.current.value;

        console.log({name:userName, email:userEmail, password:userPassword});
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
        <h1>Uncontrolled Form </h1>
        <label htmlFor="name">Name :</label>
            <input type="text" placeholder='Enter Name' id='name' name='name'  ref={nameRef} />
            <br />
            <label htmlFor="email">Email :</label>
            <input type="text" placeholder='Enter Email' id='email'name="email"  ref={emailRef}/>
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" placeholder='Enter Password' id='password' name="password" ref={passwordRef}  />
            <br />
            <input type="submit" />
             </form>


        <h3>useRef Example</h3>
        <h2 ref={demoRef}>Target me</h2>
        <button onClick={change}>click</button>
    </div>
  )
}

export default UncontrolledForm