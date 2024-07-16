import React from 'react'

const Profile = () => {
 let {name,email,propic}=JSON.parse(localStorage.getItem("user"));
//  console.log(data);

  return (
    <div id = "profile-container">
      <img src={propic} alt=""/>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default Profile