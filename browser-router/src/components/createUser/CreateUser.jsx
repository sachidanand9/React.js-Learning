import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import userStyle from "./createuser.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });
 let navigate = useNavigate();
  let handelChange = (e) => {
    // console.log("changed", e);
    let { name, value } = e.target;
    // console.log(name, value);
    setUserData({ ...userData, [name]: value }); // use spread opeator to avoid overlapping 
  };

  let formSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if(userData.name  !==""&& userData !=="" && userData.password  !== "" && userData.phoneNo  !== ""){
      try {
        axios.post("http://localhost:3000/employees",userData);
        toast.success("success")
        setUserData({
          name:"",
          email:"",
          password:"",
          phoneNo:"",
        });
        navigate('/all-user')
      } catch (error) {
        console.log(error,"something went wrong");
        toast.error("Something went Wrong")
      }
    } else {
      toast.error("Please Add data !")
    }
  //   try {
  //     axios.post("http://localhost:3000/employees",userData);
  //     toast.success("success")
  //     setUserData({
  //       name:"",
  //       email:"",
  //       password:"",
  //       phoneNo:"",
  //     })
  //   } catch (error) {
  //     console.log(error,"something went wrong");
  //     toast.error("Something went Wrong")
  //   }
  };
  return (
    <div id={userStyle.formContainer}>
      {/* <Toaster/> */}
      <form >
        <div className={userStyle.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Name " value={userData.name} onChange={handelChange} />
        </div>
        <div className={userStyle.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter Email " value={userData.email} onChange={handelChange} />
        </div>
        <div className={userStyle.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" placeholder="Enter Password " value={userData.password} onChange={handelChange} />
        </div>

        <div className={userStyle.formGroup}>
          <label htmlFor="phoneNo">Phone no.</label>
          <input type="text" id="phoneNo" name="phoneNo" placeholder="Enter phoneNo " value={userData.phoneNo} onChange={handelChange} />
        </div>
        <div className={userStyle.formGroup}>
          <button onClick={formSubmit}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser