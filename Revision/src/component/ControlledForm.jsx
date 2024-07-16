import React, { useState } from 'react'

const ControlledForm = () => {

    // let[name,setName]=useState("");
    // let[email,setEmail]=useState("");
    // let[password,setPassword]=useState("");

    // let handelName =(x)=>{
    //     // console.log(x.target.value);
    //     setName(x.target.value);
    // };
    // let handelEmail =(x)=>{
    //     // console.log(x.target.value);
    //     setEmail(x.target.value);
    // };
    // let handelPassword =(x)=>{
    //     // console.log(x.target.value);
    //     setPassword(x.target.value);
    // }
    let[user, setUser]=useState({
        name:"",
        email:"",
        password:"",
    });

    let handelChange=(x)=>{
        let{name,value}=x.target;
        setUser({...user,[name]:value})
    }

    // let formSubmit=(x)=>{
        // x.preventDefault();
        // console.log("Form Submitted");
        // let userdata={
        //     name: name,
        //     email:email,
        //     password:password,
        // }
        // console.log(userdata);
    // };

    let formSubmit=(x)=>{
        x.preventDefault();
         console.log("Form submitted");
         console.log(user);
    }

  return (
    <div>
        <h1>Controlled Form</h1>
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder='Enter Name' id='name' name='name' value={user.name}  onChange={handelChange}/>
            <br />
            <label htmlFor="email">Email :</label>
            <input type="text" placeholder='Enter Email' id='email'name="email" value={user.email} onChange={handelChange}/>
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" placeholder='Enter Password' id='password' name="password" value={user.password} onChange={handelChange} />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default ControlledForm