import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userStyle from "./alluser.module.css"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const AllUser = () => {
  let [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get("http://localhost:3000/employees")
      console.log(data);
      setData(data)
    }
    fetchData()
  }, []);
 let handelDelete=(id)=>{
    console.log(id);
    try {
      axios.delete(`http://localhost:3000/employees/${id}`)
      toast.success("successfuly deleted")
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
 }
  return (
    <div id={userStyle.cardWrapper}>
      {/* <h1 id={userStyle.heading}>AllUser</h1> */}
      {/* <div id={userStyle.mainContainer}> */}
        {data?.map(({ name, id, email, phoneNo }) => {
          // console.log(obj);
          // let{name, email, password, phoneNo}=obj
          return (
        <section key = {id} id ={userStyle.cardContainer}>
          <h2> Name : {name}</h2>
          <p> Email : {email}</p>
          <p> Phone No : {phoneNo}</p>
          <article className={userStyle.btnContainer}>
            <button><Link to = {`/edit/${id}`}>Edit </Link></button>
            <button onClick={()=>handelDelete(id)}> Delete </button>
          </article>
    </section>
  )
})}
    </div >
    // </div >
  )
}

export default AllUser