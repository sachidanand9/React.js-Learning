import React from 'react'
import { useContext } from "react";
import { GLOBALDATA } from './Context';
const Register = () => {
  let {registerUsers, setRegisterUsers , registerUsersSubmit,registerHandelChange} = useContext(GLOBALDATA)

  // console.log(registerUsers);
  return (
    <div id="form-container">
      <form >
        <h1>Register Form</h1>
    <div className='form-group'>
      <label htmlFor="name">Name</label>
      <br />
      <input type='text' id='name' name='name' placeholder="Enter Name"  value={registerUsers.name} onChange={registerHandelChange}></input>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        {/* <br /> */}
        <input 
        type="email"
        id="email"
        name="email"
        placeholder="Enter Email" value={registerUsers.email} onChange={registerHandelChange} />
      </div>
      {/* <br />  */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        {/* <br /> */}
        <input 
        type="password"
        id="password"
        name="password"
        placeholder="Enter password" value={registerUsers.password} onChange={registerHandelChange}/>
      </div>
      {/* <br /> */}
      <div className="form-group">
        <label htmlFor="propic">Pro_pic</label>
        <input 
        type="url"
        id="propic"
        name="propic"
        placeholder="Enter propic"  value={registerUsers.propic} onChange={registerHandelChange}/>
      </div>
      <br />
      
      <div className="form-group">
      <button onClick={registerUsersSubmit}>Register</button>

      </div>
      </form>
      </div>
  )
}

export default Register