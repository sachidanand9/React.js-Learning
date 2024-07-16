import React, { useEffect, useState } from 'react'
import userStyle from "../createUser/createuser.module.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const EditUser = () => {

  let [singleUser, setSingleUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",

  })
  let handelUpdate = (e) => {
    let { name, value } = e.target;
    setSingleUser({ ...singleUser, [name]: value });
  };
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      let { data } =await axios.get(`http://localhost:3000/employees/${id}`)
      console.log(data);
      setSingleUser(data)
    }
    fetchData()
  }, []);

  let updateForm = (e) => {
    e.preventDefault()
    console.log(singleUser);

    try {
      axios.put(`http://localhost:3000/employees/${id}`,singleUser);
      toast.success("successfuly updated")
      setSingleUser({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
    
      })
    window.location.assign('/all-user')
    } catch (error) {
      console.log(error,"error while updating");
    }
  }
  return (
    <div id={userStyle.formContainer}>
      {/* <Toaster/> */}
      <form >
        <div className={userStyle.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Name " value={singleUser.name} onChange={handelUpdate} />
        </div>
        <div className={userStyle.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter Email " value={singleUser.email} onChange={handelUpdate} />
        </div>
        <div className={userStyle.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" placeholder="Enter Password " value={singleUser.password} onChange={handelUpdate} />
        </div>

        <div className={userStyle.formGroup}>
          <label htmlFor="phoneNo">Phone no.</label>
          <input type="text" id="phoneNo" name="phoneNo" placeholder="Enter phoneNo " value={singleUser.phoneNo} onChange={handelUpdate} />
        </div>
        <div className={userStyle.formGroup}>
          <button onClick={updateForm}>Update</button>
        </div>
      </form>
    </div>
  )
}
export default EditUser