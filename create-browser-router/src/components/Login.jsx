import React, { useContext } from 'react'
import { GLOBALDATA } from './Context'

const Login = () => {
  let{loginUser, loginHandelChange, loginUserSubmit}= useContext(GLOBALDATA);

    return (
    <div id="form-container">
      <form >
        <h1>Login Form</h1>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder="Enter Email" value={loginUser.email}  onChange={loginHandelChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' placeholder="Enter Password" value={loginUser.password} onChange={loginHandelChange} />
        </div>
        <div className="form-group">
          <button onClick={loginUserSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login